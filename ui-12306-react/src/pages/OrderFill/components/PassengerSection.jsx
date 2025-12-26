import styles from './PassengerSection.module.css'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function PassengerHeader() {
  return (
    <div className={styles.info}>
      <div className={styles.subHd}>
        <i className={styles.personIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>
        </i>
        <span>乘车人</span>
      </div>
    </div>
  )
}

function PassengerList({ passengers, selectedPassengers, onCheck }) {
  const isSelected = (p) => selectedPassengers.some(sp => sp.passenger_id_no === p.passenger_id_no)
  const labelText = (p) => {
    const type = p.passenger_type_name || ''
    const isStu = /学/.test(type)
    return isStu ? `${p.passenger_name}（学生）` : p.passenger_name
  }
  return (
    <div className={styles.listWrap} aria-label="乘车人选择">
      {passengers.length === 0 ? (
        <div className={styles.empty}>暂无常用联系人，请新增</div>
      ) : (
        <ul className={styles.list}>
          {passengers.map((p) => (
            <li key={p.passenger_id_no} className={styles.listItem}>
              <label className={styles.listLabel}>
                <input 
                  type="checkbox" 
                  checked={isSelected(p)} 
                  onChange={(e) => onCheck(p, e.target.checked)} 
                  aria-label={`选择乘客 ${p.passenger_name}`} 
                />
                <span className={styles.name}>{labelText(p)}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function SelectedTable({ rows = [], onUpdate, onCheck, prices }) {
  const firstDefined = (obj, keys) => {
    for (const k of keys) { if (obj && obj[k] !== undefined && obj[k] !== null) return obj[k] }
    return undefined
  }
  const priceFor = (seat) => {
    const keyMap = {
      '二等座': ['second','second_class','二等座'],
      '一等座': ['first','first_class','一等座'],
      '商务座': ['business','商务座','business_class'],
      '无座': ['noSeat','no_seat','无座','hardSeat']
    }
    const v = firstDefined(prices, keyMap[seat] || [])
    if (v === undefined || v === null || v === '') return '（—）'
    const n = Number(v)
    return isNaN(n) ? `（${String(v)}）` : `（¥${n.toFixed(1)}元）`
  }
  const maskId = (id) => {
    if (!id) return ''
    const s = String(id)
    if (s.length <= 8) return s
    return s.slice(0, 4) + '*'.repeat(Math.max(0, s.length - 7)) + s.slice(-3)
  }
  return (
    <div className={styles.selTableWrap} aria-label="已选乘车人信息">
      <table className={styles.selTable}>
        <thead>
          <tr>
            <th style={{ width: 60 }}>序号</th>
            <th style={{ width: 120 }}>票种</th>
            <th style={{ width: 180 }}>席别</th>
            <th style={{ width: 160 }}>姓名</th>
            <th style={{ width: 160 }}>证件类型</th>
            <th>证件号码</th>
            <th style={{ width: 50 }}></th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr><td colSpan={7} className={styles.emptyCell}>请选择乘车人</td></tr>
          ) : rows.map((p, idx) => (
            <tr key={p.passenger_id_no}>
              <td>{idx + 1}</td>
              <td>
                <select 
                  className={styles.select}
                  value={p.ticketType || (p.passenger_type_name || '成人')}
                  onChange={(e) => onUpdate && onUpdate(p.passenger_id_no, 'ticketType', e.target.value)}
                >
                  <option value="成人">成人票</option>
                  <option value="儿童">儿童票</option>
                  <option value="学生">学生票</option>
                </select>
              </td>
              <td>
                <select 
                  className={styles.select}
                  value={p.seatType || '二等座'}
                  onChange={(e) => onUpdate && onUpdate(p.passenger_id_no, 'seatType', e.target.value)}
                >
                  {['二等座','一等座','商务座','无座'].map((s) => (
                    <option key={s} value={s}>{s} {priceFor(s)}</option>
                  ))}
                </select>
              </td>
              <td><input type="text" className={styles.input} value={p.passenger_name || ''} readOnly /></td>
              <td>
                <select className={styles.select} value={p.passenger_id_type_name || '中国居民身份证'}>
                  <option>中国居民身份证</option>
                </select>
              </td>
              <td><input type="text" className={styles.input} value={maskId(p.passenger_id_no)} readOnly /></td>
              <td>
                <button className={styles.removeBtn} onClick={() => onCheck && onCheck(p, false)} aria-label="删除">×</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function PassengerSection({ passengers = [], selectedPassengers = [], onCheck, onUpdate }) {
  const location = useLocation()
  const s = location.state || {}
  const t = s.train || {}
  const q = s.query || {}
  const code = t.code || ''
  const from = t.from || ''
  const to = t.to || ''
  const dateRaw = q.date || ''
  const date = String(dateRaw).split(' ')[0]
  const [prices, setPrices] = useState({})

  useEffect(() => {
    const qs = new URLSearchParams({ code, from, to, date }).toString()
    const tryFetch = async (url) => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        if (data && (data.code === 0 || data.success === true)) {
          const d = data.data || data.result || {}
          setPrices(d)
          return true
        }
      } catch (e) {}
      return false
    }
    ;(async () => {
      if (!code || !from || !to || !date) { setPrices({}); return }
      if (await tryFetch(`/api/trains/prices?${qs}`)) return
      if (await tryFetch(`/api/train/price?${qs}`)) return
      if (await tryFetch(`/api/prices?${qs}`)) return
      setPrices({})
    })()
  }, [code, from, to, date])

  const handleRemove = (idNo) => {
    if (!onUpdate) return
    onUpdate(idNo, '__remove_confirm__', true)
  }

  return (
    <section className={styles.section}>
      <div className={styles.box} aria-label="乘客信息">
        <div className={styles.hd}>乘客信息（填写说明）</div>
        <PassengerHeader />
        <PassengerList 
          passengers={passengers} 
          selectedPassengers={selectedPassengers}
          onCheck={onCheck}
        />
        <SelectedTable rows={selectedPassengers} onUpdate={onUpdate} onCheck={onCheck} prices={prices} />
        <div style={{ marginTop: 10, border: '1px solid #dbeaf8', borderRadius: 3, overflow: 'hidden' }}>
          <img src="/assets/ins_ad7.png" alt="预约随心乘 出行更便捷" style={{ display: 'block', width: '100%', height: '90px', objectFit: 'cover' }} onError={(e)=>{e.currentTarget.src='/assets/abanner06.jpg'}} />
        </div>
      </div>
    </section>
  )
}
