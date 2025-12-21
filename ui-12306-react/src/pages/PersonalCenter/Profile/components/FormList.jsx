import styles from '../styles/FormList.module.css'

export default function FormList({ children, mode = 'view' }) {
  return (
    <div className={mode === 'view' ? styles.listView : styles.listEdit}>
      {children}
    </div>
  )
}

