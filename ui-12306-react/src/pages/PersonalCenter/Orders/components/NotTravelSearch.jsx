import styles from './NotTravelSearch.module.css'
import { useState } from 'react'

export default function NotTravelSearch({ onSearch }) {
  const [type, setType] = useState('order')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [keyword, setKeyword] = useState('')
  return (
    <div className={`search-form-mini ${styles.form}`}>
      <div className="form-item">
        <div className="sel w160">
          <div className="sel-hd">
            <div className="sel-inner">{type === 'order' ? '按订票日期查询' : '按乘车日期查询'}</div>
            <i className="icon icon-caret-down"></i>
          </div>
          <div className="sel-bd">
            <ul className="sel-list">
              <li className={type === 'order' ? 'selected' : ''} onClick={() => setType('order')}>按订票日期查询</li>
              <li className={type === 'ride' ? 'selected' : ''} onClick={() => setType('ride')}>按乘车日期查询</li>
            </ul>
          </div>
        </div>
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
        <a href="#" className="btn w100" onClick={() => onSearch({ type, fromDate, toDate, keyword })}>查询</a>
      </div>
    </div>
  )
}
