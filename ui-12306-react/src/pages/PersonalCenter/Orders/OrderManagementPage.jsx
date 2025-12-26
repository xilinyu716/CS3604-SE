import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import GoToTop from '../../../components/GoToTop/GoToTop'
import styles from './OrderManagementPage.module.css'
import OrdersBreadcrumb from './components/OrdersBreadcrumb'
import CenterMenuOrders from './components/CenterMenuOrders'
import OrdersTabs from './components/OrdersTabs'
import QueueStatus from './components/QueueStatus'
import QueueFail from './components/QueueFail'
import TicketFail from './components/TicketFail'
import UnfinishedEmpty from './components/UnfinishedEmpty'
import UnfinishedList from './components/UnfinishedList'
import NotTravelSearch from './components/NotTravelSearch'
import NotTravelList from './components/NotTravelList'
import HistorySearch from './components/HistorySearch'
import HistoryList from './components/HistoryList'
import { useState, useEffect } from 'react'

export default function OrderManagementPage() {
  const [orders, setOrders] = useState({ unfinished: [], nottrip: [], history: [] })

  const fetchOrders = () => {
    fetch('/api/user/orders')
      .then(res => res.json())
      .then(res => {
        if (res.code === 0 && res.data) {
          setOrders(res.data)
        }
      })
      .catch(console.error)
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  return (
    <div className={styles.page}>
      <Header />
      <div className={`wrapper content ${styles.content}`}>
        <OrdersBreadcrumb />
        <div className={styles.centerBox}>
          <CenterMenuOrders />
          <div className={styles.mainPlaceholder}>
            <OrdersTabs
              children={{
                unfinished: (
                  <div>
                    {orders.unfinished && orders.unfinished.length > 0 ? 
                      <UnfinishedList orders={orders.unfinished} /> : <UnfinishedEmpty />}
                  </div>
                ),
                nottrip: (
                  <div>
                    <NotTravelSearch onSearch={() => {}} />
                    <NotTravelList orders={orders.nottrip || []} onRefresh={fetchOrders} />
                  </div>
                ),
                history: (
                  <div>
                    <HistorySearch onSearch={() => {}} />
                    <HistoryList orders={orders.history || []} />
                  </div>
                ),
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
      <GoToTop />
    </div>
  )
}
