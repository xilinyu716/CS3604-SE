import styles from './ContactsPanel.module.css'
import SearchForm from './SearchForm'
import ContactsTable from './ContactsTable'
import IntegralTipsModal from '../IntegralTipsModal'
import { useEffect, useMemo, useState } from 'react'

export default function ContactsPanel() {
  const [keyword, setKeyword] = useState('')
  const [showTips, setShowTips] = useState(false)
  const [items, setItems] = useState([])
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        setLoading(true)
        setError('')
        const res = await fetch('/api/user/passengers')
        const json = await res.json()
        if (!cancelled) {
          if (json && json.code === 0) {
            setItems(json.data || [])
          } else {
            setError('加载联系人失败')
          }
        }
      } catch {
        try {
          const mock = await import('../../mock/passengers.json')
          if (!cancelled) setItems(mock.default || [])
        } catch {
          if (!cancelled) setError('无法加载联系人数据')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  const filtered = useMemo(() => {
    if (!keyword) return items
    return items.filter(x => x.passenger_name.includes(keyword))
  }, [keyword, items])

  const onDelete = async (encStr) => {
    try {
      await fetch(`/api/user/passengers/${encStr}`, { method: 'DELETE' })
    } catch {}
    setItems(prev => prev.filter(x => x.allEncStr !== encStr))
    setSelectedIds(prev => {
      const next = new Set(prev)
      next.delete(encStr)
      return next
    })
  }

  const onToggleSelect = (encStr, checked) => {
    setSelectedIds(prev => {
      const next = new Set(prev)
      if (checked) next.add(encStr)
      else next.delete(encStr)
      return next
    })
  }

  

  const onBatchDelete = async () => {
    const toDelete = items.filter(p => selectedIds.has(p.allEncStr))
    if (toDelete.length === 0) return
    await Promise.all(toDelete.map(p => fetch(`/api/user/passengers/${p.allEncStr}`, { method: 'DELETE' }).catch(()=>{})))
    setItems(prev => prev.filter(x => !toDelete.find(a => a.allEncStr === x.allEncStr)))
    setSelectedIds(new Set())
  }

  return (
    <div className={`center-main ${styles.main}`}>
      <div className={`tips-box tips-box-mini`} style={{ marginBottom: 5 }}>
        <p className={`txt-md`}>
          <span className={`txt-second mr-sm`} aria-hidden="true" style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7aaefb" strokeWidth="2">
              <circle cx="12" cy="12" r="9" fill="#e9f3ff" stroke="none"></circle>
              <path d="M12 8v8" stroke="#7aaefb" />
              <circle cx="12" cy="6" r="1" fill="#7aaefb" />
            </svg>
          </span>
          为感谢对联系方式核验工作的支持和配合，12306网站将符合条件的用户和旅客分别赠送铁路常旅客积分。
          <a href="#" className={`txt-primary`} onClick={(e)=>{e.preventDefault(); setShowTips(true)}}>查看详情</a>
        </p>
      </div>
      <div className={`panel-border ${styles.panel}`}>
        <div className={`order-panel order-panel-contacts`}>
          <SearchForm onSearch={setKeyword} onClear={()=>setKeyword('')} />
          <ContactsTable 
            items={filtered} 
            onDelete={onDelete} 
            selectedIds={selectedIds} 
            onToggleSelect={onToggleSelect}
            onBatchDelete={onBatchDelete}
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
