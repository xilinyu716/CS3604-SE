import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './TrainListPage.module.css'
import TrainSearchForm from './components/TrainSearchForm'
import DateQuickBar from './components/DateQuickBar'
import FilterPanel from './components/FilterPanel'
import TrainTable from './components/TrainTable'
import { useState, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export default function TrainListPage() {
  const location = useLocation()
  const [trains, setTrains] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  // Filter states
  const [filters, setFilters] = useState({
    startTime: '00002400',
    trainTypes: {},
    departStations: {},
    arriveStations: {},
    seatTypes: {}
  })

  const fetchTrains = async (params) => {
    setLoading(true)
    setError(null)
    try {
      const query = new URLSearchParams(params).toString()
      const res = await fetch(`/api/trains/query?${query}`)
      const data = await res.json()
      if (data.code === 0) {
        setTrains(data.data)
      } else {
        setError(data.msg || '查询失败')
      }
    } catch (err) {
      console.error(err)
      setError('网络请求失败')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Initial fetch if state exists
    const state = location.state || {}
    if (state.from && state.to && state.date) {
      fetchTrains({ from: state.from, to: state.to, date: state.date })
    } else {
      // Default fetch if no params (mock)
      fetchTrains({ from: '北京', to: '上海', date: '2025-11-24' })
    }
  }, [location.state])

  const handleSearch = (newParams) => {
    fetchTrains(newParams)
  }

  // Derived filtered trains
  const filteredTrains = useMemo(() => {
    if (!trains) return []
    return trains.filter(t => {
      // 1. Time Filter
      if (filters.startTime !== '00002400') {
        const startH = parseInt(filters.startTime.substring(0, 2))
        const startM = parseInt(filters.startTime.substring(2, 4))
        const endH = parseInt(filters.startTime.substring(4, 6))
        const endM = parseInt(filters.startTime.substring(6, 8))
        
        const [h, m] = t.depart.split(':').map(Number)
        const timeVal = h * 60 + m
        const startVal = startH * 60 + startM
        const endVal = endH * 60 + endM
        
        if (timeVal < startVal || timeVal >= endVal) return false
      }

      // 2. Train Type Filter
      const activeTypes = Object.keys(filters.trainTypes).filter(k => filters.trainTypes[k])
      if (activeTypes.length > 0) {
        // Check if train code starts with any active type (G, D, Z, etc.)
        // For special types like '复' (Fuxing), we check remark
        const typeMatch = activeTypes.some(type => {
           if (type === '复') return t.remark && t.remark.includes('复兴号')
           if (type === '智') return t.remark && t.remark.includes('智能')
           if (type === 'QT') return !['G','D','Z','T','K'].includes(t.code[0])
           return t.code.startsWith(type)
        })
        if (!typeMatch) return false
      }

      // 3. Depart Station Filter
      const activeDepart = Object.keys(filters.departStations).filter(k => filters.departStations[k])
      if (activeDepart.length > 0) {
        if (!activeDepart.includes(t.from)) return false
      }

      // 4. Arrive Station Filter
      const activeArrive = Object.keys(filters.arriveStations).filter(k => filters.arriveStations[k])
      if (activeArrive.length > 0) {
        if (!activeArrive.includes(t.to)) return false
      }

      // 5. Seat Types Filter
      const activeSeats = Object.keys(filters.seatTypes).filter(k => filters.seatTypes[k])
      if (activeSeats.length > 0) {
        const seatAvailable = (val) => {
          if (val === undefined || val === null) return false
          if (typeof val === 'number') return val > 0
          const s = String(val).trim()
          if (s === '' || s === '-' || s === '—') return false
          if (/无|不可|停|候补/.test(s)) return false
          if (/有|余|可|充足/.test(s)) return true
          const n = parseInt(s, 10)
          if (!isNaN(n)) return n > 0
          return s.length > 0
        }
        const matchSeat = activeSeats.some(k => seatAvailable(t.seats?.[k]))
        if (!matchSeat) return false
      }

      return true
    })
  }, [trains, filters])

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.notice} aria-label="温馨提示" role="complementary">
          <strong className={styles.noticeLabel}>温馨提示：</strong>
          <div className={styles.noticeText}>列车运行图调整，12月30日之后车票预售期调整为30天，12月29日及之前的车票正常发售。</div>
        </div>
        <TrainSearchForm onSearch={handleSearch} />
        <DateQuickBar />
        <FilterPanel filters={filters} onFilterChange={setFilters} trains={trains} />
        <TrainTable data={filteredTrains} loading={loading} error={error} />
      </div>
      <Footer />
    </div>
  )
}
