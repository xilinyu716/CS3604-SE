import styles from './LoginBanner.module.css'

const slides = [
  '/assets/abanner01.jpg',
  '/assets/abanner02.jpg'
]

export default function LoginBanner() {
  return (
    <div className={styles.slide}>
      <div className={styles.bd}>
        {slides.map((src, i) => (
          <div key={i} className={styles.item} style={{ backgroundImage: `url(${src})` }}>
            <a href="#" aria-label="登录页轮播" />
          </div>
        ))}
      </div>
      <div className={styles.hd}><ul><li className={styles.on}>1</li><li>2</li></ul></div>
    </div>
  )
}
