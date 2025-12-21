import styles from './TrainTable.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import * as auth from '../../../utils/auth'

const sampleRows = [
  {
    code: 'G1234',
    from: '北京南',
    to: '上海虹桥',
    depart: '08:00',
    arrive: '12:28',
    duration: '04:28',
    seats: {
      business: '有',
      prefer: '有',
      first: '候补',
      second: '有',
      softSleeper: '无',
      dynSleeper: '无',
      hardSleeper: '无',
      softSeat: '—',
      hardSeat: '—',
      noSeat: '—',
      other: '—'
    },
    remark: ''
  },
  {
    code: 'D223',
    from: '北京',
    to: '哈尔滨',
    depart: '09:12',
    arrive: '16:10',
    duration: '06:58',
    seats: {
      business: '—',
      prefer: '有',
      first: '有',
      second: '候补',
      softSleeper: '—',
      dynSleeper: '—',
      hardSleeper: '—',
      softSeat: '—',
      hardSeat: '—',
      noSeat: '—',
      other: '—'
    },
    remark: ''
  }
]

export default function TrainTable() {
  const navigate = useNavigate()
  const location = useLocation()
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
              <th className={styles.th} style={{ width: 82 }}>
                <span className={styles.sortable}>出发时间</span><br /><span className={styles.sortable}>到达时间</span>
              </th>
              <th className={styles.th} style={{ width: 82 }}><span className={styles.sortable}>历时</span></th>
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
            {sampleRows.map(r => (
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
