import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// 使用原始页面类名

export default function SearchPanel() {
  const [sideTab, setSideTab] = useState(0)
  const [tab, setTab] = useState(0)
  const navigate = useNavigate()

  return (
    <div className="search-index">
      <ul className="search-side">
        {['车票', '常用查询', '订餐'].map((t, i) => (
          <li key={t} className={i === sideTab ? 'active' : ''} onClick={() => { setSideTab(i); setTab(0) }}>
            <a href="#"><i className={`icon ${i===0?'icon-huochepiao':i===1?'icon-cycx':'icon-dingcan'}`}></i>{t}</a>
          </li>
        ))}
      </ul>
      <div className="search-main">
        <div className="search-main-item" style={{ display: sideTab === 0 ? 'block' : 'none' }}>
          <div className="search-main-tab">
            <div className="search-tab-hd">
              <ul>
                {['单程', '往返', '中转换乘', '退改签'].map((t, i) => (
                  <li key={t} className={i === tab ? 'active' : ''} onClick={() => setTab(i)}>
                    <a href="#"><i className={`icon ${i===0?'icon-dancheng':i===1?'icon-wangfan':i===2?'icon-huancheng':'icon-chepiao'}`}></i>{t}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="search-tab-bd">
              {tab===0 && <TicketOne onQuery={(payload) => navigate('/trains', { state: payload })} />}
              {tab===1 && <TicketRound onQuery={(payload) => navigate('/trains', { state: payload })} />}
              {tab===2 && <TicketSerial onQuery={(payload) => navigate('/trains', { state: payload })} />}
              {tab===3 && <TicketRefundNew />}
            </div>
          </div>
        </div>
        <div className="search-main-item" style={{ display: sideTab === 1 ? 'block' : 'none' }}>
          <CommonQuery />
        </div>
        <div className="search-main-item" style={{ display: sideTab === 2 ? 'block' : 'none' }}>
          <Dinner />
        </div>
      </div>
    </div>
  )
}

function LabeledInput({ label, icon, placeholder, value, onChange }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const [panel, setPanel] = useState('cn')
  const [group, setGroup] = useState('热门')
  const isCity = icon !== 'icon-date'
  const isDate = icon === 'icon-date'
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
    <div ref={wrapRef} className="form-item" style={{ position: 'relative' }}>
      <label className="form-label">{label}</label>
      <div className="form-bd">
        <div className={`input-box ${icon==='icon-date'?'input-data':'input-city'}`}>
          <input
            type="text"
            className="input"
            placeholder={placeholder || ''}
            value={value}
            onFocus={() => { setOpen(true); if (isDate) setMonthBase(parseDate(value) || new Date()) }}
            onClick={() => { setOpen(true); if (isDate) setMonthBase(parseDate(value) || new Date()) }}
            onBlur={() => setOpen(false)}
            onChange={e => onChange && onChange(e.target.value)}
            aria-label={label}
          />
          {icon && <i className={`icon ${icon}`}></i>}
        </div>
        {isCity && open && (
          <div
            className="station-dropdown"
            style={{ position: 'absolute', top: 40, left: 0, width: 560, background: '#fff', border: '1px solid #dbeaf8', boxShadow: '0 6px 18px rgba(0,0,0,0.08)', zIndex: 100 }}
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
            className="calendar-dropdown"
            style={{ position: 'absolute', top: 40, left: 0, width: 600, background: '#fff', border: '1px solid #dbeaf8', boxShadow: '0 6px 18px rgba(0,0,0,0.08)', zIndex: 100 }}
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
    </div>
  )
}

function TicketOne({ onQuery }) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState(() => { const t=new Date(); return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}` })
  const [isStudent, setIsStudent] = useState(false)
  const [isHigh, setIsHigh] = useState(false)
  return (
    <div className="search-tab-item" style={{ display: 'block' }}>
      <div className="search-form">
        <div className="form-item-group">
          <LabeledInput label="出发地" icon="icon-place" placeholder="简拼/全拼/汉字" value={from} onChange={setFrom} />
          <LabeledInput label="到达地" icon="icon-place" placeholder="简拼/全拼/汉字" value={to} onChange={setTo} />
          <div className="city-change" title="切换" role="button" aria-label="切换出发地与到达地">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#ff8d2b" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm4.3 6.3 1.4 1.4-3.6 3.6-1.4-1.4 1.2-1.2H8V9h6.6l1.7-1.7zM7.7 15.7l-1.4-1.4 3.6-3.6 1.4 1.4-1.2 1.2H16v1.3H9.4L7.7 15.7z"/>
            </svg>
          </div>
        </div>
        <LabeledInput label="出发日期" icon="icon-date" value={date} onChange={setDate} />
        <div className={`form-item form-item-check`}>
          <div className="form-bd">
            <ul className={`check-list check-list-right`}>
              <li onClick={() => setIsStudent(v => !v)}>
                学生
                <input
                  type="checkbox"
                  checked={isStudent}
                  onChange={(e) => setIsStudent(e.target.checked)}
                  aria-label="学生勾选框"
                  style={{ marginLeft: 8 }}
                />
              </li>
              <li onClick={() => setIsHigh(v => !v)}>
                高铁/动车
                <input
                  type="checkbox"
                  checked={isHigh}
                  onChange={(e) => setIsHigh(e.target.checked)}
                  aria-label="高铁/动车勾选框"
                  style={{ marginLeft: 8 }}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={`form-item form-item-btn`}>
          <a className={`btn btn-primary form-block`} onClick={() => onQuery({ tripType: 'dc', from, to, date, isStudent, isHigh })}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a>
        </div>
      </div>
    </div>
  )
}

function TicketRound({ onQuery }) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [goDate, setGoDate] = useState(() => { const t=new Date(); return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}` })
  const [backDate, setBackDate] = useState(() => { const t=new Date(); return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}` })
  const [isStudent, setIsStudent] = useState(false)
  const [isHigh, setIsHigh] = useState(false)
  return (
    <div className="search-tab-item" style={{ display: 'block' }}>
      <div className="search-form">
        <div className="form-item-group">
          <LabeledInput label="出发地" icon="icon-place" placeholder="简拼/全拼/汉字" value={from} onChange={setFrom} />
          <LabeledInput label="到达地" icon="icon-place" placeholder="简拼/全拼/汉字" value={to} onChange={setTo} />
          <div className="city-change" title="切换" role="button" aria-label="切换出发地与到达地">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#ff8d2b" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm4.3 6.3 1.4 1.4-3.6 3.6-1.4-1.4 1.2-1.2H8V9h6.6l1.7-1.7zM7.7 15.7l-1.4-1.4 3.6-3.6 1.4 1.4-1.2 1.2H16v1.3H9.4L7.7 15.7z"/>
            </svg>
          </div>
        </div>
        <LabeledInput label="出发日期" icon="icon-date" value={goDate} onChange={setGoDate} />
        <LabeledInput label="返程日期" icon="icon-date" value={backDate} onChange={setBackDate} />
        <div className={`form-item form-item-check`}>
          <div className="form-bd">
            <ul className={`check-list check-list-right`}>
              <li onClick={() => setIsStudent(v => !v)}>
                学生
                <input
                  type="checkbox"
                  checked={isStudent}
                  onChange={(e) => setIsStudent(e.target.checked)}
                  aria-label="学生勾选框"
                  style={{ marginLeft: 8 }}
                />
              </li>
              <li onClick={() => setIsHigh(v => !v)}>
                高铁/动车
                <input
                  type="checkbox"
                  checked={isHigh}
                  onChange={(e) => setIsHigh(e.target.checked)}
                  aria-label="高铁/动车勾选框"
                  style={{ marginLeft: 8 }}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={`form-item form-item-btn`}><a className={`btn btn-primary form-block`} onClick={() => onQuery({ tripType: 'wf', from, to, goDate, backDate, isStudent, isHigh })}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
      </div>
    </div>
  )
}

function TicketSerial({ onQuery }) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState(() => { const t=new Date(); return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}` })
  const [isStudent, setIsStudent] = useState(false)
  return (
    <div className="search-tab-item" style={{ display: 'block' }}>
      <div className="search-form">
        <div className="form-item-group">
          <LabeledInput label="出发地" icon="icon-place" placeholder="简拼/全拼/汉字" value={from} onChange={setFrom} />
          <LabeledInput label="到达地" icon="icon-place" placeholder="简拼/全拼/汉字" value={to} onChange={setTo} />
          <div className="city-change" title="切换" role="button" aria-label="切换出发地与到达地">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#ff8d2b" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm4.3 6.3 1.4 1.4-3.6 3.6-1.4-1.4 1.2-1.2H8V9h6.6l1.7-1.7zM7.7 15.7l-1.4-1.4 3.6-3.6 1.4 1.4-1.2 1.2H16v1.3H9.4L7.7 15.7z"/>
            </svg>
          </div>
        </div>
        <LabeledInput label="乘车日期" icon="icon-date" value={date} onChange={setDate} />
        <div className={`form-item form-item-check`}>
          <div className="form-bd">
            <ul className={`check-list`}>
              <li onClick={() => setIsStudent(v => !v)}>
                学生
                <input
                  type="checkbox"
                  checked={isStudent}
                  onChange={(e) => setIsStudent(e.target.checked)}
                  aria-label="学生勾选框"
                  style={{ marginLeft: 8 }}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={`form-item form-item-btn`}>
          <a className={`btn btn-primary form-block`} onClick={() => onQuery({ tripType: 'hz', from, to, date, isStudent })}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a>
        </div>
      </div>
    </div>
  )
}

function TicketRefund() {
  return (
    <div className="search-tab-item" style={{ display: 'none' }}>
      <div className="search-form">
        <div className="form-item"><span className="form-label">查询类型</span><div className="form-bd"><ul className={`radio-list radio-list-ding`}><li className={`active`}><i></i>订票日期</li><li><i></i>乘车日期</li></ul></div></div>
        <div className="form-item"><label className="form-label">开始日期</label><div className="form-bd"><div className={`input-box input-data`}><input type="text" className="input" /><i className={`icon icon-date`}></i></div></div></div>
        <div className="form-item"><label className="form-label">结束日期</label><div className="form-bd"><div className={`input-box input-data`}><input type="text" className="input" /><i className={`icon icon-date`}></i></div></div></div>
        <div className="form-item"><label className="form-label">关键字</label><div className="form-bd"><div className={`input-box`}><input type="text" className={`input search-input`} placeholder="订单号/车次/乘客姓名" /></div></div></div>
        <div className={`form-item form-item-btn mt-mlg`}><a href="#" className={`btn btn-primary form-block`}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
      </div>
    </div>
  )
}

function TicketRefundNew() {
  const [type, setType] = useState('order')
  const [fromDate, setFromDate] = useState(() => { const t=new Date(); return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}` })
  const [toDate, setToDate] = useState(() => { const t=new Date(); return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}` })
  const [keyword, setKeyword] = useState('')
  return (
    <div className="search-tab-item" style={{ display: 'block' }}>
      <div className="search-form">
        <div className="form-item"><span className="form-label">查询类型</span><div className="form-bd"><ul className={`radio-list radio-list-ding`}><li className={type==='order'?`active`:''} onClick={() => setType('order')}><input type="checkbox" checked={type==='order'} onChange={()=>setType('order')} aria-label="订票日期" style={{ marginRight: 6 }} />订票日期</li><li className={type==='ride'?`active`:''} onClick={() => setType('ride')}><input type="checkbox" checked={type==='ride'} onChange={()=>setType('ride')} aria-label="乘车日期" style={{ marginRight: 6 }} />乘车日期</li></ul></div></div>
        <div className="form-item"><label className="form-label">开始日期</label><div className="form-bd"><div className={`input-box input-data`}><input type="text" className="input" value={fromDate} onChange={e => setFromDate(e.target.value)} aria-label="请输入开始日期" /><i className={`icon icon-date`}></i></div></div></div>
        <div className="form-item"><label className="form-label">结束日期</label><div className="form-bd"><div className={`input-box input-data`}><input type="text" className="input" value={toDate} onChange={e => setToDate(e.target.value)} aria-label="请输入结束日期" /><i className={`icon icon-date`}></i></div></div></div>
        <div className="form-item"><label className="form-label">关键字</label><div className="form-bd"><div className={`input-box`}><input type="text" className={`input search-input`} value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="订单号/车次/乘客姓名" aria-label="订单号/车次/乘客姓名" /></div></div></div>
        <div className={`form-item form-item-btn mt-mlg`}><a href="#" className={`btn btn-primary form-block`}>查询</a></div>
      </div>
    </div>
  )
}

function CommonQuery() {
  const [tab, setTab] = useState(0)
  const [saleDate, setSaleDate] = useState(() => { const t=new Date(); return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}` })
  const [saleStation, setSaleStation] = useState('')
  const [rideDate, setRideDate] = useState(() => { const t=new Date(); return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}` })
  const [carNo, setCarNo] = useState('')
  const [rideStation, setRideStation] = useState('')
  const [stationZwd, setStationZwd] = useState('')
  const [stationType, setStationType] = useState('arrive')
  const [weatherCity, setWeatherCity] = useState('')
  const [forecast, setForecast] = useState([])
  const iconSvg = (t) => {
    if (t === 'sunny') return (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5" fill="#ffb400"></circle><g stroke="#ffb400" strokeWidth="2"><line x1="12" y1="2" x2="12" y2="5"></line><line x1="12" y1="19" x2="12" y2="22"></line><line x1="2" y1="12" x2="5" y2="12"></line><line x1="19" y1="12" x2="22" y2="12"></line><line x1="4.5" y1="4.5" x2="6.8" y2="7"></line><line x1="17.2" y1="17" x2="19.5" y2="19.5"></line><line x1="4.5" y1="19.5" x2="7" y2="17.2"></line><line x1="17" y1="6.8" x2="19.5" y2="4.5"></line></g></svg>
    )
    if (t === 'cloudy') return (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><g fill="#7aaefb"><circle cx="9" cy="10" r="4"></circle><circle cx="14" cy="12" r="5"></circle><rect x="5" y="13" width="14" height="4" rx="2"></rect></g></svg>
    )
    if (t === 'rain') return (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><g fill="#7aaefb"><circle cx="10" cy="10" r="4"></circle><circle cx="15" cy="12" r="5"></circle></g><g stroke="#3b99fc" strokeWidth="2"><line x1="8" y1="17" x2="6" y2="21"></line><line x1="12" y1="17" x2="10" y2="21"></line><line x1="16" y1="17" x2="14" y2="21"></line></g></svg>
    )
    if (t === 'snow') return (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><g fill="#7aaefb"><circle cx="10" cy="10" r="4"></circle><circle cx="15" cy="12" r="5"></circle></g><g stroke="#7aaefb" strokeWidth="2"><line x1="8" y1="17" x2="8" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><line x1="16" y1="17" x2="16" y2="21"></line></g></svg>
    )
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 16h14" stroke="#3b99fc" strokeWidth="2"></path><path d="M6 12l3-3 3 3" stroke="#3b99fc" strokeWidth="2" fill="none"></path><circle cx="17" cy="9" r="3" fill="#7aaefb"></circle></svg>
    )
  }
  return (
    <div className="search-main-tab">
      <div className="search-tab-hd">
        <ul>
          {['正晚点', '检票口', '起售时间', '天气查询'].map((t, i) => (
            <li key={t} className={i===tab?'active':''} onClick={() => setTab(i)}>
              <a href="#"><i className={`icon ${i===0?'icon-shijian':i===1?'icon-jianpiaokou':i===2?'icon-qishou':'icon-tianqi'}`}></i>{t}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-tab-bd">
        {tab===0 && (
          <div className="search-tab-item" style={{ display: 'block' }}>
            <div className="search-form">
              <div className="form-item"><span className="form-label">查询类型</span><div className="form-bd"><ul className={`radio-list radio-list-station`}><li className={stationType==='arrive'?`active`:''} onClick={()=>setStationType('arrive')}><input type="checkbox" checked={stationType==='arrive'} onChange={()=>setStationType('arrive')} aria-label="到达站" style={{ marginRight: 6 }} />到达站</li><li className={stationType==='depart'?`active`:''} onClick={()=>setStationType('depart')}><input type="checkbox" checked={stationType==='depart'} onChange={()=>setStationType('depart')} aria-label="出发站" style={{ marginRight: 6 }} />出发站</li></ul></div></div>
              <LabeledInput label="车站" icon="icon-place" value={stationZwd} onChange={setStationZwd} placeholder="简拼／全拼／汉字" />
              <div className="form-item"><label className="form-label">车次</label><div className="form-bd"><div className={`input-box`}><input type="text" className={`input`} placeholder="请输入车次" /></div></div></div>
              <div className={`form-item form-item-btn mt-mlg`}><a href="#" className={`btn btn-primary form-block`}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
            </div>
          </div>
        )}
        {tab===1 && (
          <div className="search-tab-item" style={{ display: 'block' }}>
            <div className="search-form">
              <LabeledInput label="乘车日期" icon="icon-date" value={rideDate} onChange={setRideDate} />
              <div className="form-item"><label className="form-label">车次</label><div className="form-bd"><div className={`input-box`}><input type="text" className={`input`} placeholder="请输入车次" value={carNo} onChange={e=>setCarNo(e.target.value)} /></div></div></div>
              <LabeledInput label="乘车站" icon="icon-place" value={rideStation} onChange={setRideStation} placeholder="请选择车站" />
              <div className={`form-item form-item-btn mt-mlg`}><a href="#" className={`btn btn-primary form-block`}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
            </div>
          </div>
        )}
        {tab===2 && (
          <div className="search-tab-item" style={{ display: 'block' }}>
            <div className="search-form">
              <LabeledInput label="起售日期" icon="icon-date" value={saleDate} onChange={setSaleDate} />
              <LabeledInput label="起售车站" icon="icon-place" value={saleStation} onChange={setSaleStation} placeholder="简拼/全拼/汉字" />
              <div className={`form-item form-item-btn mt-mlg`}><a href="#" className={`btn btn-primary form-block`}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
            </div>
          </div>
        )}
        {tab===3 && (
          <div className="search-tab-item" style={{ display: 'block' }}>
            <div className="search-form">
              <LabeledInput label="目的地" icon="icon-place" value={weatherCity} onChange={setWeatherCity} placeholder="简拼／全拼／汉字" />
              <div className={`form-item form-item-btn mt-mlg`}>
                <a href="#" className={`btn btn-primary form-block`} onClick={(e)=>{ e.preventDefault(); const types=['sunny','cloudy','rain','snow','wind']; const base=weatherCity||'北京'; const h=Array.from(base).reduce((a,c)=>a+c.charCodeAt(0),0); const list=Array(5).fill(0).map((_,i)=>{ const t=types[(h+i)%types.length]; const hi=20+((h+i)%10); const lo=hi-5; const label=i===0?'今天':i===1?'明天':i===2?'后天':`第${i+1}天`; return {type:t,hi,lo,label}; }); setForecast(list); }}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a>
              </div>
              {forecast.length>0 && (
                <div style={{ marginTop: 12 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
                    {forecast.map((f,i)=> (
                      <div key={i} style={{ border: '1px solid #dbeaf8', borderRadius: 4, padding: '10px 8px', textAlign: 'center' }}>
                        <div style={{ height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{iconSvg(f.type)}</div>
                        <div style={{ color: '#333', marginTop: 6 }}>{f.label}</div>
                        <div style={{ color: '#888', fontSize: 12 }}>{`${f.lo}° ~ ${f.hi}°`}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Dinner() {
  const [depDate, setDepDate] = useState(() => { const t=new Date(); return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}` })
  return (
    <div className="search-main-tab">
      <div className="search-tab-hd">
        <ul>
          <li className={`active`} style={{ width: '50%' }}><a href="#"><i className={`icon icon-shijian`}></i>预订</a></li>
          <li style={{ width: '50%' }}><a href="#"><i className={`icon icon-jianpiaokou`}></i>餐饮订单</a></li>
        </ul>
      </div>
      <div className="search-tab-bd">
        <div className={`search-tab-item dinner-yuding`} style={{ display: 'block' }}> 
          <div className="search-form">
            <LabeledInput label="出发日期" icon="icon-date" value={depDate} onChange={setDepDate} />
            <div className="form-item"><label className="form-label">出发车次</label><div className="form-bd"><div className={`input-box`}><input type="text" className={`input`} placeholder="仅支持G、D字头的动车组列车" /></div></div></div>
            <div className={`form-item form-item-btn mt-mlg`}><a href="#" className={`btn btn-primary form-block`}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}
