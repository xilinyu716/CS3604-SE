import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FixedRightMenu from '../../components/FixedRightMenu/FixedRightMenu'
import GoToTop from '../../components/GoToTop/GoToTop'
import StepBar from './components/StepBar'
import RegisterForm from './components/RegisterForm'
import MobileVerifyModal from './components/MobileVerifyModal'
import styles from './RegisterPage.module.css'

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [verifyOpen, setVerifyOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    document.body.classList.add('page-register')
    return () => {
      document.body.classList.remove('page-register')
    }
  }, [])

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.crumbs}>您现在的位置：<a href="/">客运首页</a>&nbsp;&gt;&nbsp;注册</div>
        <div className={styles.content}>
          <div className={styles.step}><StepBar current={step} /></div>
          <div className={styles.section}>
            {step === 1 && (
              <>
                <div className={styles.title}>账户信息</div>
                <RegisterForm onNext={() => setVerifyOpen(true)} />
              </>
            )}
            {step === 3 && (
              <div className={styles.success}>
                <img src="/assets/login-success.png" alt="注册成功" />
                <div>注册成功</div>
                <div style={{ marginTop: 16 }}>
                  <Link to="/login" className="btn92s">去登录</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <FixedRightMenu />
      <GoToTop />
      <MobileVerifyModal
        open={verifyOpen}
        onClose={() => setVerifyOpen(false)}
        onSuccess={() => {
          setVerifyOpen(false)
          setStep(3)
          const redirect = location.state && location.state.redirect
          setTimeout(() => navigate('/login', { state: redirect ? { redirect } : undefined }), 1500)
        }}
      />
    </div>
  )
}
