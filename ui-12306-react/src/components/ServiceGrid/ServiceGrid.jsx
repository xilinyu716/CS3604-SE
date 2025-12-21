// 使用原始页面类名

const serviceLg = [
  { img: '/assets/abanner01.jpg', title: '铁路畅行 惠享出行 尊享体验', link: 'https://cx.12306.cn/tlcx/index.html' },
  { img: '/assets/abanner02.jpg', title: '餐饮·特产 带有温度的旅行配餐', link: 'https://exservice.12306.cn/excater/index.html' },
  { img: '/assets/abanner05.jpg', title: '铁路保险 用心呵护 放心出行', link: 'https://kyfw.12306.cn/otn/view/my_insurance.html' },
  { img: '/assets/abanner06.jpg', title: '计次订票开售 直刷乘车、出行乐无忧', link: 'https://kyfw.12306.cn/otn/view/commutation_index.html' },
]

const serviceSm = [
  { img: '/assets/service01.jpg', name: '接送站服务', txt: '一站式定制服务 体现价值', link: 'https://www.12306.cn/index/view/station/custom_PickUp.html' },
  { img: '/assets/service02.jpg', name: '团购预定', txt: '为您提供更优惠的团购信息', link: 'https://www.12306.cn/index/view/group/group_management.html' },
  { img: '/assets/service03.jpg', name: '铁路保险', txt: '用心呵护 为您保障出行安全', link: 'https://kyfw.12306.cn/otn/view/my_insurance.html' },
  { img: '/assets/service04.jpg', name: '中铁e卡', txt: '首次充值，免费餐饮享不停', link: 'https://mobile.12306.cn/otsmobile/h5/otsbussiness/eCard.html' },
]

export default function ServiceGrid() {
  return (
    <div>
      <ul className="service-list">
        <li style={{ display: 'none' }}>
          <a href="#"><i className={`service-icon ico-s1`}></i><div>接送站</div></a>
        </li>
        <li>
          <a href="#"><i className={`service-icon ico-s2`}></i><div>重点旅客预约</div></a>
        </li>
        <li>
          <a href="#"><i className={`service-icon ico-s6`}></i><div>遗失物品查找</div></a>
        </li>
        <li>
          <a href="#"><i className={`service-icon ico-s4`}></i><div>约车服务</div></a>
        </li>
        <li>
          <a href="#"><i className={`service-icon ico-s5`}></i><div>便民托运</div></a>
        </li>
        <li>
          <a href="#"><i className={`service-icon ico-s3`}></i><div>车站引导</div></a>
        </li>
        <li>
          <a href="#"><i className={`service-icon ico-s7`}></i><div>站车风采</div></a>
        </li>
        <li className={`last`}>
          <a href="#"><i className={`service-icon ico-s9`}></i><div>用户反馈</div></a>
        </li>
      </ul>

      <div className="service-lg">
        <ul className="service-lg-list">
          {serviceLg.map((s, i) => (
            <li key={i}>
              <a href={s.link} title={s.title} target="_blank"><img src={s.img} alt={s.title} /></a>
            </li>
          ))}
        </ul>
      </div>

      <div className="service-sm" style={{ display: 'none' }}>
        <ul className="service-sm-list">
          {serviceSm.map((s, i) => (
            <li key={i}>
              <a href={s.link} target="_self">
                <div className={`service-pic`}><img src={s.img} alt="" /></div>
                <div className={`service-info`}>
                  <h3 className={`service-name`}>{s.name}</h3>
                  <p className={`service-txt`}>{s.txt}</p>
                  <i className={`icon icon-more`}></i>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
