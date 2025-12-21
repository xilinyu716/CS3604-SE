import { useState } from 'react'
import styles from './HistoryList.module.css'
import OrderItem from './OrderItem'

function SerialNumber({ number }) {
  const [show, setShow] = useState(false)
  return (
    <div className={styles.serialWrap}>
      <a href="#" className={`serial-number ${styles.serial}`} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onFocus={() => setShow(true)} onBlur={() => setShow(false)} tabIndex={0}>业务流水号</a>
      {show && (
        <div className={`panel-tooltip bottom ${styles.tooltip}`}>
          <div className="tooltip-arw"></div>
          <div className={styles.tooltipTxt}>{number}</div>
        </div>
      )}
    </div>
  )
}

export default function HistoryList({ orders = [] }) {
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
                        <div className={styles.btnRight}>
                          <a href="#" className="btn" style={{ backgroundColor: '#ff8201', color: '#fff' }}>订单详情</a>
                          <a href="#" className="btn">购/赠/退保险</a>
                        </div>
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
