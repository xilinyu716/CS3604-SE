import styles from './SearchForm.module.css'
import { useEffect, useRef, useState } from 'react'

export default function SearchForm({ onSearch, onClear }) {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  useEffect(()=>{ onSearch(value.trim()) }, [value, onSearch])

  return (
    <div className={`search-form-mini ${styles.search}`}> 
      <div className={`form-item`}>
        <div className={`input-box w160`}>
          <input ref={inputRef} type="text" className={`input`} value={value} placeholder="请输入乘客姓名" aria-label="查询条件请输入乘客姓名" onChange={(e)=>setValue(e.target.value)} onKeyDown={(e)=>{ if(e.key==='Enter'){ onSearch(value.trim()) } }} />
          <a href="#" onClick={(e)=>{ e.preventDefault(); setValue(''); onClear(); inputRef.current?.focus() }} aria-label="删除查询条件并重新查询">
            <span role="button" aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M9 9l6 6M15 9l-6 6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className={`form-item`}>
        <a href="#" className={`btn w100`} onClick={(e)=>{ e.preventDefault(); onSearch(value.trim()) }}>查询</a>
      </div>
    </div>
  )
}
