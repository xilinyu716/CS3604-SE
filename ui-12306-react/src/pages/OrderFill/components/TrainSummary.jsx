import styles from './TrainSummary.module.css'
import { useLocation } from 'react-router-dom'

export default function TrainSummary() {
  const location = useLocation()
  const s = location.state || {}
  const t = s.train || {}
  const q = s.query || {}
  const code = t.code || 'G1'
  const from = t.from || '出发站'
  const to = t.to || '到达站'
  const depart = t.depart || '—'
  const arrive = t.arrive || '—'
  const date = q.date || '—'
  return (
    <div className={styles.box} aria-label="车次摘要">
      <ul className={styles.info}>
        <li>
          <span className={styles.label}>出发</span>
          <span className={styles.value}>{from}</span>
          <span className={styles.time}>{depart}</span>
        </li>
        <li className={styles.sep}><img src="/assets/point2.png" alt="to" /></li>
        <li>
          <span className={styles.label}>到达</span>
          <span className={styles.value}>{to}</span>
          <span className={styles.time}>{arrive}</span>
        </li>
        <li className={styles.more}>
          <span className={styles.train}>{code}</span>
          <span className={styles.date}>{date}</span>
        </li>
      </ul>
    </div>
  )
}
