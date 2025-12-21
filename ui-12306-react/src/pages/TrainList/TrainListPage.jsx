import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './TrainListPage.module.css'
import TrainSearchForm from './components/TrainSearchForm'
import DateQuickBar from './components/DateQuickBar'
import FilterPanel from './components/FilterPanel'
import TrainTable from './components/TrainTable'

export default function TrainListPage() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.notice} aria-label="温馨提示" role="complementary">
          <strong className={styles.noticeLabel}>温馨提示：</strong>
          <div className={styles.noticeText}>列车运行图调整，12月30日之后车票预售期调整为30天，12月29日及之前的车票正常发售。</div>
        </div>
        <TrainSearchForm />
        <DateQuickBar />
        <FilterPanel />
        <TrainTable />
      </div>
      <Footer />
    </div>
  )
}
