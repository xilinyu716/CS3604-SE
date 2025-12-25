import { useState } from 'react'
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
              {tab===2 && <TicketSerial />}
              {tab===3 && <TicketRefund />}
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
  return (
    <div className="form-item">
      <label className="form-label">{label}</label>
      <div className="form-bd">
        <div className={`input-box ${icon==='icon-date'?'input-data':'input-city'}`}>
          <input type="text" className="input" placeholder={placeholder || ''} value={value} onChange={e => onChange && onChange(e.target.value)} />
          {icon && <i className={`icon ${icon}`}></i>}
        </div>
      </div>
    </div>
  )
}

function TicketOne({ onQuery }) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('2025-12-25')
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
              <li onClick={() => setIsStudent(v => !v)}>学生<i></i></li>
              <li onClick={() => setIsHigh(v => !v)}>高铁/动车<i></i></li>
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
  const [goDate, setGoDate] = useState('')
  const [backDate, setBackDate] = useState('')
  const [isStudent, setIsStudent] = useState(false)
  const [isHigh, setIsHigh] = useState(false)
  return (
    <div className="search-tab-item" style={{ display: 'none' }}>
      <div className="search-form">
        <div className="form-item-group">
          <LabeledInput label="出发地" icon="icon-place" value={from} onChange={setFrom} />
          <LabeledInput label="到达地" icon="icon-place" value={to} onChange={setTo} />
          <div className="city-change"><i className={`icon icon-qiehuan`} title="切换"></i></div>
        </div>
        <LabeledInput label="出发日期" icon="icon-date" value={goDate} onChange={setGoDate} />
        <LabeledInput label="返程日期" icon="icon-date" value={backDate} onChange={setBackDate} />
        <div className={`form-item form-item-check`}><div className="form-bd"><ul className={`check-list check-list-right`}><li onClick={() => setIsStudent(v => !v)}>学生<i></i></li><li onClick={() => setIsHigh(v => !v)}>高铁/动车<i></i></li></ul></div></div>
        <div className={`form-item form-item-btn`}><a className={`btn btn-primary form-block`} onClick={() => onQuery({ tripType: 'wf', from, to, goDate, backDate, isStudent, isHigh })}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
      </div>
    </div>
  )
}

function TicketSerial() {
  return (
    <div className="search-tab-item" style={{ display: 'none' }}>
      <div className="search-form">
        <div className="form-item-group">
          <LabeledInput label="出发地" icon="icon-place" />
          <LabeledInput label="到达地" icon="icon-place" />
          <div className="city-change"><i className={`icon icon-qiehuan`} title="切换"></i></div>
        </div>
        <div className="form-item"><label className="form-label">乘车日期</label><div className="form-bd"><div className={`input-box input-data`}><input type="text" className="input" /><i className={`icon icon-date`}></i></div></div></div>
        <div className={`form-item form-item-check`}><div className="form-bd"><ul className={`check-list check-list-right`}><li>学生<i></i></li></ul></div></div>
        <div className={`form-item form-item-btn`}><a href="#" className={`btn btn-primary form-block`}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
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

function CommonQuery() {
  const [tab, setTab] = useState(0)
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
              <div className="form-item"><span className="form-label">查询类型</span><div className="form-bd"><ul className={`radio-list radio-list-station`}><li className={`active`}><i></i>到达站</li><li><i></i>出发站</li></ul></div></div>
              <LabeledInput label="车站" placeholder="简拼／全拼／汉字" />
              <div className="form-item"><label className="form-label">车次</label><div className="form-bd"><div className={`input-box`}><input type="text" className={`input`} placeholder="请输入车次" /></div></div></div>
              <div className={`form-item form-item-btn mt-mlg`}><a href="#" className={`btn btn-primary form-block`}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
            </div>
          </div>
        )}
        {tab===1 && (
          <div className="search-tab-item" style={{ display: 'none' }}>
            <div className="search-form">
              <div className="form-item"><label className="form-label">乘车日期</label><div className="form-bd"><div className={`input-box input-data`}><input type="text" className={`input`} /><i className={`icon icon-date`}></i></div></div></div>
              <div className="form-item"><label className="form-label">车次</label><div className="form-bd"><div className={`input-box`}><input type="text" className={`input`} placeholder="请输入车次" /></div></div></div>
              <div className="form-item"><label className="form-label">乘车站</label><div className="form-bd"><div className={`input-box`}><div className={`model-select-box`}><div className={`model-select-text`}>请选择车站</div></div></div></div></div>
              <div className={`form-item form-item-btn mt-mlg`}><a href="#" className={`btn btn-primary form-block`}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
            </div>
          </div>
        )}
        {tab===2 && (
          <div className="search-tab-item" style={{ display: 'none' }}>
            <div className="search-form">
              <div className="form-item"><label className="form-label">起售日期</label><div className="form-bd"><div className={`input-box input-data`}><input type="text" className={`input`} /><i className={`icon icon-date`}></i></div></div></div>
              <LabeledInput label="起售车站" />
              <div className={`form-item form-item-btn mt-mlg`}><a href="#" className={`btn btn-primary form-block`}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
            </div>
          </div>
        )}
        {tab===3 && (
          <div className="search-tab-item" style={{ display: 'none' }}>
            <div className="search-form">
              <LabeledInput label="目的地" placeholder="简拼／全拼／汉字" />
              <div className={`form-item form-item-btn mt-mlg`}><a href="#" className={`btn btn-primary form-block`}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Dinner() {
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
            <div className="form-item"><label className="form-label">出发日期</label><div className="form-bd"><div className={`input-box input-data`}><input type="text" className={`input`} /><i className={`icon icon-date`}></i></div></div></div>
            <div className="form-item"><label className="form-label">出发车次</label><div className="form-bd"><div className={`input-box`}><input type="text" className={`input`} placeholder="仅支持G、D字头的动车组列车" /></div></div></div>
            <div className={`form-item form-item-btn mt-mlg`}><a href="#" className={`btn btn-primary form-block`}>查&nbsp;&nbsp;&nbsp;&nbsp;询</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}
