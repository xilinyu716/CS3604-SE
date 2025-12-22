import styles from './TrainTable.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useMemo } from 'react'
import * as auth from '../../../utils/auth'

export default function TrainTable({ data = [], loading, error }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [sortField, setSortField] = useState('depart')
  const [sortOrder, setSortOrder] = useState('asc')

  const sortedData = useMemo(() => {
    if (!data) return []
    const list = [...data]
    list.sort((a, b) => {
      let valA = a[sortField]
      let valB = b[sortField]
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1
      return 0
    })
    return list
  }, [data, sortField, sortOrder])

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const SortIcon = ({ field }) => {
    if (sortField !== field) return <i className={styles.iconSort} />
    return sortOrder === 'asc' ? <i className={styles.iconSortAsc} /> : <i className={styles.iconSortDesc} />
  }

  if (loading) return <div className={styles.loading}>加载中...</div>
  if (error) return <div className={styles.error}>{error}</div>
  if (!data || data.length === 0) return <div className={styles.empty}>没有符合条件的车次</div>

  return (
    <div className={styles.wrap}>
      <div className={styles.showOpts}>
        <label className={styles.checkLabel}><input type="checkbox" className={styles.checkbox} />显示折扣车次</label>
        <label className={styles.checkLabel}><input type="checkbox" className={styles.checkbox} />显示积分兑换车次</label>
        <label className={styles.checkLabel}><input type="checkbox" className={styles.checkbox} />显示全部可预订车次</label>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headRow}>
              <th className={styles.th} style={{ width: 90 }}>车次</th>
              <th className={styles.th} style={{ width: 100 }}>出发站<br />到达站</th>
              <th className={styles.th} style={{ width: 82 }} onClick={() => handleSort('depart')}>
                <span className={styles.sortable}>出发时间 <SortIcon field="depart" /></span><br />
                <span className={styles.sortable} onClick={(e) => { e.stopPropagation(); handleSort('arrive') }}>到达时间 <SortIcon field="arrive" /></span>
              </th>
              <th className={styles.th} style={{ width: 82 }} onClick={() => handleSort('duration')}>
                <span className={styles.sortable}>历时 <SortIcon field="duration" /></span>
              </th>
              <th className={styles.th} style={{ width: 66 }}>商务座<br />特等座</th>
              <th className={styles.th} style={{ width: 66 }}>优选<br />一等座</th>
              <th className={styles.th} style={{ width: 66 }}>一等座</th>
              <th className={styles.th} style={{ width: 66 }}>二等座<br />二等包座</th>
              <th className={styles.th} style={{ width: 66 }}>高级<br />软卧</th>
              <th className={styles.th} style={{ width: 66 }}>软卧/动卧<br />一等卧</th>
              <th className={styles.th} style={{ width: 66 }}>硬卧<br />二等卧</th>
              <th className={styles.th} style={{ width: 66 }}>软座</th>
              <th className={styles.th} style={{ width: 66 }}>硬座</th>
              <th className={styles.th} style={{ width: 66 }}>无座</th>
              <th className={styles.th} style={{ width: 66 }}>其他</th>
              <th className={styles.th}>备注</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map(r => (
              <tr key={r.code} className={styles.row}>
                <td className={styles.cellCode}><div className={styles.trainCode}>{r.code}</div><button className={styles.btnBook} onClick={() => {
                  const query = location.state || {}
                  if (!auth.isLoggedIn()) {
                    navigate('/login', { state: { redirect: '/trains', query, pick: { trainCode: r.code, seat: 'second' } } })
                  } else {
                    navigate('/order', { state: { train: { code: r.code, from: r.from, to: r.to, depart: r.depart, arrive: r.arrive }, query } })
                  }
                }}>预订</button></td>
                <td className={styles.cellStations}><div>{r.from}</div><div>{r.to}</div></td>
                <td className={styles.cellTimes}><div className={styles.depart}>{r.depart}</div><div className={styles.arrive}>{r.arrive}</div></td>
                <td className={styles.cellDuration}><div>{r.duration}</div></td>
                <td className={styles.cellSeat}>{r.seats.business}</td>
                <td className={styles.cellSeat}>{r.seats.prefer}</td>
                <td className={styles.cellSeat}>{r.seats.first}</td>
                <td className={styles.cellSeat}>{r.seats.second}</td>
                <td className={styles.cellSeat}>{r.seats.softSleeper}</td>
                <td className={styles.cellSeat}>{r.seats.dynSleeper}</td>
                <td className={styles.cellSeat}>{r.seats.hardSleeper}</td>
                <td className={styles.cellSeat}>{r.seats.softSeat}</td>
                <td className={styles.cellSeat}>{r.seats.hardSeat}</td>
                <td className={styles.cellSeat}>{r.seats.noSeat}</td>
                <td className={styles.cellSeat}>{r.seats.other}</td>
                <td className={styles.cellRemark}>{r.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
