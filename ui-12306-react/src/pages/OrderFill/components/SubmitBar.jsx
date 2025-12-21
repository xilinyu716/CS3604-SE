import styles from './SubmitBar.module.css'

export default function SubmitBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.summary}>
        <span className={styles.priceLabel}>票价合计</span>
        <span className={styles.price}>¥ 0.00</span>
        <span className={styles.hint}>请核对以下信息后提交</span>
      </div>
      <button className={styles.submitBtn} aria-label="提交订单">提交订单</button>
    </div>
  )
}

