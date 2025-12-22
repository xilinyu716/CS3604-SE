import { useEffect, useState } from 'react'
import styles from './MobileVerifyModal.module.css'

export default function MobileVerifyModal({ open, mobileNo, onClose, onSuccess }) {
  const [code, setCode] = useState('')
  const [count, setCount] = useState(0)
  const [debugCode, setDebugCode] = useState('')

  useEffect(() => {
    if (!open) return
    setCode('')
    setCount(0)
    setDebugCode('')
  }, [open])

  useEffect(() => {
    if (count <= 0) return
    const t = setTimeout(() => setCount(count - 1), 1000)
    return () => clearTimeout(t)
  }, [count])

  const handleSendCode = async () => {
    if (count > 0) return
    if (!mobileNo) return alert('手机号获取失败')
    
    try {
      const res = await fetch('/api/auth/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile: mobileNo })
      })
      const data = await res.json()
      if (data.code === 0) {
        setCount(120)
        // In dev, show code in UI instead of alert
        if (data.debugCode) setDebugCode(data.debugCode)
      } else {
        alert(data.msg)
      }
    } catch (err) {
      console.error(err)
      alert('发送验证码失败')
    }
  }

  if (!open) return null

  return (
    <div className={styles.mask}>
      <div className={styles.box}>
        <div className={styles.hd}>
          <strong>手机双向验证</strong>
          <a onClick={onClose} style={{cursor:'pointer'}}>关闭</a>
        </div>
        <div className={styles.bd}>
          <div className={styles.row}>
            <div>验证码：</div>
            <input 
              className={styles.inptxt} 
              value={code} 
              onChange={e=>setCode(e.target.value)} 
              maxLength={6}
              autoFocus
              placeholder="请输入验证码"
            />
            <a 
              className={styles.btn92s} 
              onClick={handleSendCode}
              style={{cursor: count > 0 ? 'not-allowed' : 'pointer', background: count > 0 ? '#ccc' : '#60c6e7'}}
            >
              {count>0?`重新获取(${count}s)`:'获取验证码'}
            </a>
          </div>
          <div className={styles.row}>
            <div className={styles.colorA}>
              {debugCode && <span>测试环境验证码: <strong>{debugCode}</strong></span>}
            </div>
          </div>
          <div className={styles.actions}>
            <a 
              className={styles.btn92s} 
              onClick={() => code.length===6 && onSuccess(code)}
              style={{cursor: code.length===6 ? 'pointer' : 'not-allowed', opacity: code.length===6 ? 1 : 0.6}}
            >
              完成注册
            </a>
            <a onClick={onClose} style={{cursor:'pointer'}}>返回修改</a>
          </div>
        </div>
      </div>
    </div>
  )
}
