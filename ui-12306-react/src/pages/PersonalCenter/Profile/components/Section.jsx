import styles from '../styles/Section.module.css'

export default function Section({ title, actions, children }) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.actions}>{actions}</div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

