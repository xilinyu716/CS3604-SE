import styles from '../styles/FormItem.module.css'

export default function FormItem({ label, required, tips, children }) {
  return (
    <div className={styles.item}>
      <div className={styles.label}>
        {required && <span className={styles.required}>*</span>}
        {label}
      </div>
      <div className={styles.bd}>
        <div className={styles.content}>{children}</div>
        {tips && <div className={styles.tips}>{tips}</div>}
      </div>
    </div>
  )
}

