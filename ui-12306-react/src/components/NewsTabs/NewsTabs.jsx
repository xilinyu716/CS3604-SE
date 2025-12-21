import { useState } from 'react'
// 使用原始页面类名

const news = {
  latest: [
    { title: '公 告', date: '2024-12-11', link: 'http://www.12306.cn/mormhweb/zxdt/202412/t20241211_43192.html' },
    { title: '关于铁路客运推广使用全面数字化的电子发票的公告', date: '2024-11-07', link: 'http://www.12306.cn/mormhweb/zxdt/202410/t20241023_43048.html' },
    { title: '关于优化铁路车票改签规则的公告', date: '2024-01-11', link: 'http://www.12306.cn/mormhweb/zxdt/202401/t20240111_40579.html' },
    { title: '外国护照身份核验使用说明', date: '2023-12-13', link: 'http://www.12306.cn/mormhweb/zxdt/202311/t20231127_40375.html' },
  ],
  faq: [
    { title: '实名制车票', link: '#' },
    { title: '售票窗口购票', link: '#' },
    { title: '互联网购票', link: '#' },
    { title: '互联网退票', link: '#' },
    { title: '随身携带品', link: '#' },
    { title: '进出站', link: '#' },
    { title: '丢失购票时使用的有效身份证件', link: '#' },
    { title: '使用居民身份证直接检票乘车', link: '#' },
    { title: '广深港跨境列车', link: '#' },
  ],
  credit: []
}

export default function NewsTabs() {
  const [tab, setTab] = useState(0)
  return (
    <div className="news-tab">
      <div className="tab-hd">
        <ul className="lists">
          {['最新发布', '常见问题', '信用信息'].map((t, i) => (
            <li key={t} className={i===tab?'active':''}><a href="#" onClick={() => setTab(i)}>{t}</a></li>
          ))}
        </ul>
      </div>
      <div className="tab-bd">
        {tab===0 && (
          <div className="tab-item" style={{ display: 'block' }}>
            <div className="news-index">
              <ul className={`news-index-list state`}>
                {news.latest.map((n, i) => (
                  <li key={i}><a className={`news-tit`} href={n.link} target="_self" title={n.title}>{n.title}</a><span className={`news-time`}>{n.date}</span></li>
                ))}
              </ul>
              <div className={`news-more`}><a href="#">更多&gt;</a></div>
            </div>
          </div>
        )}
        {tab===1 && (
          <div className="tab-item" style={{ display: 'block' }}>
            <div className="news-index">
              <ul className={`news-index-list question`}>
                {news.faq.map((n, i) => (<li key={i}><a className={`news-tit`} href={n.link}>{n.title}</a></li>))}
              </ul>
              <div className={`news-more`}><a href="#">更多&gt;</a></div>
            </div>
          </div>
        )}
        {tab===2 && (
          <div className="tab-item" style={{ display: 'block' }}>
            <div className="discredit-list-box">
              <dl className={`discredit-list pull-left`}>
                <dt><i className={`icon icon-shixin01`}></i>失信被执行人(自然人)公示</dt>
                <div style={{ height: 128, overflow: 'hidden' }} className={`demo`}>
                  <div className={`dd_left`}><img style={{ display: 'block', width: 100, height: 80, margin: '15px auto' }} src="/assets/empty.png" alt="" /><div style={{ color: '#999' }}>暂无公示数据</div></div>
                </div>
                <dd className={`more`}><a href="#">更多&gt;</a></dd>
              </dl>
              <dl className={`discredit-list pull-right`}>
                <dt><i className={`icon icon-shixin02`}></i>失信已执行人(自然人)公布</dt>
                <div style={{ height: 128, overflow: 'hidden' }} className={`demo1`}>
                  <div className={`dd_right`}><img style={{ display: 'block', width: 100, height: 80, margin: '15px auto' }} src="/assets/empty.png" alt="" /><div style={{ color: '#999' }}>暂无公示数据</div></div>
                </div>
                <dd className={`more`}><a href="#">更多&gt;</a></dd>
              </dl>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
