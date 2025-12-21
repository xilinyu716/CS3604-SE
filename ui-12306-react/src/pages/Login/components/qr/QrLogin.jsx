import styles from './QrLogin.module.css'
import { Link } from 'react-router-dom'

export default function QrLogin() {
  return (
    <div>
      <div className={styles.con}>
        <div className={styles.main}>
          <div className={styles.pic}>
            <img src="/assets/empty.png" alt="二维码" />
            <div className={styles.tips}><img src="/assets/code-tips.png" alt="扫码提示" /></div>
          </div>
        </div>
        <div className={styles.txt}>打开<span className={styles.primary}>12306手机APP</span> 扫描二维码</div>
        <div className={styles.txt}><Link className={styles.primary} to="/register">注册12306账号</Link></div>
      </div>
      <ul className={styles.ft}>
        <li><i className={styles.circle}></i>扫一扫登录</li>
        <li><i className={styles.circle}></i>更快</li>
        <li className={styles.last}><i className={styles.circle}></i>更安全</li>
      </ul>
    </div>
  )
}
