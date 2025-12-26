import styles from './OrdersBreadcrumb.module.css'
import { Link } from 'react-router-dom'

export default function OrdersBreadcrumb() {
  return (
    <div className={`breadcrumb ${styles.breadcrumb}`}>
      当前位置：
      <Link to="/center/orders">个人中心</Link>
      <span className="sep"></span>
      <span className="active">火车票订单</span>
    </div>
  )
}
