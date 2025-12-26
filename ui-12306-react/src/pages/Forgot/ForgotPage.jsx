import { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './ForgotPage.module.css'

function Tabs({ tab, setTab }) {
  return (
    <ul className={styles.tabs} role="tablist">
      <li className={`${styles.tab} ${styles.tabFace} ${tab==='face'?styles.active:''}`} role="tab" aria-selected={tab==='face'} onClick={()=>setTab('face')}><i className={styles.iconUser}></i>人脸找回</li>
      <li className={`${styles.tab} ${styles.tabMobile} ${tab==='mobile'?styles.active:''}`} role="tab" aria-selected={tab==='mobile'} onClick={()=>setTab('mobile')}><i className={styles.iconPhone}></i>手机找回</li>
      <li className={`${styles.tab} ${styles.tabEmail} ${tab==='email'?styles.active:''}`} role="tab" aria-selected={tab==='email'} onClick={()=>setTab('email')}><i className={styles.iconMail}></i>邮箱找回</li>
    </ul>
  )
}

function FaceRecover() {
  return (
    <div className={styles.panelBox}>
      <div className={styles.faceTitle}>人脸找回</div>
      <div className={styles.faceSub}>扫描二维码，使用12306APP找回密码</div>
      <div className={styles.qrWrap}><img src="/assets/public.png" alt="二维码" /></div>
    </div>
  )
}

function StepBar({ step }) {
  const labels = ['填写账户信息','获取验证码','设置新密码','完成']
  return (
    <div className={styles.steps} aria-label="步骤">
      {labels.map((t,i)=> (
        <div key={t} className={`${styles.step} ${i===step?styles.stepActive:''}`}>
          <span className={styles.stepDot}></span>
          <span className={styles.stepTxt}>{t}</span>
          {i<labels.length-1 && <span className={styles.stepLine}></span>}
        </div>
      ))}
    </div>
  )
}

function MobileRecover({ onSwitchEmail }) {
  const [mobile, setMobile] = useState('')
  const [idType, setIdType] = useState('居民身份证')
  const [idNo, setIdNo] = useState('')
  const submit = () => {
    alert('已提交')
  }
  return (
    <div className={styles.panelBox}>
      <StepBar step={0} />
      <div className={styles.form}>
        <div className={styles.formItem}>
          <label className={styles.label}><span className={styles.required}>*</span> 手机号码归属</label>
          <div className={styles.inputGroup}>
            <span className={styles.prefix}>+86</span>
            <input className={styles.input} placeholder="请输入绑定的手机号" value={mobile} onChange={e=>setMobile(e.target.value)} />
          </div>
          <span className={styles.hint}>已通过核验的手机号</span>
        </div>
        <div className={styles.formItem}>
          <label className={styles.label}><span className={styles.required}>*</span> 证件类型</label>
          <select className={styles.select} value={idType} onChange={e=>setIdType(e.target.value)}>
            <option>居民身份证</option>
            <option>中国护照</option>
            <option>港澳居民来往内地通行证</option>
            <option>台湾居民来往大陆通行证</option>
            <option>外国护照</option>
          </select>
          <span className={styles.hint}>核验证件类型</span>
        </div>
        <div className={styles.formItem}>
          <label className={styles.label}><span className={styles.required}>*</span> 证件号码</label>
          <input className={styles.input} placeholder="请输入证件号码" value={idNo} onChange={e=>setIdNo(e.target.value)} />
          <span className={styles.hint}>请确认证件号码</span>
        </div>
        <div className={styles.actions}>
          <button className={styles.primaryBtn} onClick={submit}>提交</button>
        </div>
        <div className={styles.tipLine}>手机号未通过核验？<a className={styles.link} onClick={onSwitchEmail}>试试邮箱找回</a></div>
      </div>
    </div>
  )
}

function EmailRecover() {
  const [email, setEmail] = useState('')
  const [idType, setIdType] = useState('居民身份证')
  const [idNo, setIdNo] = useState('')
  const submit = () => {
    alert('已提交')
  }
  return (
    <div className={styles.panelBox}>
      <div className={styles.form}>
        <div className={styles.formItem}>
          <label className={styles.label}><span className={styles.required}>*</span> 电子邮箱</label>
          <input className={styles.input} placeholder="注册时所填的电子邮箱" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label}><span className={styles.required}>*</span> 证件类型</label>
          <select className={styles.select} value={idType} onChange={e=>setIdType(e.target.value)}>
            <option>居民身份证</option>
            <option>中国护照</option>
            <option>港澳居民来往内地通行证</option>
            <option>台湾居民来往大陆通行证</option>
            <option>外国护照</option>
          </select>
        </div>
        <div className={styles.formItem}>
          <label className={styles.label}><span className={styles.required}>*</span> 证件号码</label>
          <input className={styles.input} placeholder="请填写证件号码" value={idNo} onChange={e=>setIdNo(e.target.value)} />
        </div>
        <div className={styles.actions}>
          <button className={styles.primaryBtn} onClick={submit}>提交</button>
        </div>
      </div>
    </div>
  )
}

export default function ForgotPage() {
  const [tab, setTab] = useState('face')
  return (
    <div>
      <Header />
      <div className={styles.section}>
        <div className="wrapper">
          <div className={styles.box}>
            <Tabs tab={tab} setTab={setTab} />
            {tab==='face' && <FaceRecover />}
            {tab==='mobile' && <MobileRecover onSwitchEmail={()=>setTab('email')} />}
            {tab==='email' && <EmailRecover />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
