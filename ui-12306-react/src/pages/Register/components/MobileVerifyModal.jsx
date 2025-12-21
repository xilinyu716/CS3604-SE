import { useEffect, useState } from 'react'
import styles from './MobileVerifyModal.module.css'

export default function MobileVerifyModal({ open, onClose, onSuccess }) {
  const [code, setCode] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!open) return
    setCode('')
    setCount(120)
  }, [open])

  useEffect(() => {
    if (count <= 0) return
    const t = setTimeout(() => setCount(count - 1), 1000)
    return () => clearTimeout(t)
  }, [count])

  if (!open) return null

  return (
    <div className={styles.mask}>
      <div className={styles.box}>
        <div className={styles.hd}>
          <strong>手机双向验证</strong>
          <a onClick={onClose}>关闭</a>
        </div>
        <div className={styles.bd}>
          <div className={styles.row}>
            <div>验证码：</div>
            <input className={styles.inptxt} value={code} onChange={e=>setCode(e.target.value)} maxLength={6} />
            <a className={styles.btn92s} onClick={() => setCount(120)}>{count>0?`重新获取(${count}s)`:'重新获取验证码'}</a>
          </div>
          <div className={styles.row}>
            <div className={styles.colorA}></div>
          </div>
          <div className={styles.actions}>
            <a className={styles.btn92s} onClick={() => code.length===6 && onSuccess()}>完成注册</a>
            <a onClick={onClose}>返回修改</a>
          </div>
        </div>
      </div>
    </div>
  )
}
