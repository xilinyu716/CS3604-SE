import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import GoToTop from '../../../components/GoToTop/GoToTop'
import Breadcrumb from './components/Breadcrumb'
import CenterMenuOrders from '../Orders/components/CenterMenuOrders'
import ContactsPanel from './components/ContactsPanel/ContactsPanel'
import styles from './PassengersPage.module.css'
import CenterLayout from '../Profile/components/CenterLayout'

export default function PassengersPage() {
  return (
    <div className={styles.page}>
      <Header />
      <CenterLayout>
        <Breadcrumb />
        <div className={styles.centerBox}>
          <div className={styles.centerSide}><CenterMenuOrders activeGroup="common" activeItem="passengers" /></div>
          <ContactsPanel />
        </div>
      </CenterLayout>
      <Footer />
      <GoToTop />
    </div>
  )
}
