import styles from './LoginHeader.module.css'
import { Link } from 'react-router-dom'

export default function LoginHeader() {
  return (
    <div className={styles.header} role="complementary" aria-label="头部">
      <div className={styles.wrapper}>
        <div className={styles.headerCon}>
          <h1 className={styles.logo} role="banner">
            <Link to="/" aria-label="中国铁路12306">中国铁路12306</Link>
          </h1>
          <div className={styles.welcome}>欢迎登录12306</div>
        </div>
      </div>
    </div>
  )
}
