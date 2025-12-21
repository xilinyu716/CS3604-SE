import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import GoToTop from '../../../components/GoToTop/GoToTop'
import CenterLayout from './components/CenterLayout'
import CenterSidebar from './components/CenterSidebar'
import Breadcrumb from './components/Breadcrumb'
import BasicInfoSection from './sections/BasicInfoSection'
import ContactSection from './sections/ContactSection'
import ExtraInfoSection from './sections/ExtraInfoSection'
import StudentQualification from './sections/StudentQualification'
import PassportTips from './sections/PassportTips'
import styles from './styles/ProfilePage.module.css'
import { useState } from 'react'
import MaskLoading from './components/MaskLoading'
import data from './mock/profileData'

export default function ProfilePage() {
  const [saving, setSaving] = useState(false)
  return (
    <div className={styles.page}>
      <Header />
      <CenterLayout>
        <Breadcrumb items={['个人中心', '查看个人信息']} />
        <div className={styles.centerBox}>
          <div className={styles.centerSide}>
            <CenterSidebar activeKey="profile" />
          </div>
          <div className={styles.centerMain}>
            <BasicInfoSection initial={data.basic} onSaving={() => { setSaving(true); setTimeout(() => setSaving(false), 800) }} />
            <div className={styles.lineDashed} />
            <ContactSection initial={data.contact} onSaving={() => { setSaving(true); setTimeout(() => setSaving(false), 800) }} />
            <div className={styles.lineDashed} />
            <ExtraInfoSection initial={data.extra} onSaving={() => { setSaving(true); setTimeout(() => setSaving(false), 800) }} />
            <StudentQualification initial={data.student} />
            <PassportTips />
          </div>
        </div>
      </CenterLayout>
      <Footer />
      <GoToTop />
      <MaskLoading visible={saving} />
    </div>
  )
}
