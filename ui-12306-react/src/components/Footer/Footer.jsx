// 使用原始页面类名

export default function Footer() {
  return (
    <footer className="footer">
      <div className={`footer-con wrapper`}>
        <div className="foot-links" style={{ marginRight: 20 }}>
          <h2 className="foot-con-tit">友情链接</h2>
          <ul className="foot-links-list" role="menubar">
            <li role="menuitem"><a href="#"><img src="/assets/link05.png" alt="中国国家铁路集团有限公司" /></a></li>
            <li role="menuitem"><a href="#"><img src="/assets/link02.png" alt="中国铁路财产保险自保有限公司" /></a></li>
            <li role="menuitem"><a href="#"><img src="/assets/link03.png" alt="中国铁路95306网" /></a></li>
            <li role="menuitem"><a href="#"><img src="/assets/link04.png" alt="中铁快运股份有限公司" /></a></li>
          </ul>
        </div>
        <ul className="foot-code">
          <li style={{ width: 140 }}>
            <h2 className="foot-con-tit">中国铁路官方微信</h2>
            <div className="code-pic"><img src="/assets/zgtlwb.png" alt="中国铁路官方微信" /></div>
          </li>
          <li style={{ width: 140 }}>
            <h2 className="foot-con-tit">中国铁路官方微博</h2>
            <div className="code-pic"><img src="/assets/zgtlwx.png" alt="中国铁路官方微博" /></div>
          </li>
          <li style={{ width: 110 }}>
            <h2 className="foot-con-tit">12306 公众号</h2>
            <div className="code-pic"><img src="/assets/public.png" alt="12306 公众号" /></div>
          </li>
          <li style={{ width: 110 }}>
            <h2 className="foot-con-tit">铁路12306</h2>
            <div className="code-pic"><img src="/assets/download.png" alt="铁路12306" /><div className="code-tips">官方APP下载，目前铁路未授权其他网站或APP开展类似服务内容，敬请广大用户注意。</div></div>
          </li>
        </ul>
      </div>
      <div className="footer-txt" style={{ position: 'relative' }}>
        <p>
          <span className="mr">版权所有©2008-2025</span>
          <span className="mr">中国铁道科学研究院集团有限公司</span>
          <span>技术支持：铁旅科技有限公司</span>
        </p>
        <p>
          <span className="mr"><img src="/assets/gongan.png" alt="公安" style={{ width: 13 }} />京公网安备 11010802038392号</span>
          <span className="mr">|</span>
          <span className="mr">京ICP备05020493号-4</span>
          <span className="mr">|</span>
          <span>ICP证：京B2-20202537</span>
          <span className="mr">|</span>
          <span>营业执照</span>
        </p>
        <div style={{ position: 'absolute', top: 17, left: '50%', marginLeft: 465 }}>
          <img src="/assets/footer-slh.jpg" style={{ display: 'block', width: 130, height: 46 }} alt="适老化无障碍服务" />
        </div>
      </div>
    </footer>
  )
}
