import { useState } from 'react'
import AccountLogin from './account/AccountLogin'
import QrLogin from './qr/QrLogin'
import styles from './LoginBox.module.css'

export default function LoginBox() {
  const [tab, setTab] = useState('account')
  return (
    <div className={styles.box}>
      <ul className={styles.hd}>
        <li className={`${styles.tab} ${tab === 'account' ? styles.active : ''}`}>
          <a onClick={() => setTab('account')}>账号登录</a>
        </li>
        <li className={`${styles.tab} ${styles.last} ${tab === 'qr' ? styles.active : ''}`}>
          <a onClick={() => setTab('qr')}>扫码登录</a>
        </li>
      </ul>
      <div className={styles.bd}>
        {tab === 'account' ? <AccountLogin /> : <QrLogin />}
      </div>
      <div className={styles.ft}>
        <p>铁路12306每日5:00至次日1:00（周二为5:00至24:00）提供购票、改签、变更到站业务办理， 全天均可办理退票等其他服务。</p>
      </div>
    </div>
  )
}
