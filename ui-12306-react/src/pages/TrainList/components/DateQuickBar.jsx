import { useMemo, useState } from 'react'
import styles from './DateQuickBar.module.css'

function rangeDates(start, count) {
  const [y, m, d] = start.split('-').map(Number)
  const base = new Date(y, m - 1, d)
  const list = []
  for (let i = 0; i < count; i++) {
    const t = new Date(base)
    t.setDate(base.getDate() + i)
    const mm = String(t.getMonth() + 1).padStart(2, '0')
    const dd = String(t.getDate()).padStart(2, '0')
    list.push(`${mm}-${dd}`)
  }
  return list
}

export default function DateQuickBar() {
  const [selected, setSelected] = useState('11-24')
  const dates = useMemo(() => rangeDates('2025-11-23', 15), [])
  return (
    <div className={styles.bar}>
      <ul className={styles.list}>
        {dates.map((d, idx) => (
          <li key={d} className={selected === d ? styles.itemActive : styles.item}>
            <button className={styles.itemBtn} onClick={() => setSelected(d)} aria-label={`选择 ${d}`}>{d}{idx === 0 ? ' 周日' : ''}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
