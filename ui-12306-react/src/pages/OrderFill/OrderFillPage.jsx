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

export default function OrderFillPage() {
  return (
    <div className={styles.page}>
      <Header />
      <div className="wrapper">
        <StepBar />
        <TrainSummary />
        <PassengerSection />
        <ContactSection />
        <Preferences />
        <SubmitBar />
      </div>
      <Footer />
      <FixedRightMenu />
      <GoToTop />
    </div>
  )
}

