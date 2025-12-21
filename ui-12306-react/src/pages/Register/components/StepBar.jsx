import styles from './StepBar.module.css'

export default function StepBar({ current = 1 }) {
  return (
    <div className={styles.step}>
      <div className={`${styles.item} ${current === 1 ? styles.active : ''}`}>账户信息</div>
      <div className={`${styles.item} ${current === 2 ? styles.active : ''}`}>手机核验</div>
      <div className={`${styles.item} ${current === 3 ? styles.active : ''}`}>注册成功</div>
    </div>
  )
}
