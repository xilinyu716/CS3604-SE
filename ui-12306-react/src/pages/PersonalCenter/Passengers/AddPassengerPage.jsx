import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import GoToTop from '../../../components/GoToTop/GoToTop'
import CenterMenu from './components/CenterMenu'
import styles from './AddPassengerPage.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addPassenger } from './store/passengerStore'

function Breadcrumb() {
  return (
    <div className={`breadcrumb ${styles.breadcrumb}`}>当前位置：
      <a href="#">个人中心</a>
      <span className="sep">&gt;</span>
      <a href="#">常用信息管理</a>
      <span className="sep">&gt;</span>
      <a href="#">乘车人</a>
      <span className="sep">&gt;</span>
      <span className="active">新增乘车人</span>
    </div>
  )
}

export default function AddPassengerPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    passenger_id_type_code: '1',
    passenger_id_type_name: '居民身份证',
    passenger_name: '',
    passenger_id_no: '',
    mobile_code: '86',
    mobile_no: '',
    passenger_type_name: '成人',
  })

  const onSave = () => {
    const name = form.passenger_name.trim()
    const id = form.passenger_id_no.trim()
    const mobile = form.mobile_no.trim()
    if (!name || !id || !mobile) {
      alert('请完整填写姓名、证件号码、手机号')
      return
    }
    const nowEnc = `enc-${Date.now()}`
    addPassenger({
      passenger_name: name,
      passenger_id_type_code: form.passenger_id_type_code,
      passenger_id_type_name: form.passenger_id_type_name,
      passenger_id_no: id,
      mobile_code: form.mobile_code,
      mobile_no: form.mobile_no,
      isUserSelf: 'N',
      allEncStr: nowEnc,
      delete_time: '',
      total_times: '93',
      if_receive: 'Y',
      is_active: 'N',
      passenger_type_name: form.passenger_type_name,
    })
    navigate('/center/passengers')
  }

  return (
    <div className={styles.page}>
      <Header />
      <div className={`wrapper content`}>
        <Breadcrumb />
        <div className={`center-box`}>
          <CenterMenu />
          <div className={`center-main ${styles.main}`}>
            <div className={`panel-border ${styles.panel}`}>
              <div className={`order-panel`}>
                <div className={styles.formTitle}>基本信息</div>
                <div className={styles.form}>
                  <div className={`form-item`}>
                    <label className={`form-label`}><span className={`txt-danger`}>*</span>证件类型</label>
                    <div className={`form-bd`}>
                      <select className={`input`} value={form.passenger_id_type_code} onChange={(e) => {
                        const code = e.target.value
                        const name = code === '1' ? '居民身份证' : code === 'B' ? '护照' : '其他'
                        setForm({ ...form, passenger_id_type_code: code, passenger_id_type_name: name })
                      }}>
                        <option value="1">居民身份证</option>
                        <option value="B">护照</option>
                        <option value="C">港澳居民来往内地通行证</option>
                        <option value="G">台湾居民来往大陆通行证</option>
                      </select>
                    </div>
                  </div>
                  <div className={`form-item`}>
                    <label className={`form-label`}><span className={`txt-danger`}>*</span>姓名</label>
                    <div className={`form-bd`}>
                      <div className={`input-box`}>
                        <input className={`input`} placeholder="请输入乘客姓名" value={form.passenger_name} onChange={e => setForm({ ...form, passenger_name: e.target.value })} aria-label="乘客姓名" />
                      </div>
                    </div>
                  </div>
                  <div className={`form-item`}>
                    <label className={`form-label`}><span className={`txt-danger`}>*</span>证件号码</label>
                    <div className={`form-bd`}>
                      <div className={`input-box`}>
                        <input className={`input`} placeholder="请输入证件号码" value={form.passenger_id_no} onChange={e => setForm({ ...form, passenger_id_no: e.target.value })} aria-label="证件号码" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.formTitle}>联系方式</div>
                <div className={styles.form}>
                  <div className={`form-item`}>
                    <label className={`form-label`}>手机号</label>
                    <div className={`form-bd`}>
                      <div className={`input-box`} style={{ display: 'flex', gap: 8 }}>
                        <select className={`input`} style={{ width: 80 }} value={form.mobile_code} onChange={(e)=>setForm({ ...form, mobile_code: e.target.value })} aria-label="国家码">
                          <option value="86">+86</option>
                          <option value="852">+852</option>
                          <option value="853">+853</option>
                          <option value="886">+886</option>
                        </select>
                        <input className={`input`} placeholder="请输入手机号" value={form.mobile_no} onChange={e => setForm({ ...form, mobile_no: e.target.value })} aria-label="手机号" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.formTitle}>附加信息</div>
                <div className={styles.form}>
                  <div className={`form-item`}>
                    <label className={`form-label`}><span className={`txt-danger`}>*</span>优惠(待)类型</label>
                    <div className={`form-bd`}>
                      <select className={`input`} value={form.passenger_type_name} onChange={(e)=>setForm({ ...form, passenger_type_name: e.target.value })} aria-label="票种类型">
                        <option value="成人">成人</option>
                        <option value="儿童">儿童</option>
                        <option value="学生">学生</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={`mt-lg`}>
                  <button className={`btn`} onClick={() => navigate('/center/passengers')}>取消</button>
                  <button className={`btn btn-primary ml`} onClick={onSave}>保存</button>
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

