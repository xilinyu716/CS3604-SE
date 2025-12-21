import styles from './PassportTips.module.css'

export default function PassportTips({ type }) {
  if (!type) return null
  const items = getItems(type)
  if (!items.length) return null
  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {items.map(it => (
          <div key={it.t} className={styles.item}>
            <div className={styles.tit}>{it.t}</div>
            <img className={styles.img} src={it.src} alt={it.t} onError={(e)=>{e.currentTarget.style.display='none'}} />
          </div>
        ))}
      </div>
    </div>
  )
}

function getItems(type) {
  if (type === 'K') return [
    { t: '港澳居民来往内地通行证示例（1999版）', src: '/assets/passport01.jpg' },
    { t: '港澳居民来往内地通行证示例（2012版）', src: '/assets/passport02.jpg' },
  ]
  if (type === 'P') return [
    { t: '台湾居民来往大陆通行证示例（2002版）', src: '/assets/passport03.png' },
    { t: '台湾居民来往大陆通行证示例（2015版）', src: '/assets/passport04.jpg' },
  ]
  if (type === 'H') return [
    { t: '外国人永久居留身份证示例（2017版）', src: '/assets/passport06.jpg' },
    { t: '外国人永久居留身份证示例（2023版）', src: '/assets/newpassport06.jpg' },
  ]
  if (type === 'A') return [
    { t: '外国护照', src: '/assets/passport_foregin1.jpg' },
    { t: '外国护照', src: '/assets/passport_foregin2.jpg' },
  ]
  if (type === 'G') return [
    { t: '港澳台居民居住证', src: '/assets/passport07.jpg' },
  ]
  return []
}
