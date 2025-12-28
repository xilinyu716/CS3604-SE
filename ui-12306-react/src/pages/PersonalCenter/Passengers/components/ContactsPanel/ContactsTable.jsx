import styles from './ContactsTable.module.css'
import StatusIcon from './StatusIcon'

function mapUserStatus(p) {
  const t = p.total_times
  if (p.passenger_id_type_code === '2') return 'user-error'
  if (t === '95' || t === '97' || t === '93' || t === '99') return 'user-ok'
  if (t === '94' || t === '96' || t === '92' || t === '98' || t === '91') return 'user-error'
  return 'user-error'
}

function mapMobileStatus(p) {
  const phoneChecked = p.if_receive === 'Y' || p.is_active === 'Y'
  return phoneChecked ? 'mobile-ok' : 'mobile-error'
}

import { Link } from 'react-router-dom'

export default function ContactsTable({ items, onDelete, selectedIds, onToggleSelect, onBatchDelete }) {
  return (
    <div>
      <table className={`order-panel-head`}>
        <colgroup>
          <col className={`col-num`} />
          <col className={`col-name`} />
          <col className={`col-cardtype`} />
          <col className={`col-cardnum`} />
          <col className={`col-tel`} />
          <col className={`col-state`} />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>证件类型</th>
            <th>证件号码</th>
            <th>手机／电话</th>
            <th>核验状态</th>
            <th>操作</th>
          </tr>
        </tbody>
      </table>
      <div className={`order-item`}>
        <div className={`order-item-hd`}>
          <div className={`order-hd-info`}><Link to="/center/passengers/add">
            <span className={`txt-success mr-sm`} aria-hidden="true" style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1aad19" strokeWidth="2">
                <circle cx="12" cy="12" r="9" fill="#e8f6e8" stroke="none"></circle>
                <path d="M12 8v8M8 12h8" stroke="#1aad19" />
              </svg>
            </span>
            添加
          </Link></div>
          <div className={`order-hd-info`}><a href="#" onClick={(e)=>{ e.preventDefault(); onBatchDelete?.() }}>
            <span className={`txt-error mr-sm`} aria-hidden="true" style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff4d4f" strokeWidth="2">
                <rect x="6" y="8" width="12" height="12" rx="2" fill="#fdecec" stroke="none"></rect>
                <path d="M6 8h12M10 5h4M9 12v6M15 12v6" stroke="#ff4d4f" />
              </svg>
            </span>
            批量删除
          </a></div>
        </div>
        <div className={`order-item-bd`} style={{ maxHeight: '100%' }}>
          <table className={`order-item-table ${styles.table}`}>
            <colgroup>
              <col className={`col-num`} />
              <col className={`col-name`} />
              <col className={`col-cardtype`} />
              <col className={`col-cardnum`} />
              <col className={`col-tel`} />
              <col className={`col-state`} />
              <col />
            </colgroup>
            <tbody>
              {items.map((p, i) => {
                const isSelf = p.isUserSelf === 'Y'
                const userStatus = mapUserStatus(p)
                const mobileStatus = mapMobileStatus(p)
                const canDeleteAfter = p.delete_time ? new Date(p.delete_time) : null
                const canDelete = !isSelf && (!canDeleteAfter || new Date() >= canDeleteAfter)
                return (
                  <tr key={p.allEncStr}>
                    <td>
                      <label className={`check-inline`}>
                        <input 
                          type="checkbox" 
                          className={isSelf ? 'UserSelf' : ''} 
                          disabled={isSelf} 
                          aria-label={`${p.passenger_name}`} 
                          checked={selectedIds?.has(p.allEncStr) || false}
                          onChange={(e)=>onToggleSelect?.(p.allEncStr, e.target.checked)}
                        />{i + 1}
                      </label>
                    </td>
                    <td className={`br-none`}>
                      <div className={`name-yichu ${styles.name}`}>{p.passenger_name}</div>
                    </td>
                    <td className={`br-none`}>
                      <div>{p.passenger_id_type_name}</div>
                    </td>
                    <td className={`br-none`}>
                      <div>{p.passenger_id_no}</div>
                    </td>
                    <td className={`br-none`}>
                      <div>{p.mobile_no ? `(+)${p.mobile_code}${p.mobile_no}` : p.mobile_no}</div>
                    </td>
                    <td className={`br-none`}>
                      <div className={`verification-status-box`}>
                        <StatusIcon type={userStatus} />
                        <StatusIcon type={mobileStatus} />
                      </div>
                    </td>
                    <td className={`br-none`}>
                      <div className={`list-operation`}>
                        {!isSelf && (
                          <a href="#" onClick={(e)=>{ e.preventDefault(); if(canDelete){ onDelete(p.allEncStr) } }} title={canDelete ? '' : formatDeleteTip(p.delete_time)}>
                            <span aria-hidden="true" style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={canDelete ? '#ff4d4f' : '#999'} strokeWidth="2">
                                <path d="M3 6h18" />
                                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                <path d="M10 11v6M14 11v6" />
                                <path d="M9 6l1-2h4l1 2" />
                              </svg>
                            </span>
                          </a>
                        )}
                        {!isSelf && (
                          <a href="#">
                            <span aria-hidden="true" style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b99fc" strokeWidth="2">
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <path d="M8 16l8-8M10 8h6v6" />
                              </svg>
                            </span>
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function formatDeleteTip(iso) {
  if (!iso) return ''
  const y = iso.slice(0,4), m = iso.slice(5,7), d = iso.slice(8,10)
  return `${y}年${m}月${d}日前不能删除`
}
