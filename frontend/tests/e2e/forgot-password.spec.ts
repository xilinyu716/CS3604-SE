// filepath: frontend/tests/e2e/forgot-password.spec.ts
import { test, expect } from '@playwright/test';
import { spawn, ChildProcessWithoutNullStreams } from 'child_process';
import * as http from 'http';

const BASE_URL = 'http://localhost:5523';
let server: ChildProcessWithoutNullStreams | null = null;

async function waitForServer(url: string, tries = 24, intervalMs = 500): Promise<void> {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const attempt = () => {
      http.get(url, res => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 500) resolve();
        else retry();
      }).on('error', retry);
    };
    const retry = () => {
      attempts++;
      if (attempts >= tries) reject(new Error('Server not reachable'));
      else setTimeout(attempt, intervalMs);
    };
    attempt();
  });
}

test.setTimeout(60000);

test.beforeAll(async () => {
  server = spawn('node', ['../../my_railway/server.js'], { cwd: __dirname, stdio: 'pipe' });
  // 等待前端服务可用
  await waitForServer(`${BASE_URL}/login.html`);
  // 确保后端健康
  try {
    const health = await fetch('http://localhost:5000/health');
    if (!health.ok) throw new Error('backend not healthy');
  } catch {}
  // 预注册用于重置密码的账户
  try {
    await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: '13800000000', password: 'Old12345!' })
    });
  } catch {}
});

test.afterAll(async () => {
  if (server) {
    try { server.kill(); } catch { /* ignore */ }
  }
});

test.describe('忘记密码流程', () => {
  test('鉴于登录页提供忘记密码入口；当点击后进入手机找回；那么展现手机号与证件信息并可提交', async ({ page }) => {
    page.on('dialog', d => d.accept());
    await page.goto(`${BASE_URL}/login.html`);
    await expect(page.getByRole('link', { name: '忘记密码' })).toBeVisible();

    await page.getByRole('link', { name: '忘记密码' }).click();
    await expect(page).toHaveURL(`${BASE_URL}/phone_verify.html`);
    await expect(page.getByPlaceholder('请输入手机号')).toBeVisible();
    await expect(page.getByRole('button', { name: '提交' })).toBeVisible();
  });

  test('鉴于手机号有效；当获取验证码并点击下一步；那么跳转到设置新密码页', async ({ page }) => {
    page.on('dialog', d => d.accept());
    await page.goto(`${BASE_URL}/phone_verify.html`);
    await page.fill('#phone', '13800000000');
    await page.selectOption('#docType', 'id');
    await page.fill('#docNumber', '123456789012345678');
    await page.getByRole('button', { name: '提交' }).click();
    await expect(page).toHaveURL(new RegExp(`${BASE_URL}/forgot_password\\.html\\?phone=13800000000`));
    await page.getByRole('button', { name: '获取手机验证码' }).click();
    await expect(page.locator('#code')).toHaveValue('123456');
    await page.getByRole('button', { name: '提交' }).click();
    await expect(page).toHaveURL(new RegExp(`${BASE_URL}/reset_password\\.html\\?phone=13800000000`));
    await expect(page.getByRole('button', { name: '提交' })).toBeVisible();
  });

  test('鉴于设置新密码；当提交一致的新密码；那么展示成功信息并跳转成功页', async ({ page }) => {
    await page.goto(`${BASE_URL}/reset_password.html?phone=13800000000`);
    await page.fill('#newPassword', 'Abc12345!');
    await page.fill('#confirmPassword', 'Abc12345!');
    await page.getByRole('button', { name: '提交' }).click();

    await expect(page).toHaveURL(`${BASE_URL}/reset_success.html`, { timeout: 20000 });
    await expect(page.getByRole('heading', { name: '新密码设置成功！' })).toBeVisible();
  });

  test('鉴于密码已重置；当使用新密码登录；那么跳转到首页', async ({ page }) => {
    await page.goto(`${BASE_URL}/login.html`);
    await page.fill('#loginUser', '13800000000');
    await page.fill('#loginPwd', 'Abc12345!');
    await page.getByRole('button', { name: '登录' }).click();
    await expect(page).toHaveURL(`${BASE_URL}/index.html`, { timeout: 20000 });
  });
});
