import styles from './QueueStatus.module.css'

export default function QueueStatus({ onCancel }) {
  return (
    <div className={`order-queue ${styles.queue}`}>
      <div className={styles.state}>
        <img src="/assets/queue.gif" className={styles.queueIco} alt="" />
        <div className={styles.info}>
          <h2>车票购买排队中…</h2>
          <p>请稍等，正在为您占座</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.time}>
          预计时间：<span className="txt-num">30</span>分<span className="txt-num">00</span>秒
        </div>
        <a href="#" className={`btn ${styles.btn}`} onClick={onCancel}>取消排队</a>
      </div>
    </div>
  )
}
