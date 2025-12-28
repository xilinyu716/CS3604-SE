import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import GoToTop from '../../../components/GoToTop/GoToTop'
import CenterLayout from './components/CenterLayout'
import CenterMenuOrders from '../Orders/components/CenterMenuOrders'
import Breadcrumb from './components/Breadcrumb'
import BasicInfoSection from './sections/BasicInfoSection'
import ContactSection from './sections/ContactSection'
import ExtraInfoSection from './sections/ExtraInfoSection'
import StudentQualification from './sections/StudentQualification'
import PassportTips from './sections/PassportTips'
import styles from './styles/ProfilePage.module.css'
import { useState, useEffect } from 'react'
import MaskLoading from './components/MaskLoading'
import * as auth from '../../../utils/auth'

export default function ProfilePage() {
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const currentUser = auth.currentUser()
      if (!currentUser) return // Or redirect to login

      try {
        const username = typeof currentUser === 'string' ? currentUser : currentUser.username
        const res = await fetch(`/api/user/profile?username=${username}`)
        const data = await res.json()
        if (data.code === 0) {
          setProfile(data.data)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [])

  if (loading) return <div style={{padding: 50, textAlign:'center'}}>加载中...</div>
  if (!profile) return <div style={{padding: 50, textAlign:'center'}}>加载失败</div>

  return (
    <div className={styles.page}>
      <Header />
      <CenterLayout>
        <Breadcrumb items={['个人中心', '查看个人信息']} />
        <div className={styles.centerBox}>
          <div className={styles.centerSide}>
            <CenterMenuOrders activeGroup="profile" activeItem="view" />
          </div>
          <div className={styles.centerMain}>
            <BasicInfoSection initial={profile.basic} onSaving={() => { setSaving(true); setTimeout(() => setSaving(false), 800) }} />
            <div className={styles.lineDashed} />
            <ContactSection initial={profile.contact} onSaving={() => { setSaving(true); setTimeout(() => setSaving(false), 800) }} />
            <div className={styles.lineDashed} />
            <ExtraInfoSection initial={profile.extra} onSaving={() => { setSaving(true); setTimeout(() => setSaving(false), 800) }} />
            <StudentQualification initial={profile.student} />
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
