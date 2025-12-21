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
import ordersData from './mock/orders.json'

export default function OrderManagementPage() {
  const sampleOrders = []
  const notTripOrders = ordersData.nottrip
  const historyOrders = ordersData.history
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
                    <UnfinishedEmpty />
                    <UnfinishedList orders={sampleOrders} />
                  </div>
                ),
                nottrip: (
                  <div>
                    <NotTravelSearch onSearch={() => {}} />
                    <NotTravelList orders={notTripOrders} />
                  </div>
                ),
                history: (
                  <div>
                    <HistorySearch onSearch={() => {}} />
                    <HistoryList orders={historyOrders} />
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
