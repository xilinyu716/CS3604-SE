import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as auth from '../../utils/auth'

function goWithLogin(navigate, path) {
  if (!auth.isLoggedIn()) {
    navigate('/login?redirect=' + encodeURIComponent(path))
  } else {
    navigate(path)
  }
}

export default function Header() {
  const navigate = useNavigate()
  const [user, setUser] = useState(auth.currentUser())

  useEffect(() => {
    const handleAuthChange = () => {
      setUser(auth.currentUser())
    }
    window.addEventListener('auth-change', handleAuthChange)
    return () => window.removeEventListener('auth-change', handleAuthChange)
  }, [])

  const handleLogout = () => {
    auth.logout()
    navigate('/login')
  }

  return (
    <header className="header" role="banner">
      <div className="wrapper">
        <div className="header-con">
          <h1 className="logo">
            <Link to="/" aria-label="中国铁路12306" title="中国铁路12306">
              <img src="/assets/logo@2x.png" alt="中国铁路12306" />
            </Link>
          </h1>
          <div className="header-right">
            <div className="header-search" style={{ width: 380 }}>
              <div className="search-bd" style={{ width: 350 }}>
                <input type="text" className="search-input" placeholder="搜索车票、餐饮、常旅客、相关规章" />
              </div>
              <a className="search-btn" href="#" aria-label="点击搜索" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
              </a>
            </div>
            <ul className="header-menu" role="menubar">
              <li className="menu-item"><a href="#" className="menu-nav-hd">无障碍</a></li>
              <li className="menu-item menu-line">|</li>
              <li className="menu-item"><a href="#" className="menu-nav-hd">敬老版</a></li>
              <li className="menu-item menu-line">|</li>
              <li className="menu-item menu-nav" role="menuitem">
                <a href="#" className="menu-nav-hd item">English
                  <svg className="dropdown-arrow dropdown-arrow-static" width="10" height="10" viewBox="0 0 10 10" style={{ marginLeft: 4, display: 'inline-block' }}>
                    <polygon points="5,7 2,4 8,4" fill="#9ec6ff" />
                  </svg>
                </a>
              <ul className="menu-nav-bd" role="menu">
                  <li><a href="#">简体中文</a></li>
                  <li><a href="#">English</a></li>
                </ul>
              </li>
              <li className="menu-item menu-line">|</li>
              <li className="menu-item menu-nav" role="menuitem">
                <Link to={user ? "/center" : "/login?redirect=%2Fcenter"} className="menu-nav-hd item">我的12306
                  <svg className="dropdown-arrow dropdown-arrow-static" width="10" height="10" viewBox="0 0 10 10" style={{ marginLeft: 4, display: 'inline-block' }}>
                    <polygon points="5,7 2,4 8,4" fill="#9ec6ff" />
                  </svg>
                </Link>
                <ul className="menu-nav-bd" role="menu">
                  <li><Link to={user ? "/center/orders" : "/login?redirect=%2Fcenter%2Forders"}>火车票订单</Link></li>
                  <li><a href="#">候补订单</a></li>
                  <li><a href="#">计次•定期票订单</a></li>
                  <li><a href="#">约号订单</a></li>
                  <li><a href="#">电子发票</a></li>
                  <li><a href="#">本人车票</a></li>
                  <li className="nav-line"></li>
                  <li><a href="#">我的餐饮•特产</a></li>
                  <li><a href="#">我的保险</a></li>
                  <li><a href="#">我的会员</a></li>
                  <li className="nav-line"></li>
                  <li><Link to={user ? "/center/profile" : "/login?redirect=%2Fcenter%2Fprofile"}>查看个人信息</Link></li>
                  <li><a href="#">账户安全</a></li>
                  <li className="nav-line"></li>
                  <li><Link to={user ? "/center/passengers" : "/login?redirect=%2Fcenter%2Fpassengers"}>乘车人</Link></li>
                  <li><a href="#">地址管理</a></li>
                  <li className="nav-line"></li>
                  <li><a href="#">温馨服务查询</a></li>
                </ul>
              </li>
              <li className="menu-item menu-line">|</li>
              {user ? (
                <li className="menu-item menu-login" role="menuitem">
                  <span style={{color:'#666'}}>欢迎您，{user.username || user}</span>
                  <a onClick={handleLogout} className="ml" style={{cursor:'pointer'}}>退出</a>
                </li>
              ) : (
                <li className="menu-item menu-login" role="menuitem">
                  <Link to="/login">登录</Link>
                  <Link to="/register" className="ml">注册</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Nav />
    </header>
  )
}

function Nav() {
  const navigate = useNavigate()
  return (
    <div className="nav-box" role="navigation">
      <ul className="nav" role="menubar">
        <li className="nav-item nav-item-w1 active" role="menuitem">
          <Link to="/" className="nav-hd">首页</Link>
        </li>
        <li className="nav-item nav-item-w1" role="menuitem">
          <a href="#" className="nav-hd item">车票
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginLeft: 6, display: 'inline-block' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <div className="nav-bd">
            <div className="nav-bd-item nav-col2">
              <h3 className="nav-tit">购买</h3>
              <ul className="nav-con" role="menu">
                <li><a onClick={() => navigate('/trains', { state: { tripType: 'dc' } })} style={{cursor:'pointer'}}>单程</a></li>
                <li><a onClick={() => navigate('/trains', { state: { tripType: 'wf' } })} style={{cursor:'pointer'}}>往返</a></li>
                <li><a onClick={() => navigate('/trains')} style={{cursor:'pointer'}}>中转换乘</a></li>
                <li><a onClick={() => goWithLogin(navigate, '/center/orders')} style={{cursor:'pointer'}}>计次•定期票</a></li>
              </ul>
            </div>
            <div className="nav-bd-item nav-col2">
              <h3 className="nav-tit">变更</h3>
              <ul className="nav-con" role="menu">
                <li><a onClick={() => goWithLogin(navigate, '/center/orders')} style={{cursor:'pointer'}}>退票</a></li>
                <li><a onClick={() => goWithLogin(navigate, '/center/orders')} style={{cursor:'pointer'}}>改签</a></li>
                <li><a onClick={() => goWithLogin(navigate, '/center/orders')} style={{cursor:'pointer'}}>变更到站</a></li>
              </ul>
            </div>
            <div className="nav-bd-item nav-col2">
              <h3 className="nav-tit border-none">更多</h3>
              <ul className="nav-con" role="menu">
                <li><a href="#">中铁银通卡</a></li>
                <li><a href="#">国际列车</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item" role="menuitem">
          <a href="#" className="nav-hd item">团购服务
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginLeft: 6, display: 'inline-block' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <div className="nav-bd">
            <div className="nav-bd-item nav-col6">
              <ul className="nav-con" role="menu">
                <li><a href="#">务工人员</a></li>
                <li><a href="#">学生团体</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item" role="menuitem">
          <a href="#" className="nav-hd item">会员服务
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginLeft: 6, display: 'inline-block' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <div className="nav-bd">
            <div className="nav-bd-item nav-col6">
              <ul className="nav-con" role="menu">
                <li><a href="#">会员管理</a></li>
                <li><a href="#">积分账户</a></li>
                <li><a href="#">积分兑换</a></li>
                <li><a href="#">会员专享</a></li>
                <li className="border-none"><a href="#">会员中心</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item" role="menuitem">
          <a href="#" className="nav-hd item">站车服务
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginLeft: 6, display: 'inline-block' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <div className="nav-bd">
            <div className="nav-bd-item nav-col4">
              <ul className="nav-con" role="menu">
                <li><a href="#">特殊重点旅客</a></li>
                <li><a href="#">便民托运</a></li>
                <li><a href="#">约车服务</a></li>
                <li><a href="#">车站引导</a></li>
                <li><a href="#">遗失物品查找</a></li>
                <li><a href="#">动车组介绍</a></li>
                <li><a href="#">定制接送</a></li>
                <li><a href="#">站车风采</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item" role="menuitem">
          <a href="#" className="nav-hd item">商旅服务
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginLeft: 6, display: 'inline-block' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <div className="nav-bd">
            <div className="nav-bd-item nav-col6">
              <ul className="nav-con" role="menu">
                <li><a href="#">餐饮•特产</a></li>
                <li><a href="#">保险</a></li>
                <li className="border-none"><a href="#">雪具快运</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item" role="menuitem">
          <a href="#" className="nav-hd item">出行指南
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginLeft: 6, display: 'inline-block' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <div className="nav-bd">
            <div className="nav-bd-item nav-col2">
              <h3 className="nav-tit">常见问题</h3>
              <ul className="nav-con" role="menu">
                <li><a href="#">车票</a></li>
                <li><a href="#">购票</a></li>
                <li><a href="#">改签</a></li>
                <li><a href="#">退票</a></li>
                <li><a href="#" className="txt-lighter">更多&gt;&gt;</a></li>
              </ul>
            </div>
            <div className="nav-bd-item nav-col2">
              <h3 className="nav-tit">旅客须知</h3>
              <ul className="nav-con" role="menu">
                <li><a href="#">身份核验</a></li>
                <li><a href="#" className="txt-lighter">更多&gt;&gt;</a></li>
              </ul>
            </div>
            <div className="nav-bd-item nav-col2">
              <h3 className="nav-tit border-none">相关章程</h3>
              <ul className="nav-con" role="menu">
                <li><a href="#">铁路旅客运输规程</a></li>
                <li className="border-none"><a href="#">广深港高速铁路跨境旅客运输组织规则</a></li>
                <li><a href="#">铁路旅客禁止、限制携带和托运物品目录</a></li>
                <li><a href="#" className="txt-lighter">更多&gt;&gt;</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item last" role="menuitem">
          <a href="#" className="nav-hd item">信息查询
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginLeft: 6, display: 'inline-block' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <div className="nav-bd">
            <div className="nav-bd-item nav-col5">
              <h3 className="nav-tit border-none">常用查询</h3>
              <ul className="nav-con" role="menu">
                <li><a href="#">正晚点</a></li>
                <li><a href="#">时刻表</a></li>
                <li><a href="#">公布票价</a></li>
                <li><a href="#">检票口</a></li>
                <li><a href="#">起售时间</a></li>
                <li><a href="#" target="_blank">天气</a></li>
                <li><a href="#">交通查询</a></li>
                <li><a href="#">代售点</a></li>
                <li><a href="#">客服电话</a></li>
                <li><a href="#">列车状态</a></li>
              </ul>
            </div>
            <div className="nav-bd-item">
              <ul className="nav-con nav-con-pt" role="menu">
                <li className="border-none"><a href="#">最新发布</a></li>
                <li className="border-none"><a href="#">信用信息</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
