import styles from './Breadcrumb.module.css'
import { Link } from 'react-router-dom'

export default function Breadcrumb() {
  return (
    <div className={`breadcrumb ${styles.breadcrumb}`}>当前位置：
      <Link to="/center">个人中心</Link>
      <span className="sep">&gt;</span>
      <a href="#">常用信息管理</a>
      <span className="sep">&gt;</span>
      <span className="active">乘车人</span>
    </div>
  )
}
