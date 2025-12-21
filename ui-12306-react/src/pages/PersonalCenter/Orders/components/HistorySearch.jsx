import styles from './HistorySearch.module.css'
import { useState } from 'react'

export default function HistorySearch({ onSearch }) {
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [keyword, setKeyword] = useState('')
  return (
    <div className={`search-form-mini ${styles.form}`}>
      <div className="form-item">
        <div className="sel-inner">乘车日期</div>
      </div>
      <div className="form-item">
        <div className="input-box input-data w160">
          <input type="text" className="input" value={fromDate} onChange={e => setFromDate(e.target.value)} aria-label="请输入日期，例如2021杠01杠01" />
          <i className="icon icon-date"></i>
        </div>
        <span className="txt-lighter"> - </span>
        <div className="input-box input-data w160">
          <input type="text" className="input" value={toDate} onChange={e => setToDate(e.target.value)} aria-label="请输入日期，例如2021杠01杠01" />
          <i className="icon icon-date"></i>
        </div>
      </div>
      <div className="form-item">
        <div className="input-box input-data w160">
          <input type="text" className="input" value={keyword} placeholder="订单号/车次/姓名" onChange={e => setKeyword(e.target.value)} />
          <i className="icon icon-clear"></i>
        </div>
      </div>
      <div className="form-item">
        <a href="#" className="btn w100" onClick={() => onSearch({ fromDate, toDate, keyword })}>查询</a>
      </div>
    </div>
  )
}
