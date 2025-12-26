import styles from '../styles/CenterSidebar.module.css'
import { Link } from 'react-router-dom'

const items = [
  { key: 'overview', label: '个人中心', path: '/center/profile' },
  { key: 'orders', label: '订单中心', path: '/center/orders' },
  { key: 'tickets', label: '本人车票', path: '/center/orders' },
  { key: 'member', label: '会员中心', path: '/center/profile' },
  { key: 'profile', label: '个人信息', path: '/center/profile' },
  { key: 'common', label: '常用信息管理', path: '/center/passengers' },
  { key: 'service', label: '温馨服务', path: '/center/profile' },
  { key: 'suggest', label: '投诉和建议', path: '/center/profile' }
]

export default function CenterSidebar({ activeKey }) {
  return (
    <ul className={styles.menu}>
      {items.map(i => (
        <li key={i.key} className={i.key === activeKey ? styles.active : undefined}>
          <Link to={i.path}>{i.label}</Link>
        </li>
      ))}
    </ul>
  )
}

