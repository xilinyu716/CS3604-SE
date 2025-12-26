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

export default function ContactsTable({ items, onDelete, selected = [], onToggle, onBulkDelete, onAddClick }) {
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
          <div className={`order-hd-info`}>
            <a href="#" onClick={(e)=>{ e.preventDefault(); onAddClick && onAddClick() }}>
              <i className={`icon icon-add-fill txt-success mr-sm`}></i>添加
            </a>
          </div>
          <div className={`order-hd-info`}>
            <a href="#" onClick={(e)=>{ e.preventDefault(); onBulkDelete && onBulkDelete() }}>
              <i className={`icon icon-del txt-error mr-sm`}></i>批量删除
            </a>
          </div>
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
                          checked={!isSelf && selected.includes(p.allEncStr)} 
                          onChange={(e)=>{ if(!isSelf){ onToggle && onToggle(p.allEncStr, e.target.checked) } }} 
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
                            <i className={`icon icon-del`} style={{ color: canDelete ? undefined : '#999' }}></i>
                          </a>
                        )}
                        {!isSelf && (
                          <a href="#"><i className={`icon icon-edit`}></i></a>
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
