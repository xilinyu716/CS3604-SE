import { useMemo, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './TrainSearchForm.module.css'

export default function TrainSearchForm({ onSearch }) {
  const location = useLocation()
  const navigate = useNavigate()
  const init = (location.state || {})
  const [tripType, setTripType] = useState(init.tripType || 'dc')
  const [fromStation, setFromStation] = useState(init.from || '')
  const [toStation, setToStation] = useState(init.to || '')
  const [trainDate, setTrainDate] = useState(init.date || '2025-11-24 周一')
  const [backDate, setBackDate] = useState(init.backDate || '')
  const [identity, setIdentity] = useState(init.isStudent ? 'student' : 'normal')

  useEffect(() => {
    if (location.state) {
      const s = location.state
      if (s.tripType) setTripType(s.tripType)
      if (s.from) setFromStation(s.from)
      if (s.to) setToStation(s.to)
      if (s.date) setTrainDate(s.date)
      if (s.backDate) setBackDate(s.backDate)
      if (typeof s.isStudent === 'boolean') setIdentity(s.isStudent ? 'student' : 'normal')
    }
  }, [location.state])

  const isRound = tripType === 'wf'
  const queryDisabled = useMemo(() => !fromStation || !toStation || !trainDate, [fromStation, toStation, trainDate])

  return (
    <div className={`${styles.box} ${styles.boxLg}`}>
      <div className={styles.tripType}>
        <label className={styles.radioLabel}><input type="radio" className={styles.radio} checked={tripType === 'dc'} onChange={() => setTripType('dc')} aria-label="单程" />单程</label>
        <label className={styles.radioLabel}><input type="radio" className={styles.radio} checked={tripType === 'wf'} onChange={() => setTripType('wf')} aria-label="往返" />往返</label>
      </div>
      <div className={styles.sInfo}>
        <div className={styles.field}>
          <span className={styles.label}><label>出发地</label></span>
          <div className={styles.inpW}><input className={styles.inpTxt} value={fromStation} onChange={e => setFromStation(e.target.value)} placeholder="请输入或选择出发站" aria-label="请输入或选择出发站" /></div>
        </div>
        <div className={styles.switch} aria-hidden="true"></div>
        <div className={styles.field}>
          <span className={styles.label}><label>目的地</label></span>
          <div className={styles.inpW}><input className={styles.inpTxt} value={toStation} onChange={e => setToStation(e.target.value)} placeholder="请输入或选择目的地站" aria-label="请输入或选择目的地站" /></div>
        </div>
        <div className={styles.field}>
          <span className={styles.label}><label>出发日</label></span>
          <div className={styles.inpW}><input className={styles.inpSelected} value={trainDate} onChange={e => setTrainDate(e.target.value)} aria-label="请输入日期" /></div>
        </div>
        <div className={`${styles.field} ${styles.noChange}`}>
          <span className={styles.label}><label>返程日</label></span>
          <div className={styles.inpW}><input className={styles.inpTxt} value={backDate} onChange={e => setBackDate(e.target.value)} disabled={!isRound} aria-label="请输入日期" /></div>
        </div>
      </div>
      <div className={styles.quickS}>
        <label className={styles.radioLabel}><input type="radio" className={styles.radio} checked={identity === 'normal'} onChange={() => setIdentity('normal')} aria-label="普通" />普通</label>
        <label className={styles.radioLabel}><input type="radio" className={styles.radio} checked={identity === 'student'} onChange={() => setIdentity('student')} aria-label="学生" />学生</label>
        <div className={styles.btnArea}>
          <button
            className={styles.btnPrimary}
            disabled={queryDisabled}
            aria-label="查询"
            onClick={() => {
              const params = { tripType, from: fromStation, to: toStation, date: trainDate, backDate, isStudent: identity === 'student' }
              navigate('/trains', { state: params })
              // Also trigger onSearch directly if provided (optional, but good for immediate feedback)
              if (onSearch) onSearch(params)
            }}
          >查询</button>
        </div>
      </div>
    </div>
  )
}
