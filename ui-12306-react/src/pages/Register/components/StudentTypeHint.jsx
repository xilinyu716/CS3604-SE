import styles from './StudentTypeHint.module.css'

export default function StudentTypeHint({ show }) {
  if (!show) return null
  return (
    <div>
      <div className={styles.line}></div>
      <div className={styles.hint}>学生优惠资质提醒：填写学校、城市等信息以便校验。</div>
    </div>
  )
}
