import styles from './StepBar.module.css'

export default function StepBar() {
  return (
    <ul className={styles.step} aria-label="购票流程">
      <li className={styles.past}>1. 选择车次<span className={styles.arrow}></span></li>
      <li className={styles.current}>2. 填写订单<span className={styles.arrow}></span></li>
      <li>3. 在线支付</li>
    </ul>
  )
}

