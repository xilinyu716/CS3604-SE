import styles from './LoginFooter.module.css'

export default function LoginFooter() {
  return (
    <footer className={styles.footer} aria-label="底部">
      <div className={`${styles.footerCon} ${styles.wrapper}`} role="main">
        <div className={styles.links}>
          <h2 className={styles.tit}>友情链接</h2>
          <ul className={styles.linksList}>
            <li><a href="#" aria-label="中国国家铁路集团有限公司"><img src="/assets/link05.png" alt="中国国家铁路集团有限公司" /></a></li>
            <li><a href="#" aria-label="中国铁路财产保险自保有限公司"><img src="/assets/link02.png" alt="中国铁路财产保险自保有限公司" /></a></li>
            <li><a href="#" aria-label="中国铁路95306网"><img src="/assets/link03.png" alt="中国铁路95306网" /></a></li>
            <li><a href="#" aria-label="中铁快运股份有限公司"><img src="/assets/link04.png" alt="中铁快运股份有限公司" /></a></li>
          </ul>
        </div>
        <ul className={styles.codes}>
          <li>
            <h2 className={styles.tit}>中国铁路官方微信</h2>
            <div className={styles.codePic}><img src="/assets/zgtlwb.png" alt="中国铁路官方微信" /></div>
          </li>
          <li>
            <h2 className={styles.tit}>中国铁路官方微博</h2>
            <div className={styles.codePic}><img src="/assets/zgtlwx.png" alt="中国铁路官方微博" /></div>
          </li>
          <li>
            <h2 className={styles.tit}>12306 公众号</h2>
            <div className={styles.codePic}><img src="/assets/public.png" alt="12306 公众号" /></div>
          </li>
          <li>
            <h2 className={styles.tit}>铁路12306</h2>
            <div className={styles.codePic}><img src="/assets/download.png" alt="铁路12306" /><div className={styles.codeTips}>官方APP下载，目前铁路未授权其他网站或APP开展类似服务内容，敬请广大用户注意。</div></div>
          </li>
        </ul>
      </div>
      <div className={styles.footerTxt}>
        <p>
          <span className={styles.mr}>版权所有©2008-2025</span>
          <span className={styles.mr}>中国铁道科学研究院集团有限公司</span>
          <span>技术支持：铁旅科技有限公司</span>
        </p>
        <p>
          <span className={styles.mr}><img src="/assets/gongan.png" alt="公安" style={{ width: 13 }} />京公网安备 11010802038392号</span>
          <span className={styles.mr}>|</span>
          <span className={styles.mr}>京ICP备05020493号-4</span>
          <span className={styles.mr}>|</span>
          <span>ICP证：京B2-20202537</span>
        </p>
        <div className={styles.rightBadge}>
          <img src="/assets/footer-slh.jpg" alt="适老化无障碍服务" />
        </div>
      </div>
    </footer>
  )
}
