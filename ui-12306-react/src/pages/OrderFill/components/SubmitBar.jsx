import styles from './SubmitBar.module.css'

export default function SubmitBar({ price = 0, onSubmit, count = 0 }) {
  return (
    <div className={styles.bar}>
      <div className={styles.summary}>
        <span className={styles.priceLabel}>票价合计</span>
        <span className={styles.price}>¥ {price.toFixed(2)}</span>
        <span className={styles.hint}>请核对以下信息后提交（已选 {count} 人）</span>
      </div>
      <button className={styles.submitBtn} aria-label="提交订单" onClick={onSubmit}>提交订单</button>
    </div>
  )
}

