import { useEffect, useMemo, useState } from 'react'
import vcss from '../../../styles/validation.module.css'
import styles from './RegisterForm.module.css'
import { validateUsername, passwordStrength, validatePassword, validateConfirmPassword, validateIdNumber, deriveBirthdayFromId, validateName, validateEmail, validateMobile } from '../../../utils/validation'
import NameRulePopover from './NameRulePopover'
import PassportTips from './PassportTips'
import StudentTypeHint from './StudentTypeHint'

const emailDomains = ['qq.com','163.com','126.com','gmail.com','outlook.com']

export default function RegisterForm({ onNext }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [cardType, setCardType] = useState('1')
  const [name, setName] = useState('')
  const [idNo, setIdNo] = useState('')
  const [bornDate, setBornDate] = useState('')
  const [sex, setSex] = useState('')
  const [nation, setNation] = useState('CHN')
  const [passengerType, setPassengerType] = useState('ADULT')
  const [email, setEmail] = useState('')
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

  return (
    <div className={styles.block}>
      <ul className={styles.regList}>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>用 户 名：</div>
          <div className={styles.inputCol}>
            <input className={`${styles.inptxt} ${errors.userName ? vcss.inputError : ''}`} value={userName} onChange={e=>setUserName(e.target.value)} placeholder="用户名设置成功后不可修改" />
          </div>
          <div className={styles.tipsCol}><span className={vcss.okIcon} style={{display: errors.userName?'none':'inline-block'}}></span>6-30位字母、数字或“_”,字母开头{errors.userName && (<div className={vcss.error}>{errors.userName}</div>)} </div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>登录密码：</div>
          <div className={styles.inputCol}>
            <input type="password" className={`${styles.inptxt} ${errors.password ? vcss.inputError : ''}`} value={password} onChange={e=>setPassword(e.target.value)} placeholder="6-20位字母、数字或符号" />
          </div>
          <div className={styles.tipsCol}>
            <div className={`${styles.rank} ${rankCls}`}>
              <span className="s1"></span>
              <span className="s2"></span>
              <span className="s3"></span>
            </div>
            {errors.password && (<div className={vcss.error}>{errors.password}</div>)}
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>确认密码：</div>
          <div className={styles.inputCol}>
            <input type="password" className={`${styles.inptxt} ${errors.confirm ? vcss.inputError : ''}`} value={confirm} onChange={e=>setConfirm(e.target.value)} placeholder="再次输入您的登录密码" />
          </div>
          <div className={styles.tipsCol}>{errors.confirm && (<div className={vcss.error}>{errors.confirm}</div>)}</div>
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
          <div className={styles.inputCol}>
            <input className={`${styles.inptxt} ${errors.idNo ? vcss.inputError : ''}`} value={idNo} onChange={e=>setIdNo(e.target.value)} placeholder="请输入您的证件号码" />
          </div>
          <div className={styles.tipsCol} style={{color:'#FF7F00'}}>{errors.idNo ? (<div className={vcss.error}>{errors.idNo}</div>) : '（用于身份核验，请正确填写）'}</div>
        </li>
        {cardType !== '1' && (
          <li className={styles.item}>
            <div className={styles.labelCol}><span className={styles.required}>*</span>证件有效期截止日期：</div>
            <div className={styles.inputCol}><input className={styles.inptxt} value={bornDate} onChange={e=>setBornDate(e.target.value)} placeholder="YYYY-MM-DD" /></div>
            <div className={styles.tipsCol} style={{color:'#FF7F00'}}>（用于身份核验，请正确填写）</div>
          </li>
        )}
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>出生日期：</div>
          <div className={styles.inputCol}><input className={styles.inptxt} value={bornDate} onChange={e=>setBornDate(e.target.value)} placeholder="YYYY-MM-DD" /></div>
          <div className={styles.tipsCol}></div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>性 别：</div>
          <div className={styles.inputCol}>
            <label style={{marginRight:25}}><input type="radio" name="sex" checked={sex==='M'} onChange={()=>setSex('M')} /> 男</label>
            <label><input type="radio" name="sex" checked={sex==='F'} onChange={()=>setSex('F')} /> 女</label>
          </div>
          <div className={styles.tipsCol}></div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>国家/地区：</div>
          <div className={styles.inputCol}>
            <select className={styles.w200sel} value={nation} onChange={e=>setNation(e.target.value)}>
              <option value="CHN">中国China</option>
              <option value="USA">美国USA</option>
              <option value="GBR">英国UK</option>
              <option value="JPN">日本Japan</option>
            </select>
          </div>
          <div className={styles.tipsCol}></div>
        </li>
        <li className={styles.item}>
          <div className={styles.labelCol}><span className={styles.required}>*</span>旅客类型：</div>
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
          <div className={styles.inputCol}>
            <input className={`${styles.inptxt} ${errors.email ? vcss.inputError : ''}`} value={email} onChange={e=>setEmail(e.target.value)} placeholder="请正确填写邮箱地址" />
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
