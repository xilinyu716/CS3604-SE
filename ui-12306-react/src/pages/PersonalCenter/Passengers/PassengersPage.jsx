import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import GoToTop from '../../../components/GoToTop/GoToTop'
import Breadcrumb from './components/Breadcrumb'
import CenterMenu from './components/CenterMenu'
import ContactsPanel from './components/ContactsPanel/ContactsPanel'
import styles from './PassengersPage.module.css'

export default function PassengersPage() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={`wrapper content`}>
        <Breadcrumb />
        <div className={`center-box`}>
          <CenterMenu />
          <ContactsPanel />
        </div>
      </div>
      <Footer />
      <GoToTop />
    </div>
  )
}

