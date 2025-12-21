import { useEffect, useState, useRef } from 'react'
// 使用原始页面类名

const slides = [
  { url: '/assets/abanner01.jpg', link: '#' },
  { url: '/assets/abanner02.jpg', link: '#' },
  { url: '/assets/abanner05.jpg', link: '#' },
  { url: '/assets/abanner06.jpg', link: '#' },
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
      <div className="bd" style={{ position: 'relative', height: 450 }}>
        <ul className="sowingMap" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {slides.map((s, i) => (
            <li
              key={i}
              style={{ background: `url(${s.url}) center center no-repeat`, position: 'absolute', inset: 0, height: 450, opacity: i===index?1:0, transition: 'opacity .6s' }}
            >
              <a href={s.link} target={s.link?.startsWith('http') ? '_blank' : '_self'}></a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hd" style={{ zIndex: 200 }}>
        <ul>
          {slides.map((_, i) => (
            <li key={i} className={i === index ? 'on' : ''} onClick={() => setIndex(i)}>
              {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
