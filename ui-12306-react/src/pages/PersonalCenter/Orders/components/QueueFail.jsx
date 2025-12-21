import styles from './QueueFail.module.css'

export default function QueueFail({ onRetry, onReport }) {
  return (
    <div className={`order-queue ${styles.queue}`}>
      <div className={styles.state}>
        <i className={`icon icon-plaint ${styles.queueIco}`}></i>
        <div className={styles.info}>
          <h2>排队失败</h2>
        </div>
      </div>
      <div className={styles.right}>
        <a href="#" className={`btn btn-primary ${styles.btn}`} onClick={onRetry}>重新购票</a>
        <a href="#" className={`btn ${styles.btn}`} onClick={onReport}>举报</a>
      </div>
    </div>
  )
}
