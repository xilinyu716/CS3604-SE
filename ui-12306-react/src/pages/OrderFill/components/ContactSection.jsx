import styles from './ContactSection.module.css'

export default function ContactSection() {
  return (
    <section className={styles.section} aria-label="联系人与证件信息">
      <div className={styles.block}>
        <h3 className={styles.tit}>联系人信息</h3>
        <div className={styles.row}><span className={styles.label}>联系电话</span><span>138****8888</span></div>
        <div className={styles.row}><span className={styles.label}>联系邮箱</span><span>user@example.com</span></div>
      </div>
      <div className={styles.block}>
        <h3 className={styles.tit}>证件信息</h3>
        <div className={styles.row}><span className={styles.label}>证件类型</span><span>中国居民身份证</span></div>
        <div className={styles.row}><span className={styles.label}>证件号码</span><span>1101**********1234</span></div>
      </div>
    </section>
  )
}

