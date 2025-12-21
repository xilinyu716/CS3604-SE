import styles from './StatusIcon.module.css'

export default function StatusIcon({ type }) {
  const cls = type === 'user-ok' ? `${styles.common} ${styles.userOk}`
    : type === 'user-error' ? `${styles.common} ${styles.userError}`
    : type === 'mobile-ok' ? `${styles.common} ${styles.mobileOk}`
    : `${styles.common} ${styles.mobileError}`
  const title = type.includes('user') ? (type.endsWith('ok') ? '已通过' : '未通过') : (type.endsWith('ok') ? '手机核验通过' : '手机核验未通过')
  return <span className={cls} title={title}></span>
}

