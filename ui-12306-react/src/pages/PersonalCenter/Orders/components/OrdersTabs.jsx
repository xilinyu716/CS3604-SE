import { useState } from 'react'
import styles from './OrdersTabs.module.css'

export default function OrdersTabs({ children }) {
  const [active, setActive] = useState('unfinished')
  return (
    <div className={`panel-tab ${styles.panelTab}`}>
      <div className="tab-hd">
        <ul className="tab-hd-list" aria-label="订单类型切换">
          <li className={active === 'unfinished' ? 'active' : ''}>
            <a href="#" onClick={() => setActive('unfinished')}>未完成订单</a>
          </li>
          <li className={active === 'nottrip' ? 'active' : ''}>
            <a href="#" onClick={() => setActive('nottrip')}>未出行订单</a>
          </li>
          <li className={active === 'history' ? 'active' : ''}>
            <a href="#" onClick={() => setActive('history')}>历史订单</a>
          </li>
        </ul>
      </div>
      <div className="tab-bd">
        <div className={styles.tabItem} style={{ display: active === 'unfinished' ? 'block' : 'none' }}>
          {children?.unfinished}
        </div>
        <div className={styles.tabItem} style={{ display: active === 'nottrip' ? 'block' : 'none' }}>
          {children?.nottrip}
        </div>
        <div className={styles.tabItem} style={{ display: active === 'history' ? 'block' : 'none' }}>
          {children?.history}
        </div>
      </div>
    </div>
  )
}
