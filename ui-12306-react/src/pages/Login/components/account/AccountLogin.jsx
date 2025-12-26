import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as auth from '../../../../utils/auth'
import styles from './AccountLogin.module.css'

export default function AccountLogin() {
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [error, setError] = useState('')
  const [verifyOpen, setVerifyOpen] = useState(false)
  const [idSuffix, setIdSuffix] = useState('')
  const [smsCode, setSmsCode] = useState('')
  const [count, setCount] = useState(0)
  const [verifyError, setVerifyError] = useState('')

  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => { if (!verifyOpen) { setIdSuffix(''); setSmsCode(''); setCount(0); setVerifyError('') } }, [verifyOpen])
  useEffect(() => { if (count<=0) return; const t=setTimeout(()=>setCount(count-1),1000); return ()=>clearTimeout(t) }, [count])
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
    setVerifyOpen(true)
  }

  const handleSendCode = async () => {
    if (count>0) return
    if (idSuffix.length!==4) return
    try {
      if (/^\d{11}$/.test(user)) {
        const res = await fetch('/api/auth/send-code', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ mobile: user })
        })
        const data = await res.json()
        if (data.code !== 0) {
          setVerifyError(data.msg || '验证码发送失败')
          return
        }
      }
      setCount(120)
      setVerifyError('')
    } catch (err) {
      setVerifyError('验证码发送失败')
    }
  }

  const handleVerifyConfirm = async () => {
    if (idSuffix.length!==4 || smsCode.length!==6) {
      setVerifyError('请输入完整信息')
      return
    }
    setVerifyError('')
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: pwd, code: smsCode })
      })
      const data = await res.json()
      if (data.code === 0) {
        auth.login(data.data.user, data.data.token)
        const params = new URLSearchParams(location.search)
        const redirectQ = params.get('redirect')
        const redirectS = location.state && location.state.redirect
        setVerifyOpen(false)
        navigate(redirectQ || redirectS || '/')
      } else {
        setVerifyError(data.msg || '登录失败')
      }
    } catch (err) {
      setVerifyError('登录服务异常')
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
      {verifyOpen && (
        <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.45)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000 }} role="dialog" aria-label="选择验证方式">
          <div style={{ width: 460, background:'#fff', borderRadius:6, boxShadow:'0 8px 24px rgba(0,0,0,0.2)' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 14px', borderBottom:'1px solid #eee' }}>
              <strong>选择验证方式</strong>
              <a onClick={()=>setVerifyOpen(false)} aria-label="关闭" style={{ cursor:'pointer' }}>×</a>
            </div>
            <div style={{ padding:16 }}>
              <div style={{ color:'#3b99fc', fontWeight:600, marginBottom:12 }}>短信验证</div>
              <div style={{ marginBottom:12 }}>
                <input value={idSuffix} onChange={e=>setIdSuffix(e.target.value)} maxLength={4} placeholder="请输入登录账号绑定的证件号后4位" aria-label="证件号后4位" style={{ width:'100%', height:38, border:'1px solid #dbeaf8', borderRadius:4, padding:'0 10px' }} />
              </div>
              <div style={{ display:'flex', gap:8, alignItems:'center', marginBottom:12 }}>
                <input value={smsCode} onChange={e=>setSmsCode(e.target.value)} maxLength={6} placeholder="输入验证码" aria-label="验证码" style={{ flex:1, height:38, border:'1px solid #dbeaf8', borderRadius:4, padding:'0 10px' }} />
                <a onClick={handleSendCode} aria-label="获取验证码" style={{ width:120, textAlign:'center', height:38, lineHeight:'38px', background: idSuffix.length===4 && count===0 ? '#60c6e7' : '#ccc', color:'#fff', borderRadius:4, cursor: idSuffix.length===4 && count===0 ? 'pointer' : 'not-allowed' }}>{count>0?`重新获取(${count}s)`:'获取验证码'}</a>
              </div>
              {verifyError && <div style={{ color:'#d9534f', marginBottom:8 }}>{verifyError}</div>}
              <div style={{ textAlign:'center', marginTop:8 }}>
                <a onClick={handleVerifyConfirm} aria-label="确定" style={{ display:'inline-block', width:200, height:40, lineHeight:'40px', background: smsCode.length===6 && idSuffix.length===4 ? '#ff8d2b' : '#ccc', color:'#fff', borderRadius:4, cursor: smsCode.length===6 && idSuffix.length===4 ? 'pointer' : 'not-allowed' }}>确定</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
