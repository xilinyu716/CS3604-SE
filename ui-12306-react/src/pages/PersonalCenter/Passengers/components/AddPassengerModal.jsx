import styles from './AddPassengerModal.module.css'
import { useState } from 'react'

export default function AddPassengerModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    passenger_name: '',
    passenger_id_type_code: '1',
    passenger_id_no: '',
    mobile_code: '86',
    mobile_no: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const typeName = (code) => {
    if (code === '1') return '居民身份证'
    if (code === '2') return '护照'
    if (code === 'B') return '港澳通行证'
    if (code === 'C') return '台湾通行证'
    return '其他'
  }

  const validate = () => {
    if (!form.passenger_name.trim()) return false
    if (!form.passenger_id_no.trim()) return false
    if (!form.mobile_no.trim()) return false
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    const payload = {
      ...form,
      passenger_id_type_name: typeName(form.passenger_id_type_code),
      isUserSelf: 'N'
    }
    await onSubmit?.(payload)
    setSubmitting(false)
  }

  return (
    <>
      <div className={`mask ${styles.mask}`}></div>
      <div className={`modal ${styles.modal}`} role="dialog" aria-modal="true" aria-label="新增乘车人">
        <a href="#" className={`modal-close`} title="关闭" onClick={(e)=>{ e.preventDefault(); onClose?.() }}>
          <i className={`icon icon-close`}></i>
        </a>
        <div className={`modal-hd`}><div className={`modal-tit`}>添加乘车人</div></div>
        <div className={`modal-bd ${styles.body}`}>
          <form onSubmit={handleSubmit}>
            <div className={`form-item`}>
              <label className={`form-label`}>姓名</label>
              <div className={`input-box`}>
                <input 
                  type="text" 
                  className={`input`} 
                  value={form.passenger_name} 
                  onChange={(e)=>setForm({ ...form, passenger_name: e.target.value })}
                  aria-label="乘车人姓名"
                />
              </div>
            </div>
            <div className={`form-item`}>
              <label className={`form-label`}>证件类型</label>
              <div className={`input-box`}>
                <select 
                  className={`input`} 
                  value={form.passenger_id_type_code} 
                  onChange={(e)=>setForm({ ...form, passenger_id_type_code: e.target.value })}
                  aria-label="证件类型"
                >
                  <option value="1">中国居民身份证</option>
                  <option value="2">护照</option>
                  <option value="B">港澳通行证</option>
                  <option value="C">台湾通行证</option>
                </select>
              </div>
            </div>
            <div className={`form-item`}>
              <label className={`form-label`}>证件号码</label>
              <div className={`input-box`}>
                <input 
                  type="text" 
                  className={`input`} 
                  value={form.passenger_id_no} 
                  onChange={(e)=>setForm({ ...form, passenger_id_no: e.target.value })}
                  aria-label="证件号码"
                />
              </div>
            </div>
            <div className={`form-item`}>
              <label className={`form-label`}>手机区号</label>
              <div className={`input-box w80`}>
                <input 
                  type="text" 
                  className={`input`} 
                  value={form.mobile_code} 
                  onChange={(e)=>setForm({ ...form, mobile_code: e.target.value })}
                  aria-label="手机区号"
                />
              </div>
              <label className={`form-label`}>手机号码</label>
              <div className={`input-box`}>
                <input 
                  type="text" 
                  className={`input`} 
                  value={form.mobile_no} 
                  onChange={(e)=>setForm({ ...form, mobile_no: e.target.value })}
                  aria-label="手机号码"
                />
              </div>
            </div>
            <div className={`modal-ft ${styles.footer}`}>
              <button className={`btn btn-primary`} type="submit" disabled={submitting}>提交</button>
              <a href="#" className={`btn`} onClick={(e)=>{ e.preventDefault(); onClose?.() }}>取消</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
