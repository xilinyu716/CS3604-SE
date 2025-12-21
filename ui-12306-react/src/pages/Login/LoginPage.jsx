import { useEffect } from 'react'
import LoginHeader from './components/LoginHeader'
import LoginBanner from './components/LoginBanner'
import LoginBox from './components/LoginBox'
import LoginFooter from './components/LoginFooter'
import styles from './LoginPage.module.css'

export default function LoginPage() {
  useEffect(() => {
    document.body.classList.add('page-login')
    return () => {
      document.body.classList.remove('page-login')
    }
  }, [])

  return (
    <div className={styles.page}>
      <LoginHeader />
      <div className={styles.panel}>
        <LoginBanner />
        <div className={styles.boxPos}><LoginBox /></div>
      </div>
      <LoginFooter />
    </div>
  )
}
