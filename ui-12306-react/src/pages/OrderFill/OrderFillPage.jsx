import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FixedRightMenu from '../../components/FixedRightMenu/FixedRightMenu'
import GoToTop from '../../components/GoToTop/GoToTop'
import TrainSummary from './components/TrainSummary'
import PassengerSection from './components/PassengerSection'
import ContactSection from './components/ContactSection'
import Preferences from './components/Preferences'
import SubmitBar from './components/SubmitBar'
import styles from './OrderFillPage.module.css'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function OrderFillPage() {
  const [passengers, setPassengers] = useState([])
  const [selectedPassengers, setSelectedPassengers] = useState([]) // Array of objects with passenger info + ticketType + seatType
  const location = useLocation()
  const navigate = useNavigate()
  
  // Calculate price based on seat selection
  // Mock logic: G train base 500, D train 300, etc.
  // In real app, price comes from query API or pre-order check
  const trainCode = location.state?.train?.code || ''
  const basePrice = trainCode.startsWith('G') ? 553 : (trainCode.startsWith('D') ? 300 : 150)
  
  const totalPrice = selectedPassengers.reduce((acc, p) => {
    // Child ticket 50%? For simplicity, full price or minor discount logic if needed
    // Let's say Child is half price
    const ratio = p.ticketType === '儿童' ? 0.5 : 1
    return acc + (basePrice * ratio)
  }, 0)

  useEffect(() => {
    // Fetch passengers
    fetch('/api/user/passengers')
      .then(res => res.json())
      .then(res => {
        if (res.code === 0) {
          setPassengers(res.data)
        }
      })
      .catch(console.error)
  }, [])

  const handlePassengerCheck = (passenger, checked) => {
    if (checked) {
      // Add to selected with default types
      setSelectedPassengers(prev => [...prev, { 
        ...passenger, 
        ticketType: passenger.passenger_type_name || '成人', 
        seatType: '二等座' // Default
      }])
    } else {
      // Remove
      setSelectedPassengers(prev => prev.filter(p => p.passenger_id_no !== passenger.passenger_id_no))
    }
  }

  const handleUpdatePassenger = (idNo, field, value) => {
    setSelectedPassengers(prev => prev.map(p => {
      if (p.passenger_id_no === idNo) {
        return { ...p, [field]: value }
      }
      return p
    }))
  }

  const handleSubmit = async () => {
    if (selectedPassengers.length === 0) {
      alert('请至少选择一位乘车人')
      return
    }
    try {
      const res = await fetch('/api/order/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          train: location.state?.train,
          passengers: selectedPassengers,
          price: totalPrice
        })
      })
      const data = await res.json()
      if (data.code === 0) {
        // Navigate to Pay or Success
        alert(`订单提交成功！订单号：${data.data.orderId}\n需支付：${data.data.payMoney}元`)
        navigate('/center/orders') // Redirect to order center for now
      } else {
        alert(data.msg || '提交失败')
      }
    } catch (err) {
      console.error(err)
      alert('网络请求失败')
    }
  }

  return (
    <div className={styles.page}>
      <Header />
      <div className="wrapper" style={{ paddingBottom: 80 }}> {/* Add padding for fixed footer */}
        <TrainSummary />
        <PassengerSection 
          passengers={passengers} 
          selectedPassengers={selectedPassengers}
          onCheck={handlePassengerCheck}
          onUpdate={handleUpdatePassenger}
        />
        <SubmitBar price={totalPrice} onSubmit={handleSubmit} count={selectedPassengers.length} onPrev={()=>navigate(-1)} />
        <div className={styles.warmTips} aria-label="温馨提示">
          <div className={styles.warmTipsHd}>温馨提示：<div></div></div>
          <div className={styles.warmTipsBd}>
            <p>1. 一张有效身份证件同一乘车日期同一车次只能购买一张车票，高铁动卧列车除外。改签或变更到站后车票的乘车日期在春运期间，如再办理退票将按票面价格20%核收退票费。请合理安排行程，更多改签规则请查看《退改说明》。</p>
            <p>2. 购买儿童票时，乘车儿童有有效身份证件的，请填写本人有效身份证件信息。自2023年1月1日起，每一名持票成年人旅客可免费携带一名未满6周岁且不单独占用席位的儿童乘车，超过一名时，超过人数应购买儿童优惠票。免费儿童可以在购票成功后添加。</p>
            <p>3. 购买残疾军人（伤残警察）优待票的，须在购票后、开车前办理换票手续方可进站乘车。换票时，不符合规定的减价优待条件，没有有效“中华人民共和国残疾军人证”或“中华人民共和国伤残人民警察证”的，不予换票，所购车票按规定办理退票手续。</p>
            <p>4. 一天内3次申请车票成功后取消订单（包含无座票时取消5次计为取消1次），当日将不能在12306继续购票。</p>
            <p>5. 购买铁路乘意险的注册用户年龄须在18周岁以上，使用非中国居民身份证注册的用户如购买铁路乘意险，须在我的12306——个人信息如实填写“出生日期”。</p>
            <p>6. 父母为未成年子女投保，须在我的乘车人登记未成年子女的有效身份证件信息。</p>
            <p>7. 未尽事宜详见《铁路旅客运输规程》等有关规定和车站公告。</p>
          </div>
        </div>
      </div>
      <Footer />
      <FixedRightMenu />
      <GoToTop />
    </div>
  )
}
