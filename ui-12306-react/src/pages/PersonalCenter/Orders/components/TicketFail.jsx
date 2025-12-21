import styles from './TicketFail.module.css'

export default function TicketFail({ onRetry }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.panelError}>
        <div className={styles.errorPic}></div>
        <div className={styles.errorCon}>
          <div className={styles.errorTit}>哎呀，出票失败了！</div>
          <div className={styles.errorTxt}></div>
        </div>
      </div>
      <div className={styles.ticketInfo}>
        <div>车次信息</div>
        <div>
          <span className="txt-blg"></span>
          <span className="txt-blg"></span>
          <span>车次</span>
          <span className="txt-blg"></span>站
          <span className="txt-blg"></span>
          -
          <span className="txt-blg"></span>站
        </div>
        <div className={styles.btnCenter}>
          <a href="#" className="btn btn-primary" onClick={onRetry}>重新购票</a>
          <a href="#" className="btn">举报</a>
        </div>
      </div>
    </div>
  )
}
