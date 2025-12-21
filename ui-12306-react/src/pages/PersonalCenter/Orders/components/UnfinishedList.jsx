import { useEffect, useMemo, useState } from 'react'
import styles from './UnfinishedList.module.css'

export default function UnfinishedList({ orders = [] }) {
  const [secondsLeft, setSecondsLeft] = useState(29 * 60 + 59)
  useEffect(() => {
    const t = setInterval(() => setSecondsLeft(s => Math.max(0, s - 1)), 1000)
    return () => clearInterval(t)
  }, [])
  const mmss = useMemo(() => {
    const m = Math.floor(secondsLeft / 60)
    const s = secondsLeft % 60
    const pad = n => n.toString().padStart(2, '0')
    return `${pad(m)}分${pad(s)}秒`
  }, [secondsLeft])
  return (
    <div className={`order-panel order-panel-unpaid ${styles.panel}`}>
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
          <div className={styles.emptyWrap}><div className={styles.tips}><h4 className={styles.tit}>温馨提示</h4><p>1.席位已锁定，请在指定时间内完成网上支付。</p><p>2.逾期未支付，系统将取消本次交易。</p><p>3.在完成支付或取消本订单之前，您将无法购买其他车票。</p><p>4.未尽事宜详见相关规定和车站公告。</p></div></div>
        ) : (
          orders.map((o, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.hd}>
                <i className="icon icon-fold"></i>
                <div className={styles.hdInfo}><span className="txt-light">订票日期：</span><span>{o.order_date}</span></div>
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
                      <tr key={i}>
                        {i === 0 && (
                          <td className={`${styles.tdLeft} ${styles.alignTop}`} rowSpan={o.tickets.length}>
                            <div className={styles.ticketInfo}>
                              <div className={styles.title}>{t.from} <i className="icon icon-to"></i> {t.to} {t.code}</div>
                              <div>{t.date} 开</div>
                            </div>
                          </td>
                        )}
                        <td style={{ width: 200 }}>
                          <div>{t.passenger}</div>
                          <div>{t.idType}</div>
                        </td>
                        <td>
                          <div>{t.seatType}</div>
                          <div>{t.coach}车{t.seat}</div>
                        </td>
                        <td>
                          <div>{t.ticketType}</div>
                          <div><span className="txt-price">{t.price}元</span></div>
                        </td>
                        <td>
                          <div className={styles.status}>{t.status}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.ft}>
                <table className={styles.table}>
                  <tbody>
                    <tr>
                      <td className={`${styles.tdLeft} ${styles.brNone}`} colSpan={1}>
                        <label className={styles.checkInline}>
                          <input type="checkbox" />全选
                        </label>
                      </td>
                      <td className={styles.operation} colSpan={8}>
                        <div className={styles.btnRight}>
                          <a href="#" className="btn">取消订单</a>
                          <a href="#" className="btn btn-primary">网上支付({mmss})</a>
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
    </div>
  )
}
