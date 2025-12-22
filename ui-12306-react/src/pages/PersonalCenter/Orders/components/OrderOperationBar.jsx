import styles from './OrderOperationBar.module.css'

export default function OrderOperationBar({ showChildren = true, showCatering = true, onCancel }) {
  return (
    <div className={styles.btnRight}>
      <a href="#" className="btn" style={{ backgroundColor: '#ff8201', color: '#fff' }}>订单详情</a>
      {onCancel && (
        <button className="btn" onClick={onCancel} style={{ cursor: 'pointer' }}>退票</button>
      )}
      {showChildren && <a href="#" className="btn">添加免费乘车儿童</a>}
      <a href="#" className="btn">购/赠/退保险</a>
      <a href="#" className="btn">改签</a>
      <a href="#" className="btn">灵活行</a>
      <a href="#" className="btn">变更到站</a>
      {showCatering && <a href="#" className="btn">餐饮•特产</a>}
    </div>
  )
}
