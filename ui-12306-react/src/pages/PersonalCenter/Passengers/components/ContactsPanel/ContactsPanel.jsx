import styles from './ContactsPanel.module.css'
import SearchForm from './SearchForm'
import ContactsTable from './ContactsTable'
import IntegralTipsModal from '../IntegralTipsModal'
import { useMemo, useState, useEffect } from 'react'
import data from '../../mock/passengers.json'
import { loadPassengers, deleteByEncStr } from '../../store/passengerStore'
import { useNavigate } from 'react-router-dom'

export default function ContactsPanel() {
  const [keyword, setKeyword] = useState('')
  const [showTips, setShowTips] = useState(false)
  const [items, setItems] = useState(loadPassengers(data))
  const [selected, setSelected] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setItems(loadPassengers(data))
  }, [])

  const filtered = useMemo(() => {
    if (!keyword) return items
    return items.filter(x => x.passenger_name.includes(keyword))
  }, [keyword, items])

  const onDelete = (encStr) => {
    deleteByEncStr([encStr])
    setItems(prev => prev.filter(x => x.allEncStr !== encStr))
    setSelected(prev => prev.filter(e => e !== encStr))
  }

  const onToggle = (encStr, checked) => {
    setSelected(prev => {
      const set = new Set(prev)
      if (checked) set.add(encStr)
      else set.delete(encStr)
      return Array.from(set)
    })
  }

  const onBulkDelete = () => {
    if (selected.length === 0) return
    if (!window.confirm(`确认删除选中的 ${selected.length} 位乘车人？`)) return
    deleteByEncStr(selected)
    setItems(prev => prev.filter(x => !selected.includes(x.allEncStr)))
    setSelected([])
  }

  const onAddClick = () => {
    navigate('/center/passengers/add')
  }

  return (
    <div className={`center-main ${styles.main}`}>
      <div className={`tips-box tips-box-mini`} style={{ marginBottom: 5 }}>
        <p className={`txt-md`}>
          <i className={`icon icon-tips txt-second mr-sm`}></i>为感谢对联系方式核验工作的支持和配合，12306网站将符合条件的用户和旅客分别赠送铁路常旅客积分。
          <a href="#" className={`txt-primary`} onClick={(e)=>{e.preventDefault(); setShowTips(true)}}>查看详情</a>
        </p>
      </div>
      <div className={`panel-border ${styles.panel}`}>
        <div className={`order-panel order-panel-contacts`}>
          <SearchForm onSearch={setKeyword} onClear={()=>setKeyword('')} />
          <ContactsTable 
            items={filtered} 
            onDelete={onDelete} 
            selected={selected}
            onToggle={onToggle}
            onBulkDelete={onBulkDelete}
            onAddClick={onAddClick}
          />
        </div>
      </div>
      <div className={`pagination mt-lg`} style={{ display: (filtered.length > 10) ? 'block' : 'none' }}>
        <div className={`page-all`}>共<strong>{Math.ceil(filtered.length / 10)}</strong>页</div>
        <ul className={`page-num`}><li className={`active`}><a href="#" aria-label="第一页">1</a></li></ul>
        <div className={`page-skip`}>到<input type="text" className={`input`} />页 </div>
        <a href="#" className={`btn page-btn`}>确定</a>
      </div>
      {showTips && <IntegralTipsModal onClose={()=>setShowTips(false)} />}
    </div>
  )
}
