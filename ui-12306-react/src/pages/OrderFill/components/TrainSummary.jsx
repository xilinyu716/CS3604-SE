import styles from './TrainSummary.module.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function TrainSummary() {
  const location = useLocation()
  const s = location.state || {}
  const t = s.train || {}
  const q = s.query || {}
  const code = t.code || 'G1'
  const from = t.from || '出发站'
  const to = t.to || '到达站'
  const depart = t.depart || '—'
  const arrive = t.arrive || '—'
  const dateRaw = q.date || '—'
  const date = String(dateRaw).split(' ')[0]
  const week = (() => {
    try { const d = new Date(date); return ['周日','周一','周二','周三','周四','周五','周六'][d.getDay()] } catch { return '' }
  })()
  const seats = t.seats || {}
  const [prices, setPrices] = useState({})
  const seatText = (val) => {
    if (val === undefined || val === null) return '—'
    const s = String(val)
    if (/候补/.test(s)) return '候补'
    if (/无/.test(s)) return '无票'
    if (/有|余|可|充足/.test(s)) return '有票'
    const n = parseInt(s, 10)
    if (!isNaN(n)) return n > 0 ? `${n}张` : '无票'
    return s
  }
  const firstDefined = (obj, keys) => {
    for (const k of keys) {
      if (obj && obj[k] !== undefined && obj[k] !== null) return obj[k]
    }
    return undefined
  }
  const Price = ({ value }) => {
    if (value === undefined || value === null || value === '') return <span>（—）</span>
    const n = Number(value)
    if (!isNaN(n)) return <span>（<span className="txt-price">¥{n.toFixed(1)}元</span>）</span>
    const s = String(value)
    if (s === '—') return <span>（—）</span>
    return <span>（{s}）</span>
  }
  useEffect(() => {
    const qs = new URLSearchParams({ code, from, to, date }).toString()
    const tryFetch = async (url) => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        if (data && (data.code === 0 || data.success === true)) {
          const d = data.data || data.result || {}
          setPrices(d)
          return true
        }
      } catch (e) {
        // ignore
      }
      return false
    }
    ;(async () => {
      if (await tryFetch(`/api/trains/prices?${qs}`)) return
      if (await tryFetch(`/api/train/price?${qs}`)) return
      if (await tryFetch(`/api/prices?${qs}`)) return
      setPrices({})
    })()
  }, [code, from, to, date])
  return (
    <div className={styles.box} aria-label="列车信息">
      <div className={styles.hd}>列车信息（以下票价信息仅供参考）</div>
      <div className={styles.info}>
        <span style={{ fontWeight: 700 }}>{date}（{week}）</span>
        <span className={styles.trainTag}>{code}次</span>
        <span>北京南站</span>
        <span style={{ color:'#666' }}>（{depart}开）</span>
        <span className={styles.sep}><img src="/assets/point2.png" alt="to" /></span>
        <span>上海虹桥</span>
        <span style={{ color:'#666' }}>（{arrive}到）</span>
        <div className={styles.seats}>
          <span>二等座 <Price value={firstDefined(prices, ['second','second_class','二等座'])} /> {seatText(seats.second)}</span>
          <span>商务座 <Price value={firstDefined(prices, ['business','商务座','business_class'])} /> {seatText(seats.business)}</span>
          <span>一等座 <Price value={firstDefined(prices, ['first','first_class','一等座'])} /> {seatText(seats.first)}</span>
          <span>无座 <Price value={firstDefined(prices, ['noSeat','no_seat','无座','hardSeat'])} /> {seatText(firstDefined(seats, ['noSeat','hardSeat']))}</span>
        </div>
      </div>
      <div className={styles.foot}>* 显示的价格均为实际活动折扣后票价，供您参考，<a href="#" onClick={(e)=>{e.preventDefault(); window.open('https://www.12306.cn/', '_blank')}}>查看公布票价</a>。具体票价以您确认支付时实际购买的辅别票价为准。</div>
    </div>
  )
}
