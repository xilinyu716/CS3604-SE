import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FixedRightMenu from '../../components/FixedRightMenu/FixedRightMenu'
import GoToTop from '../../components/GoToTop/GoToTop'
import StepBar from './components/StepBar'
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
        <StepBar />
        <TrainSummary />
        <PassengerSection 
          passengers={passengers} 
          selectedPassengers={selectedPassengers}
          onCheck={handlePassengerCheck}
          onUpdate={handleUpdatePassenger}
        />
        <ContactSection />
        <Preferences />
        <SubmitBar price={totalPrice} onSubmit={handleSubmit} count={selectedPassengers.length} />
      </div>
      <Footer />
      <FixedRightMenu />
      <GoToTop />
    </div>
  )
}

