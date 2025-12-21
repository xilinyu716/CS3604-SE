import { useEffect, useState } from 'react'
// 使用原始页面类名

export default function GoToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className={`gototop js-top`} style={{ display: show ? 'block' : 'none' }}>
      <a href="#" className={`js-gotop`} onClick={(e)=>{ e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} title="返回顶部">
        <i className={`icon icon-gotop`}></i>
      </a>
    </div>
  )
}
