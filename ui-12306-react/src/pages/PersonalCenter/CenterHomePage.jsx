import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import GoToTop from '../../components/GoToTop/GoToTop'
import CenterMenuOrders from './Orders/components/CenterMenuOrders'

export default function CenterHomePage() {
  return (
    <div>
      <Header />
      <div className={`wrapper content`}>
        <div className={`breadcrumb`}>当前位置：
          <span className="active">个人中心</span>
        </div>
        <div className={`center-box`}>
          <CenterMenuOrders activeGroup="overview" />
          <div className={`center-main`}>
            <div className={`panel-border`}>
              <div className={`order-panel`}>
                <div style={{ padding: 24, textAlign: 'center', color: '#666' }}>请选择左侧功能</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <GoToTop />
    </div>
  )
}
