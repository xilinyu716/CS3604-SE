import styles from '../styles/MaskLoading.module.css'

export default function MaskLoading({ visible }) {
  if (!visible) return null
  return (
    <div className={styles.mask}>
      <img src="/assets/personal/profile/loading.gif" alt="loading" />
    </div>
  )
}

