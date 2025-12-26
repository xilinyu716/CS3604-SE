import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import GoToTop from '../../../components/GoToTop/GoToTop'
import CenterMenu from './components/CenterMenu'
import styles from './PassengersPage.module.css'
import addStyles from './AddPassengerPage.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function AddPassengerPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    passenger_id_type_code: '1',
    passenger_name: '',
    passenger_id_no: '',
    mobile_code: '86',
    mobile_no: '',
    discount_type: '成人'
  })
  const [saving, setSaving] = useState(false)

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

  const onSave = async () => {
    if (!validate()) return
    setSaving(true)
    const payload = {
      passenger_id_type_code: form.passenger_id_type_code,
      passenger_id_type_name: typeName(form.passenger_id_type_code),
      passenger_name: form.passenger_name.trim(),
      passenger_id_no: form.passenger_id_no.trim(),
      mobile_code: form.mobile_code.replace(/^\+/, '').trim(),
      mobile_no: form.mobile_no.trim(),
      isUserSelf: 'N',
      discount_type: form.discount_type
    }
    try {
      const res = await fetch('/api/user/passengers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const json = await res.json()
      if (json && json.code === 0) {
        navigate('/center/passengers')
      } else {
        alert('保存失败')
      }
    } catch {
      alert('网络错误，保存失败')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className={styles.page}>
      <Header />
      <div className={`wrapper content`}>
        <div className={`breadcrumb`}>当前位置：
          <a href="#">个人中心</a>
          <span className="sep">&gt;</span>
          <a href="#">常用信息管理</a>
          <span className="sep">&gt;</span>
          <span className="active">添加乘车人</span>
        </div>
        <div className={`center-box ${addStyles.layout}`}>
          <CenterMenu />
          <div className={`center-main ${addStyles.wrap} ${addStyles.right}`}>
            <div className={`panel-border ${addStyles.frame}`}>
              <div className={`order-panel`}>
                <div className={addStyles.tipBar}>如旅客身份信息未能在添加后的24小时内验证通过，请乘车人持有效身份证件到车站办理身份核验。</div>
                <div className={`section`}>
                  <div className={`section-hd ${addStyles.sectionHd}`}><h3 className={`section-tit ${addStyles.sectionTit}`}>基本信息</h3></div>
                  <div className={`section-bd ${addStyles.sectionBd}`}>
                    <div className={`form-item ${addStyles.formItem}`}>
                      <label className={`form-label ${addStyles.formLabel}`}><span style={{color:'#ff8d2b', marginRight:4}}>*</span>证件类型</label>
                      <div className={`input-box w160 ${addStyles.inputBox}`}>
                        <select className={`input ${addStyles.input}`} value={form.passenger_id_type_code} onChange={(e)=>setForm({ ...form, passenger_id_type_code: e.target.value })} aria-label="证件类型">
                          <option value="1">居民身份证</option>
                          <option value="2">护照</option>
                          <option value="B">港澳通行证</option>
                          <option value="C">台湾通行证</option>
                        </select>
                      </div>
                    </div>
                    <div className={`form-item ${addStyles.formItem}`}>
                      <label className={`form-label ${addStyles.formLabel}`}><span style={{color:'#ff8d2b', marginRight:4}}>*</span>姓名</label>
                      <div className={`input-box w240 ${addStyles.inputBox}`}>
                        <input type="text" className={`input ${addStyles.input}`} placeholder="请输入姓名" value={form.passenger_name} onChange={(e)=>setForm({ ...form, passenger_name: e.target.value })} aria-label="姓名" />
                      </div>
                      <a href="#" className={`txt-primary ml-sm ${addStyles.primaryLink}`} onClick={(e)=>e.preventDefault()}>姓名填写规则</a>
                    </div>
                    <div className={`form-item ${addStyles.formItem}`}>
                      <label className={`form-label ${addStyles.formLabel}`}><span style={{color:'#ff8d2b', marginRight:4}}>*</span>证件号码</label>
                      <div className={`input-box w240 ${addStyles.inputBox}`}>
                        <input type="text" className={`input ${addStyles.input}`} placeholder="用于身份核验，请正确填写" value={form.passenger_id_no} onChange={(e)=>setForm({ ...form, passenger_id_no: e.target.value })} aria-label="证件号码" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`section`}>
                  <div className={`section-hd ${addStyles.sectionHd}`}><h3 className={`section-tit ${addStyles.sectionTit}`}>联系方式</h3><span className={`txt-second`} style={{color:'#ff8d2b'}}>（请提供乘车人真实有效的联系方式）</span></div>
                  <div className={`section-bd ${addStyles.sectionBd}`}>
                    <div className={`form-item ${addStyles.formItem}`}>
                      <label className={`form-label ${addStyles.formLabel}`}>手机号码</label>
                      <div className={`input-box w80 ${addStyles.inputBox}`}>
                        <select 
                          className={`input ${addStyles.input}`} 
                          value={`+${form.mobile_code}`} 
                          onChange={(e)=>setForm({ ...form, mobile_code: e.target.value })} 
                          aria-label="手机区号"
                        >
                          <option value="+86">+86</option>
                          <option value="+852">+852</option>
                          <option value="+853">+853</option>
                          <option value="+886">+886</option>
                        </select>
                      </div>
                      <div className={`input-box w240 ${addStyles.inputBox}`}>
                        <input type="text" className={`input ${addStyles.input}`} value={form.mobile_no} onChange={(e)=>setForm({ ...form, mobile_no: e.target.value })} aria-label="手机号码" />
                      </div>
                    </div>
                    <p className={`txt-second`}>请您填写乘车人真实联系方式，以便接收铁路部门推送的重要服务信息，以及在紧急特殊情况下的联系。</p>
                  </div>
                </div>
                <div className={`section`}>
                  <div className={`section-hd ${addStyles.sectionHd}`}><h3 className={`section-tit ${addStyles.sectionTit}`}>附加信息</h3></div>
                  <div className={`section-bd ${addStyles.sectionBd}`}>
                    <div className={`form-item ${addStyles.formItem}`}>
                      <label className={`form-label ${addStyles.formLabel}`}><span style={{color:'#ff8d2b', marginRight:4}}>*</span>优惠(待)类型</label>
                      <div className={`input-box w160 ${addStyles.inputBox}`}>
                        <select className={`input ${addStyles.input}`} value={form.discount_type} onChange={(e)=>setForm({ ...form, discount_type: e.target.value })} aria-label="优惠类型">
                          <option>成人</option>
                          <option>儿童</option>
                          <option>学生</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`mt`}>
                  <a href="#" className={`btn`} onClick={(e)=>{ e.preventDefault(); navigate('/center/passengers') }}>取消</a>
                  <a href="#" className={`btn btn-primary ml`} onClick={(e)=>{ e.preventDefault(); if(!saving) onSave() }} aria-label="保存" style={{ background:'#ff8d2b', borderColor:'#ff8d2b' }}>保存</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <GoToTop />
    </div>
  )
}
