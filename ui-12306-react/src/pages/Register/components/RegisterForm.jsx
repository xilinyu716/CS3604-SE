import { useEffect, useMemo, useState } from 'react'
import vcss from '../../../styles/validation.module.css'
import styles from './RegisterForm.module.css'
import { validateUsername, passwordStrength, validatePassword, validateConfirmPassword, validateIdNumber, deriveBirthdayFromId, validateName, validateEmail, validateMobile } from '../../../utils/validation'
import NameRulePopover from './NameRulePopover'
import PassportTips from './PassportTips'
import StudentTypeHint from './StudentTypeHint'

const emailDomains = ['qq.com','gmail.com','126.com','163.com','hotmail.com','263.com','21cn.com','yahoo.com','yahoo.com.cn','live.com']

export default function RegisterForm({ onNext }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [cardType, setCardType] = useState('1')
  const [name, setName] = useState('')
  const [idNo, setIdNo] = useState('')
  const [idFocused, setIdFocused] = useState(false)
  const [bornDate, setBornDate] = useState('')
  const [sex, setSex] = useState('')
  const [nation, setNation] = useState('CHN')
  const [passengerType, setPassengerType] = useState('ADULT')
  const [email, setEmail] = useState('')
  const [emailOpen, setEmailOpen] = useState(false)
  const [emailIndex, setEmailIndex] = useState(0)
  const [mobileCode, setMobileCode] = useState('86')
  const [mobileNo, setMobileNo] = useState('')
  const [agree, setAgree] = useState(false)

  const [errors, setErrors] = useState({})

  const strength = useMemo(() => passwordStrength(password), [password])

  useEffect(() => {
    if (cardType === '1' && idNo.length === 18) {
      const b = deriveBirthdayFromId(idNo)
      if (b) setBornDate(b)
    }
  }, [cardType, idNo])

  function validateAll() {
    const isChina = nation === 'CHN'
    const e = {}
    const u = validateUsername(userName)
    if (u) e.userName = u
    const p = validatePassword(password, userName)
    if (p) e.password = p
    const c = validateConfirmPassword(confirm, password)
    if (c) e.confirm = c
    const n = validateName(name, isChina)
    if (n) e.name = n
    const id = validateIdNumber(cardType, idNo)
    if (id) e.idNo = id
    const em = validateEmail(email)
    if (em) e.email = em
    const m = validateMobile(mobileCode, mobileNo)
    if (m) e.mobileNo = m
    if (!agree) e.agree = '请阅读并同意服务条款与隐私政策'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleNext() {
    if (validateAll()) {
      onNext({
        userName,
        password,
        cardType,
        name,
        idNo,
        bornDate,
        sex,
        nation,
        passengerType,
        email,
        mobileCode,
        mobileNo
      })
    }
  }

  const rankCls = strength === 'a' ? vcss.rankA : strength === 'b' ? vcss.rankB : vcss.rankC

  function updateUserName(v) {
    setUserName(v)
    if (errors.userName) {
      const msg = validateUsername(v)
      setErrors(prev => {
        const next = { ...prev }
        if (msg) next.userName = msg
        else delete next.userName
        return next
      })
    }
  }

  function validateUserNameNow() {
    const msg = validateUsername(userName)
    setErrors(prev => {
      const next = { ...prev }
      if (msg) next.userName = msg
      else delete next.userName
      return next
    })
  }

  function updatePasswordNow(v) {
    setPassword(v)
    const msg = validatePassword(v, userName)
    setErrors(prev => {
      const next = { ...prev }
      if (msg) next.password = msg
      else delete next.password
      const cmsg = validateConfirmPassword(confirm, v)
      if (cmsg) next.confirm = cmsg
      else delete next.confirm
      return next
    })
  }

  function validatePasswordNow() {
    const msg = validatePassword(password, userName)
    setErrors(prev => {
      const next = { ...prev }
      if (msg) next.password = msg
      else delete next.password
      return next
    })
  }

  function updateConfirmNow(v) {
    setConfirm(v)
    const msg = validateConfirmPassword(v, password)
    setErrors(prev => {
      const next = { ...prev }
      if (msg) next.confirm = msg
      else delete next.confirm
      return next
    })
  }

  function validateConfirmNow() {
    const msg = validateConfirmPassword(confirm, password)
    setErrors(prev => {
      const next = { ...prev }
      if (msg) next.confirm = msg
      else delete next.confirm
      return next
    })
  }

  function updateIdNow(v) {
    let s = (v || '').toUpperCase()
    if (cardType === '1') {
      s = s.replace(/\D/g, '').slice(0, 18)
    }
    setIdNo(s)
    const msg = validateIdNumber(cardType, s)
    setErrors(prev => {
      const next = { ...prev }
      if (msg) next.idNo = msg
      else delete next.idNo
      return next
    })
    if (cardType === '1') {
      const b = deriveBirthdayFromId(s)
      if (b) setBornDate(b)
    }
  }

  function validateIdNow() {
    const msg = validateIdNumber(cardType, idNo)
    setErrors(prev => {
      const next = { ...prev }
      if (msg) next.idNo = msg
      else delete next.idNo
      return next
    })
  }

  function formatIdGroups(v) {
    const s = (v || '').replace(/\D+/g, '')
    const lens = [3, 3, 8, 4]
    const parts = []
    let idx = 0
    for (const len of lens) {
      if (s.length > idx) {
        parts.push(s.substring(idx, Math.min(idx + len, s.length)))
        idx += len
      } else {
        break
      }
    }
    return parts.join(' ')
  }

  const emailSuggestions = useMemo(() => {
    const v = email || ''
    const at = v.indexOf('@')
    const name = at >= 0 ? v.substring(0, at) : v
    if (!name) return []
    return emailDomains.map(d => `${name}@${d}`)
  }, [email])

  function handleEmailChange(v) {
    setEmail(v)
    if (errors.email) {
      const msg = validateEmail(v)
      setErrors(prev => {
        const next = { ...prev }
        if (msg) next.email = msg
        else delete next.email
        return next
      })
    }
    const at = v.indexOf('@')
    setEmailOpen(v.length > 0 && at < 0)
    setEmailIndex(0)
  }

  function chooseEmail(s) {
    setEmail(s)
    setEmailOpen(false)
  }

  function onEmailKeyDown(e) {
    if (!emailOpen || emailSuggestions.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setEmailIndex(i => Math.min(i + 1, emailSuggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setEmailIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      chooseEmail(emailSuggestions[emailIndex])
    }
  }

  return (
    <div className={styles.block}>
      <ul className={styles.regList}>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>用 户 名：</div>
          <div className={styles.inputCol}>
            <input className={`${styles.inptxt} ${errors.userName ? vcss.inputError : ''}`} value={userName} onChange={e=>updateUserName(e.target.value)} onBlur={validateUserNameNow} placeholder="用户名设置成功后不可修改" />
            {errors.userName && (
              <div className={styles.belowError}>
                <span className={styles.errorIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <circle cx="12" cy="12" r="10" fill="#ff5a5a"></circle>
                    <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2"></path>
                  </svg>
                </span>
                <span className={vcss.error}>{errors.userName}</span>
              </div>
            )}
          </div>
          <div className={styles.tipsCol}><span className={vcss.okIcon} style={{display: errors.userName?'none':'inline-block'}}></span>6-30位字母、数字或“_”,字母开头</div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>登录密码：</div>
          <div className={styles.inputCol}>
            <input type="password" className={`${styles.inptxt} ${errors.password ? vcss.inputError : ''}`} value={password} onChange={e=>updatePasswordNow(e.target.value)} onBlur={validatePasswordNow} placeholder="6-20位字母、数字或符号" />
            {errors.password && (
              <div className={styles.belowError}>
                <span className={styles.errorIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <circle cx="12" cy="12" r="10" fill="#ff5a5a"></circle>
                    <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2"></path>
                  </svg>
                </span>
                <span className={vcss.error}>{errors.password}</span>
              </div>
            )}
          </div>
          <div className={styles.tipsCol}>
            <div className={`${styles.rank} ${rankCls}`}>
              <span className={vcss.s1}></span>
              <span className={vcss.s2}></span>
              <span className={vcss.s3}></span>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>确认密码：</div>
          <div className={styles.inputCol}>
            <input type="password" className={`${styles.inptxt} ${errors.confirm ? vcss.inputError : ''}`} value={confirm} onChange={e=>updateConfirmNow(e.target.value)} onBlur={validateConfirmNow} placeholder="再次输入您的登录密码" />
            {errors.confirm && (<div className={styles.belowError}>
              <span className={styles.errorIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="10" fill="#ff5a5a"></circle>
                  <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2"></path>
                </svg>
              </span>
              <span className={vcss.error}>{errors.confirm}</span>
            </div>)}
          </div>
          <div className={styles.tipsCol}></div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>证件类型：</div>
          <div className={styles.inputCol}>
            <select className={styles.w200sel} value={cardType} onChange={e=>setCardType(e.target.value)}>
              <option value="1">居民身份证</option>
              <option value="K">港澳居民居住证</option>
              <option value="P">台湾居民居住证</option>
              <option value="H">外国人永久居留身份证</option>
              <option value="A">外国护照</option>
              <option value="B">中国护照</option>
              <option value="C">港澳居民来往内地通行证</option>
              <option value="G">台湾居民来往大陆通行证</option>
            </select>
          </div>
          <div className={styles.tipsCol}></div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>姓   名：</div>
          <div className={styles.inputCol}>
            <input className={`${styles.inptxt} ${errors.name ? vcss.inputError : ''}`} value={name} onChange={e=>setName(e.target.value)} placeholder="请输入姓名" />
          </div>
          <div className={styles.tipsCol}><NameRulePopover /> {errors.name && (<div className={vcss.error}>{errors.name}</div>)}（用于身份核验，请正确填写）</div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>证件号码：</div>
          <div className={`${styles.inputCol} ${styles.idWrap}`}>
            {cardType === '1' && (
              <div className={`${styles.idPreview} ${ (idFocused ? styles.idPreviewShow : '')}`}>{formatIdGroups(idNo)}</div>
            )}
            <input
              className={`${styles.inptxt} ${errors.idNo ? vcss.inputError : ''}`}
              value={idNo}
              onChange={e=>updateIdNow(e.target.value)}
              onFocus={()=>setIdFocused(true)}
              onBlur={()=>{ setIdFocused(false); validateIdNow() }}
              placeholder="请输入您的证件号码"
              maxLength={cardType === '1' ? 18 : undefined}
            />
            {errors.idNo && (
              <div className={styles.belowError}>
                <span className={styles.errorIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <circle cx="12" cy="12" r="10" fill="#ff5a5a"></circle>
                    <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2"></path>
                  </svg>
                </span>
                <span className={vcss.error}>{errors.idNo}</span>
              </div>
            )}
          </div>
          <div className={styles.tipsCol} style={{color:'#FF7F00'}}>{errors.idNo ? null : '（用于身份核验，请正确填写）'}</div>
        </li>
        
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>优惠（待）类型：</div>
          <div className={styles.inputCol}>
            <select className={styles.w200sel} value={passengerType} onChange={e=>setPassengerType(e.target.value)}>
              <option value="ADULT">成人</option>
              <option value="STUDENT">学生</option>
            </select>
          </div>
          <div className={styles.tipsCol}></div>
        </li>
        <li className={styles.itemDivider}></li>
        <li className={styles.item}>
          <div className={styles.labelCol}>邮    箱：</div>
          <div className={`${styles.inputCol} ${styles.emailWrap}`}>
            <input
              className={`${styles.inptxt} ${errors.email ? vcss.inputError : ''}`}
              value={email}
              onChange={e=>handleEmailChange(e.target.value)}
              onFocus={()=>setEmailOpen(email.length>0 && email.indexOf('@')<0)}
              onBlur={()=>setTimeout(()=>setEmailOpen(false), 120)}
              onKeyDown={onEmailKeyDown}
              placeholder="请正确填写邮箱地址"
              aria-autocomplete="list"
              aria-expanded={emailOpen}
            />
            {emailOpen && emailSuggestions.length>0 && (
              <ul className={styles.emailSuggest} role="listbox" onMouseDown={e=>e.preventDefault()}>
                {emailSuggestions.map((s,i)=> (
                  <li key={s} role="option" aria-selected={i===emailIndex} className={`${styles.emailItem} ${i===emailIndex?styles.emailItemActive:''}`} onClick={()=>chooseEmail(s)}>{s}</li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.tipsCol}>{errors.email && (<div className={vcss.error}>{errors.email}</div>)}</div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>手机号码：</div>
          <div className={styles.inputCol}>
            <select className={styles.w200sel} value={mobileCode} onChange={e=>setMobileCode(e.target.value)} style={{width:108}}>
              <option value="86">+86  中国</option>
              <option value="852">+852  中国香港</option>
              <option value="853">+853  中国澳门</option>
              <option value="886">+886  中国台湾</option>
            </select>
            <input className={`${styles.inptxt} ${errors.mobileNo ? vcss.inputError : ''}`} value={mobileNo} onChange={e=>setMobileNo(e.target.value)} placeholder="手机号码" style={{width:84, marginLeft:8}} />
          </div>
          <div className={styles.tipsCol} style={{color:'#FF7F00'}}>请正确填写手机号码，稍后将向该手机号码发送短信验证码</div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol} style={{width:180}}>&nbsp;</div>
          <div className={styles.inputCol}>
            <div className={styles.agreeline}>
              <input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)} />
              <span>我已阅读并同意遵守</span>
              <a href="#">《中国铁路客户服务中心网站服务条款》</a>
              <a href="#">《隐私权政策》</a>
            </div>
            {errors.agree && (<div className={vcss.error}>{errors.agree}</div>)}
          </div>
          <div className={styles.tipsCol}></div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol}></div>
          <div className={styles.inputCol}><a className={styles.btn} onClick={handleNext}>下一步</a></div>
          <div className={styles.tipsCol}></div>
        </li>
      </ul>
      <PassportTips type={cardType} />
      <StudentTypeHint show={passengerType==='STUDENT'} />
    </div>
  )
}
