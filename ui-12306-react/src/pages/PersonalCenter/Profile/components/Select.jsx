import { useState } from 'react'
import styles from '../styles/Select.module.css'

export default function Select({ options = [], value, onChange, placeholder }) {
  const [open, setOpen] = useState(false)
  const current = options.find(o => o.value === value)
  return (
    <div className={styles.sel} onBlur={() => setOpen(false)} tabIndex={0}>
      <div className={styles.selHd} onClick={() => setOpen(v => !v)}>
        <div className={styles.selInner}>{current ? current.label : placeholder}</div>
        <i className={styles.caret} />
      </div>
      {open && (
        <div className={styles.selBd}>
          <ul className={styles.selList}>
            {options.map(o => (
              <li
                key={o.value}
                className={o.value === value ? styles.active : undefined}
                onClick={() => {
                  onChange && onChange(o.value)
                  setOpen(false)
                }}
              >
                {o.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

