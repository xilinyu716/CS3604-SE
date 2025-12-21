import styles from '../styles/PassportTips.module.css'

const items = [
  { key: 'gat', title: '港澳通行证示例', img: '/assets/personal/profile/person01.jpg' },
  { key: 'taiwan', title: '台湾通行证示例', img: '/assets/personal/profile/person02.jpg' },
  { key: 'work', title: '工作证示例', img: '/assets/personal/profile/person03.jpg' }
]

export default function PassportTips() {
  return (
    <div className={styles.tips}>
      {items.map(i => (
        <div key={i.key} className={styles.item}>
          <div className={styles.tit}>{i.title}</div>
          <div className={styles.pic}>
            <img src={i.img} alt={i.title} />
          </div>
        </div>
      ))}
    </div>
  )
}

