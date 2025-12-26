import { useMemo, useState } from 'react'
import styles from './FilterPanel.module.css'

const TRAIN_TYPES = [
  { key: 'G', label: 'GC-高铁/城际' },
  { key: 'D', label: 'D-动车' },
  { key: 'Z', label: 'Z-直达' },
  { key: 'T', label: 'T-特快' },
  { key: 'K', label: 'K-快速' },
  { key: 'QT', label: '其他' },
  { key: '复', label: '复兴号' },
  { key: '智', label: '智能动车组' }
]

const SEAT_OPTIONS = [
  { key: 'business', label: '商务座' },
  { key: 'prefer', label: '优选一等座' },
  { key: 'first', label: '一等座' },
  { key: 'second', label: '二等座' },
  { key: 'dynSleeper', label: '一等卧' },
  { key: 'hardSleeper', label: '二等卧' },
  { key: 'softSleeper', label: '软卧' },
  { key: 'hardSleeperAlias', seatKey: 'hardSleeper', label: '硬卧' },
  { key: 'hardSeat', label: '硬座' },
  { key: 'noSeatAlias', seatKey: 'noSeat', label: '座席' }
]

export default function FilterPanel({ filters, onFilterChange, trains = [] }) {
  const [expanded, setExpanded] = useState(true)
  // Local state is not needed if we rely on props, but let's just use props directly.
  
  if (!filters) return null // Guard

  const handleTimeChange = (e) => {
    onFilterChange({ ...filters, startTime: e.target.value })
  }

  const handleTypeChange = (key) => {
    const newTypes = { ...filters.trainTypes, [key]: !filters.trainTypes[key] }
    onFilterChange({ ...filters, trainTypes: newTypes })
  }

  const fromList = useMemo(() => {
    const set = new Set()
    trains.forEach(t => set.add(t.from))
    return Array.from(set)
  }, [trains])

  const toList = useMemo(() => {
    const set = new Set()
    trains.forEach(t => set.add(t.to))
    return Array.from(set)
  }, [trains])

  const handleDepartChange = (name) => {
    const next = { ...filters.departStations, [name]: !filters.departStations[name] }
    onFilterChange({ ...filters, departStations: next })
  }

  const handleArriveChange = (name) => {
    const next = { ...filters.arriveStations, [name]: !filters.arriveStations[name] }
    onFilterChange({ ...filters, arriveStations: next })
  }

  const handleSeatChange = (key, seatKey) => {
    const dataKey = seatKey || key
    const next = { ...filters.seatTypes, [dataKey]: !filters.seatTypes[dataKey] }
    onFilterChange({ ...filters, seatTypes: next })
  }

  return (
    <div className={styles.panel}>
      <div className={styles.toggleWrap}><button className={styles.toggle} onClick={() => setExpanded(v => !v)} aria-label="筛选">筛选</button></div>
      <div className={styles.body} data-expanded={expanded}>
        <div className={styles.topRow}>
          <span className={styles.topLabel}>发车时间：</span>
          <select className={styles.select} value={filters.startTime} onChange={handleTimeChange} aria-label="请选择发车时间">
            <option value="00002400">00:00--24:00</option>
            <option value="00000600">00:00--06:00</option>
            <option value="06001200">06:00--12:00</option>
            <option value="12001800">12:00--18:00</option>
            <option value="18002400">18:00--24:00</option>
          </select>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHd}>车次类型：</div>
          <div className={styles.sectionBd}>
            <span className={styles.btnAll} onClick={() => onFilterChange({...filters, trainTypes: {}})} style={{cursor:'pointer'}}>全部</span>
            <ul className={styles.checkList}>
              {TRAIN_TYPES.map(t => (
                <li key={t.key} className={styles.checkItem}>
                  <label className={styles.checkLabel}>
                    <input 
                      type="checkbox" 
                      checked={!!filters.trainTypes[t.key]} 
                      onChange={() => handleTypeChange(t.key)} 
                      className={styles.checkbox} 
                      aria-label={t.label} 
                    />
                    {t.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHd}>出发车站：</div>
          <div className={styles.sectionBd}>
            <span className={styles.btnAll} onClick={() => onFilterChange({ ...filters, departStations: {} })} style={{cursor:'pointer'}}>全部</span>
            <ul className={styles.checkList}>
              {fromList.map(name => (
                <li key={name} className={styles.checkItem}>
                  <label className={styles.checkLabel}>
                    <input type="checkbox" className={styles.checkbox} checked={!!filters.departStations[name]} onChange={() => handleDepartChange(name)} aria-label={name} />
                    {name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHd}>到达车站：</div>
          <div className={styles.sectionBd}>
            <span className={styles.btnAll} onClick={() => onFilterChange({ ...filters, arriveStations: {} })} style={{cursor:'pointer'}}>全部</span>
            <ul className={styles.checkList}>
              {toList.map(name => (
                <li key={name} className={styles.checkItem}>
                  <label className={styles.checkLabel}>
                    <input type="checkbox" className={styles.checkbox} checked={!!filters.arriveStations[name]} onChange={() => handleArriveChange(name)} aria-label={name} />
                    {name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHd}>车次席别：</div>
          <div className={styles.sectionBd}>
            <span className={styles.btnAll} onClick={() => onFilterChange({ ...filters, seatTypes: {} })} style={{cursor:'pointer'}}>全部</span>
            <ul className={styles.checkList}>
              {SEAT_OPTIONS.map(opt => (
                <li key={opt.key} className={styles.checkItem}>
                  <label className={styles.checkLabel}>
                    <input type="checkbox" className={styles.checkbox} checked={!!filters.seatTypes[opt.seatKey || opt.key]} onChange={() => handleSeatChange(opt.key, opt.seatKey)} aria-label={opt.label} />
                    {opt.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
