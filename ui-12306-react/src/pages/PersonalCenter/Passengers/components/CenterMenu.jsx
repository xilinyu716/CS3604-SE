import styles from './CenterMenu.module.css'
import { Link } from 'react-router-dom'

export default function CenterMenu() {
  return (
    <ul className={`center-menu ${styles.menu}`} role="menubar">
      <li className={`menu-item`} role="menuitem">
        <h2 className={`menu-tit`}><Link to="/center">个人中心</Link></h2>
      </li>
      <li className={`menu-item`} role="menuitem">
        <h2 className={`menu-tit`}>订单中心<i className={`icon icon-switch`}></i></h2>
        <ul className={`menu-sub`} role="menubar">
          <li role="menuitem"><a href="#">火车票订单</a></li>
          <li role="menuitem"><a href="#">候补订单</a></li>
          <li role="menuitem"><a href="#">计次•定期票订单</a></li>
          <li role="menuitem"><a href="#">约号订单</a></li>
          <li role="menuitem"><a href="#">电子发票</a></li>
          <li role="menuitem"><a href="#">本人车票</a></li>
        </ul>
      </li>
      <li className={`menu-item`} role="menuitem">
        <h2 className={`menu-tit`}>个人信息<i className={`icon icon-switch`}></i></h2>
        <ul className={`menu-sub`} role="menubar">
          <li role="menuitem"><a href="#">查看个人信息</a></li>
          <li role="menuitem"><a href="#">账号安全</a></li>
          <li role="menuitem"><a href="#">手机核验</a></li>
          <li role="menuitem"><a href="#">账号注销</a></li>
        </ul>
      </li>
      <li className={`menu-item`} role="menuitem">
        <h2 className={`menu-tit`}>常用信息管理<i className={`icon icon-switch`}></i></h2>
        <ul className={`menu-sub`} role="menubar">
          <li role="menuitem" className={`active`}><Link to="/center/passengers">乘车人</Link></li>
          <li role="menuitem"><a href="#">地址管理</a></li>
        </ul>
      </li>
      <li className={`menu-item`} role="menuitem">
        <h2 className={`menu-tit`}>温馨服务<i className={`icon icon-switch`}></i></h2>
        <ul className={`menu-sub`} role="menubar">
          <li role="menuitem"><a href="#">重点旅客预约</a></li>
          <li role="menuitem"><a href="#">遗失物品查找</a></li>
          <li role="menuitem"><a href="#">服务查询</a></li>
        </ul>
      </li>
      <li className={`menu-item`} role="menuitem">
        <h2 className={`menu-tit`}>投诉和建议<i className={`icon icon-switch`}></i></h2>
        <ul className={`menu-sub`} role="menubar">
          <li role="menuitem"><a href="#">投诉</a></li>
          <li role="menuitem"><a href="#">建议</a></li>
        </ul>
      </li>
    </ul>
  )
}
