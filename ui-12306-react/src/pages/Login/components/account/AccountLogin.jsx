import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as auth from '../../../../utils/auth'
import styles from './AccountLogin.module.css'

export default function AccountLogin() {
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const location = useLocation()
  const submit = async () => {
    if (!user || !pwd) {
      setError('用户名或密码输入错误')
      return
    }
    if (pwd.length < 6) {
      setError('密码长度至少6位')
      return
    }
    setError('')
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: pwd })
      })
      const data = await res.json()
      
      if (data.code === 0) {
        // Save user and token
        auth.login(data.data.user, data.data.token)
        
        const params = new URLSearchParams(location.search)
        const redirectQ = params.get('redirect')
        const redirectS = location.state && location.state.redirect
        navigate(redirectQ || redirectS || '/')
      } else {
        setError(data.msg || '登录失败')
      }
    } catch (err) {
      console.error(err)
      setError('登录服务异常')
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.item}>
        <label className={styles.label}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#dadada">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </label>
        <input className={styles.input} placeholder="用户名/邮箱/手机号" value={user} onChange={e => setUser(e.target.value)} aria-label="请输入用户名或邮箱或手机号" />
      </div>
      <div className={styles.item}>
        <label className={styles.label}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#dadada">
            <rect x="5" y="10" width="14" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
        </label>
        <input type="password" className={styles.input} placeholder="密码" value={pwd} onChange={e => setPwd(e.target.value)} aria-label="请输入密码" autoComplete="new-password" />
      </div>
      {error && (
        <div className={styles.error} role="alertdialog" aria-label="错误提示">
          <span>{error}</span>
        </div>
      )}
      <div className={styles.btns}>
        <a className={`${styles.btn} ${styles.btnPrimary}`} onClick={submit}>立即登录</a>
      </div>
      <div className={styles.links}>
        <Link className={styles.linkPrimary} to="/register">注册12306账号</Link>
        |
        <Link className={styles.linkLighter} to="/forgot">忘记密码？</Link>
      </div>
    </div>
  )
}
