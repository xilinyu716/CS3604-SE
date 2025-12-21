import styles from './UnfinishedEmpty.module.css'
import { Link } from 'react-router-dom'

export default function UnfinishedEmpty() {
  return (
    <div className={`order-empty ${styles.empty}`}>
      <div className={styles.pic}>
        <img src="/assets/empty.png" alt="" />
      </div>
      <div className={styles.txt}>
        <p>您没有未完成的订单哦～</p>
        <p>您可以通过<Link to="/trains" className="txt-primary underline">车票预订</Link>功能，来制定出行计划。</p>
      </div>
    </div>
  )
}
