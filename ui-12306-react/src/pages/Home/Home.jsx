import Header from '../../components/Header/Header'
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import ServiceGrid from '../../components/ServiceGrid/ServiceGrid'
import NewsTabs from '../../components/NewsTabs/NewsTabs'
import Footer from '../../components/Footer/Footer'
import FixedRightMenu from '../../components/FixedRightMenu/FixedRightMenu'
import GoToTop from '../../components/GoToTop/GoToTop'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="section-first">
        <BannerCarousel />
        <SearchPanel />
      </div>
      <div className="wrapper">
        <ServiceGrid />
        <NewsTabs />
      </div>
      <Footer />
      <FixedRightMenu />
      <GoToTop />
    </div>
  )
}
