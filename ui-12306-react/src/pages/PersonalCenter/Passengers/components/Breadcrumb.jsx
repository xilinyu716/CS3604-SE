import styles from './Breadcrumb.module.css'

export default function Breadcrumb() {
  return (
    <div className={`breadcrumb ${styles.breadcrumb}`}>当前位置：
      <a href="#">个人中心</a>
      <span className="sep">&gt;</span>
      <a href="#">常用信息管理</a>
      <span className="sep">&gt;</span>
      <span className="active">乘车人</span>
    </div>
  )
}

