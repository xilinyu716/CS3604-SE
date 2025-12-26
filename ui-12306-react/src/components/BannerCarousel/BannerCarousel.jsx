import { useEffect, useState, useRef } from 'react'
// 使用原始页面类名

const slides = [
  { url: '/assets/banner20201223.jpg', link: '#' },
  { url: '/assets/banner20200707.jpg', link: '#' },
  { url: '/assets/banner0619.jpg', link: '#' },
  { url: '/assets/banner26.jpg', link: '#' },
  { url: '/assets/banner10.jpg', link: '#' },
  { url: '/assets/banner12.jpg', link: '#' },
]

export default function BannerCarousel() {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => setIndex(i => (i + 1) % slides.length), 5000)
    return () => clearInterval(timer.current)
  }, [])

  return (
    <div className="fullSlide">
      <div className="bd" style={{ position: 'relative', height: 450, overflow: 'hidden' }}>
        <ul
          className="sowingMap"
          style={{
            listStyle: 'none', margin: 0, padding: 0,
            display: 'flex', width: `${slides.length * 100}%`,
            transform: `translateX(-${index * (100 / slides.length)}%)`,
            transition: 'transform .6s ease'
          }}
        >
          {slides.map((s, i) => (
            <li
              key={i}
              style={{
                flex: `0 0 ${100 / slides.length}%`, height: 450,
                background: `url(${s.url}) center center / cover no-repeat`
              }}
            >
              <a href={s.link} target={s.link?.startsWith('http') ? '_blank' : '_self'}></a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hd" style={{ zIndex: 200 }}>
        <ul>
          {slides.map((_, i) => (
            <li key={i} className={i === index ? 'on' : ''} onClick={() => setIndex(i)}></li>
          ))}
        </ul>
      </div>
    </div>
  )
}
