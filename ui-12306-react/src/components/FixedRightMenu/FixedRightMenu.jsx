// 使用原始页面类名

export default function FixedRightMenu() {
  return (
    <div className="fixed-right">
      <ul className="fixed-right-menu">
        <li className="menu-item"><a href="#" className="menu-hd goGonggao"><i className={`icon icon-notice`}></i><h4 className="menu-name">最新发布</h4></a></li>
        <li className="menu-item"><a href="#" className="menu-hd"><i className={`icon icon-phone`}></i><h4 className="menu-name">联系客服</h4></a></li>
        <li className="menu-item">
          <a href="#" className="menu-hd"><i className={`icon icon-code`}></i><h4 className="menu-name">APP下载</h4></a>
          <div className={`menu-bd menu-code`}>
            <h4 className="menu-code-name">铁路12306</h4>
            <div className="menu-code-pic"><img src="/assets/download.png" alt="铁路12306" /><div className="code-tips">官方APP下载，目前铁路未授权其他网站或APP开展类似服务内容，敬请广大用户注意。</div></div>
          </div>
        </li>
        <li className="menu-item" id="close-right"><a href="#" className="menu-hd"><i className={`icon icon-close`}></i><h4 className="menu-name">关闭</h4></a></li>
      </ul>
    </div>
  )
}
