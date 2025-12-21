import styles from '../styles/CenterLayout.module.css'

export default function CenterLayout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
}

