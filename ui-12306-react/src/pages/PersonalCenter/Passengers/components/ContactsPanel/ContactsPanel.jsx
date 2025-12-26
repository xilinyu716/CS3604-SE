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

  const formatDeleteTip = (iso) => {
    if (!iso) return ''
    const y = iso.slice(0,4), m = iso.slice(5,7), d = iso.slice(8,10)
    return `${y}年${m}月${d}日前不能删除`
  }

  const canDeleteItem = (p) => {
    const isSelf = p.isUserSelf === 'Y'
    const canDeleteAfter = p.delete_time ? new Date(p.delete_time) : null
    return !isSelf && (!canDeleteAfter || new Date() >= canDeleteAfter)
  }

  const onBatchDelete = async () => {
    const toDelete = items.filter(p => selectedIds.has(p.allEncStr))
    if (toDelete.length === 0) return
    const allowed = toDelete.filter(canDeleteItem)
    const blocked = toDelete.filter(p => !canDeleteItem(p))
    if (blocked.length > 0) {
      alert(blocked.map(p => `${p.passenger_name}${formatDeleteTip(p.delete_time) ? `（${formatDeleteTip(p.delete_time)}）` : '（本人不可删除）'}`).join('、'))
    }
    await Promise.all(allowed.map(p => fetch(`/api/user/passengers/${p.allEncStr}`, { method: 'DELETE' }).catch(()=>{})))
    setItems(prev => prev.filter(x => !allowed.find(a => a.allEncStr === x.allEncStr)))
    setSelectedIds(new Set())
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
