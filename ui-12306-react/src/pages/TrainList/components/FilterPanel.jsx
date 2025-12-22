import { useState } from 'react'
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

const SEATS = ['商务座', '特等座', '优选', '一等座', '二等座', '高级软卧', '软卧/动卧/一等卧', '硬卧/二等卧', '软座', '硬座', '无座', '其他']

export default function FilterPanel({ filters, onFilterChange }) {
  const [expanded, setExpanded] = useState(false)
  // Local state is not needed if we rely on props, but let's just use props directly.
  
  if (!filters) return null // Guard

  const handleTimeChange = (e) => {
    onFilterChange({ ...filters, startTime: e.target.value })
  }

  const handleTypeChange = (key) => {
    const newTypes = { ...filters.trainTypes, [key]: !filters.trainTypes[key] }
    onFilterChange({ ...filters, trainTypes: newTypes })
  }

  return (
    <div className={styles.panel}>
      <div className={styles.toggleWrap}><button className={styles.toggle} onClick={() => setExpanded(v => !v)} aria-label="筛选">筛选</button></div>
      <div className={styles.body} style={{ height: expanded ? 204 : 72 }}>
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
          <div className={styles.sectionBd}><span className={styles.btnAll}>全部</span><ul className={styles.checkList}></ul></div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHd}>到达车站：</div>
          <div className={styles.sectionBd}><span className={styles.btnAll}>全部</span><ul className={styles.checkList}></ul></div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHd}>车次席别：</div>
          <div className={styles.sectionBd}><span className={styles.btnAll}>全部</span><ul className={styles.checkList}>{SEATS.map(s => <li key={s} className={styles.checkItem}><label className={styles.checkLabel}><input type="checkbox" className={styles.checkbox} />{s}</label></li>)}</ul></div>
        </div>
      </div>
    </div>
  )
}
