import styles from '../styles/Breadcrumb.module.css'

export default function Breadcrumb({ items }) {
  return (
    <div className={styles.breadcrumb}>
      {items.map((t, idx) => (
        <span key={t} className={styles.item}>
          {t}
          {idx < items.length - 1 && <span className={styles.sep}> &gt; </span>}
        </span>
      ))}
    </div>
  )
}

