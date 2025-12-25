import { useEffect, useState } from 'react'
import styles from './LoginBanner.module.css'

const slides = [
  '/assets/banner-login-20200629.jpg',
  '/assets/banner-login-20200924.jpg'
]

export default function LoginBanner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className={styles.slide}>
      <div className={styles.bd} style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((src, i) => (
          <div key={i} className={styles.item} style={{ backgroundImage: `url(${src})` }}>
            <a href="#" aria-label="登录页轮播" />
          </div>
        ))}
      </div>
      <div className={styles.hd}>
        <ul>
          {slides.map((_, i) => (
            <li key={i} className={i === index ? styles.on : ''} onClick={() => setIndex(i)}>•</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
