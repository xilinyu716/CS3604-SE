import { useMemo, useState, useEffect, useRef } from 'react'
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

  function DropdownInput({ type, value, onChange, placeholder, selected }) {
    const [open, setOpen] = useState(false)
    const wrapRef = useRef(null)
    const [panel, setPanel] = useState('cn')
    const [group, setGroup] = useState('热门')
    const isDate = type === 'date'
    const MONTH_CN = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    const WEEKS_CN = ['日','一','二','三','四','五','六']
    const parseDate = (str) => {
      if (!str) return null
      const m = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec(str)
      if (!m) return null
      const y = parseInt(m[1], 10), mm = parseInt(m[2], 10) - 1, d = parseInt(m[3], 10)
      return new Date(y, mm, d)
    }
    const fmtDate = (d) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
    const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth()+n, 1)
    const [monthBase, setMonthBase] = useState(() => parseDate(value) || new Date())
    const buildMonthCells = (d) => {
      const y = d.getFullYear(), m = d.getMonth()
      const first = new Date(y, m, 1)
      const start = first.getDay()
      const days = new Date(y, m+1, 0).getDate()
      const cells = []
      for (let i=0;i<start;i++) cells.push(null)
      for (let day=1; day<=days; day++) cells.push(new Date(y, m, day))
      while (cells.length % 7 !== 0) cells.push(null)
      return cells
    }
    const GROUPS = ['热门','ABCDE','FGHIJ','KLMNO','PQRST','UVWXYZ']
    const CN = {
      '热门': ['北京','上海','天津','重庆','广州','深圳','南京','武汉','西安','杭州','成都','长沙','郑州'],
      'ABCDE': ['北京','成都','长沙','大连','东莞','鄂尔多斯','恩施','鞍山','安庆','合肥','杭州','哈尔滨','福州','抚州','甘肃兰州'],
      'FGHIJ': ['福州','抚州','广元','广州','桂林','贵阳','海口','合肥','呼和浩特','济南','济宁','锦州'],
      'KLMNO': ['昆明','拉萨','兰州','柳州','洛阳','南昌','南京','南宁','南通','宁波','青岛'],
      'PQRST': ['平顶山','莆田','青岛','泉州','日照','三亚','汕头','汕尾','上海','深圳','沈阳','石家庄'],
      'UVWXYZ': ['乌鲁木齐','无锡','芜湖','厦门','西宁','西安','银川','扬州','宜昌','义乌','张家口','郑州']
    }
    const INTL = {
      '热门': ['香港','澳门','台北','东京','大阪','名古屋','首尔','釜山','新加坡','曼谷','吉隆坡','雅加达'],
      'ABCDE': ['阿姆斯特丹','柏林','巴黎','多伦多','爱丁堡','大阪'],
      'FGHIJ': ['法兰克福','福冈','胡志明','吉隆坡','加德满都','旧金山'],
      'KLMNO': ['开罗','罗马','马德里','曼谷','名古屋','纽约','内罗毕'],
      'PQRST': ['釜山','普吉','清迈','庆州','泉州','青岛','首尔','悉尼','新加坡'],
      'UVWXYZ': ['维也纳','温哥华','香港','新德里','雅加达','伊斯坦布尔','扎幌']
    }
    const stations = (panel === 'cn' ? CN : INTL)[group] || []
    const handleSelect = (name) => { onChange && onChange(name); setOpen(false) }
    useEffect(() => {
      if (!open) return
      const handleDocMouseDown = (e) => {
        if (wrapRef.current && !wrapRef.current.contains(e.target)) {
          setOpen(false)
        }
      }
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setOpen(false)
      }
      document.addEventListener('mousedown', handleDocMouseDown)
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('mousedown', handleDocMouseDown)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [open])
    return (
      <div ref={wrapRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
        <input
          className={selected ? styles.inpSelected : styles.inpTxt}
          value={value}
          placeholder={placeholder || ''}
          onFocus={() => { setOpen(true); if (isDate) setMonthBase(parseDate(value) || new Date()) }}
          onClick={() => { setOpen(true); if (isDate) setMonthBase(parseDate(value) || new Date()) }}
          onBlur={() => setOpen(false)}
          onChange={e => onChange && onChange(e.target.value)}
          aria-label={placeholder || '输入'}
        />
        {type !== 'date' && open && (
          <div
            style={{ position: 'absolute', top: 26, left: 0, width: 560, background: '#fff', border: '1px solid #dbeaf8', boxShadow: '0 6px 18px rgba(0,0,0,0.08)', zIndex: 100 }}
            onMouseDown={(e)=>e.preventDefault()}
          >
            <div style={{ display: 'flex' }}>
              <div style={{ width: 120, background: '#f5f7fa', padding: 12 }}>
                <div
                  style={{ display: 'block', padding: '8px 10px', borderRadius: 4, background: panel==='cn'?'#3b99fc':'transparent', color: panel==='cn'?'#fff':'#333', cursor: 'pointer', marginBottom: 8 }}
                  onClick={()=>setPanel('cn')}
                >国内站点</div>
                <div
                  style={{ display: 'block', padding: '8px 10px', borderRadius: 4, background: panel==='intl'?'#3b99fc':'transparent', color: panel==='intl'?'#fff':'#333', cursor: 'pointer' }}
                  onClick={()=>setPanel('intl')}
                >国际站点</div>
              </div>
              <div style={{ flex: 1, padding: 12 }}>
                <div style={{ color: '#888', paddingBottom: 8 }}>拼音支持首字母输入</div>
                <div style={{ display: 'flex', gap: 14, borderBottom: '2px solid #eaeaea', paddingBottom: 8 }}>
                  {GROUPS.map(g => (
                    <a key={g} style={{ color: g===group?'#3b99fc':'#333', fontWeight: g===group?600:400, cursor: 'pointer' }} onClick={()=>setGroup(g)}>{g}</a>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, paddingTop: 10 }}>
                  {stations.map(s => (
                    <a key={s} style={{ display: 'block', lineHeight: '28px', color: '#333', cursor: 'pointer' }} onClick={()=>handleSelect(s)}>{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {isDate && open && (
          <div
            style={{ position: 'absolute', top: 26, left: 0, width: 600, background: '#fff', border: '1px solid #dbeaf8', boxShadow: '0 6px 18px rgba(0,0,0,0.08)', zIndex: 100 }}
            onMouseDown={(e)=>e.preventDefault()}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ padding: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
                  <a style={{ color: '#3b99fc', cursor: 'pointer', padding: '0 6px' }} onClick={()=>setMonthBase(addMonths(monthBase, -1))}>{'\u00AB'}</a>
                  <div style={{ flex: 1, textAlign: 'center', fontWeight: 600 }}>
                    {MONTH_CN[monthBase.getMonth()]} {monthBase.getFullYear()}
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', color: '#7aaefb', borderBottom: '1px solid #eaeaea', paddingBottom: 4 }}>
                  {WEEKS_CN.map(w => <div key={w} style={{ textAlign: 'center' }}>{w}</div>)}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, paddingTop: 6 }}>
                  {buildMonthCells(monthBase).map((d,i)=> d ? (
                    <a key={i} style={{ display:'block', textAlign:'center', lineHeight:'30px', borderRadius: 3, cursor: 'pointer', color: d.getDay()===0?'#d9534f': d.getDay()===6?'#3b99fc':'#333', background: fmtDate(d)===value?'#eaf3ff':'transparent' }} onClick={()=>{ onChange && onChange(fmtDate(d)); setOpen(false) }}>
                      {d.getDate() === new Date().getDate() && d.getMonth() === new Date().getMonth() && d.getFullYear() === new Date().getFullYear() ? '今天' : d.getDate()}
                    </a>
                  ) : <span key={i}></span>)}
                </div>
              </div>
              <div style={{ padding: 10 }}>
                {(() => { const next = addMonths(monthBase, 1); return (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
                      <div style={{ flex: 1, textAlign: 'center', fontWeight: 600 }}>
                        {MONTH_CN[next.getMonth()]} {next.getFullYear()}
                      </div>
                      <a style={{ color: '#3b99fc', cursor: 'pointer', padding: '0 6px' }} onClick={()=>setMonthBase(addMonths(monthBase, 1))}>{'\u00BB'}</a>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', color: '#7aaefb', borderBottom: '1px solid #eaeaea', paddingBottom: 4 }}>
                      {WEEKS_CN.map(w => <div key={w} style={{ textAlign: 'center' }}>{w}</div>)}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, paddingTop: 6 }}>
                      {buildMonthCells(next).map((d,i)=> d ? (
                        <a key={i} style={{ display:'block', textAlign:'center', lineHeight:'30px', borderRadius: 3, cursor: 'pointer', color: d.getDay()===0?'#d9534f': d.getDay()===6?'#3b99fc':'#333', background: fmtDate(d)===value?'#eaf3ff':'transparent' }} onClick={()=>{ onChange && onChange(fmtDate(d)); setOpen(false) }}>
                          {d.getDate() === new Date().getDate() && d.getMonth() === new Date().getMonth() && d.getFullYear() === new Date().getFullYear() ? '今天' : d.getDate()}
                        </a>
                      ) : <span key={i}></span>)}
                    </div>
                  </>
                ) })()}
              </div>
            </div>
            <div style={{ textAlign: 'right', padding: '6px 10px', color: '#3b99fc', cursor: 'pointer' }} onClick={()=>{ const t=new Date(); onChange && onChange(fmtDate(t)); setMonthBase(t); setOpen(false) }}>今天</div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`${styles.box} ${styles.boxLg}`}>
      <div className={styles.tripType}>
        <label className={styles.radioLabel}><input type="radio" className={styles.radio} checked={tripType === 'dc'} onChange={() => setTripType('dc')} aria-label="单程" />单程</label>
        <label className={styles.radioLabel}><input type="radio" className={styles.radio} checked={tripType === 'wf'} onChange={() => setTripType('wf')} aria-label="往返" />往返</label>
      </div>
      <div className={styles.sInfo}>
        <div className={styles.field}>
          <span className={styles.label}><label>出发地</label></span>
          <div className={styles.inpW}><DropdownInput type="city" value={fromStation} onChange={setFromStation} placeholder="请输入或选择出发站" /></div>
        </div>
        <div className={styles.switch} aria-hidden="true"></div>
        <div className={styles.field}>
          <span className={styles.label}><label>目的地</label></span>
          <div className={styles.inpW}><DropdownInput type="city" value={toStation} onChange={setToStation} placeholder="请输入或选择目的地站" /></div>
        </div>
        <div className={styles.field}>
          <span className={styles.label}><label>出发日</label></span>
          <div className={styles.inpW}><DropdownInput type="date" value={trainDate} onChange={setTrainDate} selected /></div>
        </div>
        <div className={`${styles.field} ${styles.noChange}`}>
          <span className={styles.label}><label>返程日</label></span>
          <div className={styles.inpW}>{isRound ? <DropdownInput type="date" value={backDate} onChange={setBackDate} /> : <input className={styles.inpTxt} value={backDate} onChange={e => setBackDate(e.target.value)} disabled aria-label="请输入日期" />}</div>
        </div>
      </div>
      <div className={styles.quickS}>
        <div className={styles.identityCol}>
          <label className={styles.radioLabel}><input type="radio" className={styles.radio} checked={identity === 'normal'} onChange={() => setIdentity('normal')} aria-label="普通" />普通</label>
          <label className={styles.radioLabel}><input type="radio" className={styles.radio} checked={identity === 'student'} onChange={() => setIdentity('student')} aria-label="学生" />学生</label>
        </div>
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
