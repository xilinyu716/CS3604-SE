import styles from './NotTravelList.module.css'
import OrderItem from './OrderItem'
import OrderOperationBar from './OrderOperationBar'

export default function NotTravelList({ orders = [], onRefresh }) {
  
  const handleCancel = async (sequence_no) => {
    if (!window.confirm('确定要退票吗？')) return
    
    try {
      const res = await fetch('/api/order/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sequence_no })
      })
      const data = await res.json()
      if (data.code === 0) {
        alert('退票成功')
        if (onRefresh) onRefresh()
      } else {
        alert(data.msg || '退票失败')
      }
    } catch (err) {
      console.error(err)
      alert('网络请求失败')
    }
  }

  return (
    <div className={`order-panel order-panel-history ${styles.panel}`}>
      <table className={`order-panel-head title-text ${styles.head}`}>
        <colgroup>
          <col className="col-train" />
          <col className="col-passenger" />
          <col className="col-seat" />
          <col className="col-price" />
          <col className="col-state" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>车次信息</th>
            <th style={{ width: 200 }}>旅客信息</th>
            <th>席位信息</th>
            <th>票价</th>
            <th>车票状态</th>
          </tr>
        </tbody>
      </table>
      <div>
        {orders.length === 0 ? (
          <div className={styles.noData}>
            <div className={styles.emptyPic}><img src="/assets/empty.png" alt="" /></div>
            <div className={styles.emptyTxt}>
              <p>您没有对应的订单内容哦～</p>
              <p>您可以通过<a href="#" className="txt-primary underline">车票预订</a>功能，来制定出行计划。</p>
            </div>
          </div>
        ) : (
          orders.map((o, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.hd}>
                <i className="icon icon-fold"></i>
                <div className={styles.hdInfo}><span className="txt-light">订票日期：</span><span>{o.order_date}</span></div>
                <div className={styles.hdInfo}><span className="txt-light">订单号：</span>{o.sequence_no}</div>
              </div>
              <div className={styles.bd}>
                <table className={styles.table}>
                  <colgroup>
                    <col className="col-train" />
                    <col className="col-passenger" />
                    <col className="col-seat" />
                    <col className="col-price" />
                    <col className="col-state" />
                    <col />
                  </colgroup>
                  <tbody>
                    {o.tickets.map((t, i) => (
                      <OrderItem key={i} ticket={t} isFirst={i === 0} rowSpan={o.tickets.length} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.ft}>
                <table className={styles.table}>
                  <tbody>
                    <tr>
                      <td className={`${styles.tdLeft} ${styles.brNone}`} colSpan={2}>
                        <label className={styles.checkInline}>
                          <input type="checkbox" />全选
                        </label>
                      </td>
                      <td className={styles.operation} colSpan={6}>
                        <OrderOperationBar onCancel={() => handleCancel(o.sequence_no)} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={`pagination ${styles.pagination}`}></div>
    </div>
  )
}
