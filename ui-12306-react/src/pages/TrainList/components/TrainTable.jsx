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

  const seatClass = (val) => {
    if (val === undefined || val === null) return 'seatNone'
    if (typeof val === 'number') return val > 0 ? 'seatOk' : 'seatNone'
    const s = String(val).trim()
    if (s === '' || s === '-' || s === '—') return 'seatDash'
    if (/候补/.test(s)) return 'seatWait'
    if (/无/.test(s)) return 'seatNone'
    const n = parseInt(s, 10)
    if (!isNaN(n)) return n > 0 ? 'seatOk' : 'seatNone'
    if (/有|余|可|充足/.test(s)) return 'seatOk'
    return 'seatNone'
  }

  const renderSeat = (val) => <span className={styles[seatClass(val)]}>{val}</span>

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
                <td className={styles.cellCode}>
                  <div className={styles.typeTags}>
                    <span className={styles.typeTag}>{r.code?.[0]}</span>
                  </div>
                  <div className={styles.trainCode}>{r.code}</div>
                </td>
                <td className={styles.cellStations}><div>{r.from}</div><div>{r.to}</div></td>
                <td className={styles.cellTimes}>
                  <div className={styles.depart}>{r.depart}</div>
                  <div className={styles.arrive}>{r.arrive}</div>
                  <div className={styles.arriveDay}>{/次日到达/.test(r.remark || '') ? '次日到达' : '当日到达'}</div>
                </td>
                <td className={styles.cellDuration}><div>{r.duration}</div></td>
                <td className={styles.cellSeat}>{renderSeat(r.seats.business)}</td>
                <td className={styles.cellSeat}>{renderSeat(r.seats.prefer)}</td>
                <td className={styles.cellSeat}>{renderSeat(r.seats.first)}</td>
                <td className={styles.cellSeat}>{renderSeat(r.seats.second)}</td>
                <td className={styles.cellSeat}>{renderSeat(r.seats.softSleeper)}</td>
                <td className={styles.cellSeat}>{renderSeat(r.seats.dynSleeper)}</td>
                <td className={styles.cellSeat}>{renderSeat(r.seats.hardSleeper)}</td>
                <td className={styles.cellSeat}>{renderSeat(r.seats.softSeat)}</td>
                <td className={styles.cellSeat}>{renderSeat(r.seats.hardSeat)}</td>
                <td className={styles.cellSeat}>{renderSeat(r.seats.noSeat)}</td>
                <td className={styles.cellSeat}>{renderSeat(r.seats.other)}</td>
                <td className={styles.cellRemark}>
                  <div>{r.remark}</div>
                  <button className={styles.btnBook} onClick={() => {
                    const query = location.state || {}
                    if (!auth.isLoggedIn()) {
                      navigate('/login', { state: { redirect: '/trains', query, pick: { trainCode: r.code, seat: 'second' } } })
                    } else {
                      navigate('/order', { state: { train: { code: r.code, from: r.from, to: r.to, depart: r.depart, arrive: r.arrive, seats: r.seats }, query } })
                    }
                  }}>预订</button>
                </td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
