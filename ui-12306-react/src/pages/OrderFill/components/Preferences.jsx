import styles from './Preferences.module.css'

export default function Preferences() {
  return (
    <section className={styles.section} aria-label="席位偏好">
      <div className={styles.box}>
        <h3 className={styles.tit}>席位偏好</h3>
        <label className={styles.item}><input type="checkbox" /> 静音车厢</label>
        <label className={styles.item}><input type="checkbox" /> 残疾人专用席位</label>
        <p className={styles.note}>系统将随机为您申请席位，如暂不支持自选席位。</p>
      </div>
    </section>
  )
}

