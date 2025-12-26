import styles from './QrLogin.module.css'
import { Link } from 'react-router-dom'

export default function QrLogin() {
  return (
    <div>
      <div className={styles.con}>
        <div className={styles.main}>
          <div className={styles.qrPic}>
            <img src="/assets/public.png" alt="二维码" />
          </div>
        </div>
        <div className={styles.txt}>打开<span className={styles.primary}>12306手机APP</span> 扫描二维码</div>
        <div className={styles.txt}><Link className={styles.primary} to="/register">注册12306账号</Link></div>
      </div>
      <ul className={styles.ft}>
        <li>
          <i className={styles.circle}>
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="6" height="6" rx="1.5"></rect>
              <rect x="15" y="3" width="6" height="6" rx="1.5"></rect>
              <rect x="3" y="15" width="6" height="6" rx="1.5"></rect>
              <rect x="15" y="15" width="6" height="6" rx="1.5"></rect>
            </svg>
          </i>
          扫一扫登录
        </li>
        <li>
          <i className={styles.circle}>
            <svg viewBox="0 0 24 24">
              <path d="M13 2L4 14h7l-2 8 9-12h-7z"></path>
            </svg>
          </i>
          更快
        </li>
        <li className={styles.last}>
          <i className={styles.circle}>
            <svg viewBox="0 0 24 24">
              <path d="M12 5v14M5 12h14" stroke-width="2"></path>
            </svg>
          </i>
          更安全
        </li>
      </ul>
    </div>
  )
}
