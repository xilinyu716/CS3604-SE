import styles from './IntegralTipsModal.module.css'

export default function IntegralTipsModal({ onClose }) {
  return (
    <>
      <div className={`mask ${styles.mask}`}></div>
      <div className={`modal passenger-tips ${styles.modal}`} role="dialog" aria-modal="true" aria-label="提示">
        <a href="#" className={`modal-close`} title="关闭" onClick={(e)=>{e.preventDefault(); onClose()}}>
          <i className={`icon icon-close`}></i>
        </a>
        <div className={`modal-hd`}><div className={`modal-tit`}>提示</div></div>
        <div className={`modal-bd ${styles.body}`}>
          <div className={`article`}>
            <div className={`article-head`}><h1 className={`article-tit`}>提前核验乘车联系方式送会员积分活动说明</h1></div>
            <div className={`article-body`}>
              <p className={`article-txt`}>根据有关部门要求，为加强疫情防控工作，确保在需要时及时联系乘车旅客，同时也便于向旅客发送电子客票乘车席位等服务信息。</p>
              <p className={`article-txt`}><strong>自2月1日起，12306网站实施了购票时须提供乘车旅客本人使用的手机号码并进行核验的措施。为感谢您的支持与配合，12306网站将为您和乘车旅客分别赠送铁路常旅客积分。</strong></p>
              <p className={`article-txt`}><strong className={`txt-second`}>1、赠送积分的有效期</strong></p>
              <p className={`article-txt`}>本次活动赠送的积分，有效期为1年。</p>
              <p className={`article-txt`}><strong className={`txt-second`}>2、注册用户完成乘车人手机核验赠积分</strong></p>
              <p className={`article-txt`}>已注册铁路畅行会员用户每完成一名乘车人手机号码填报并核验后，系统将赠送1积分，累计赠送不超过15积分。</p>
              <p className={`article-txt`}><strong className={`txt-second`}>3、乘车人首次配合完成手机核验赠积分</strong></p>
              <p className={`article-txt`}>已注册铁路畅行会员的乘车人首次协助核验联系方式后，系统会赠送10积分给乘车人本人账户。</p>
              <p className={`article-txt`}><strong className={`txt-second`}>4、乘车人重复核验不享受此次活动奖励</strong></p>
              <p className={`article-txt`}>只有首次完成核验的用户或乘车人，可获赠积分；对于已经获赠过积分的用户或乘车人，再次修改联系方式，将不再获赠积分。</p>
            </div>
          </div>
        </div>
        <div className={`modal-ft mt`}><a href="#" className={`btn btn-primary`} onClick={(e)=>{e.preventDefault(); onClose()}}>确认</a></div>
      </div>
    </>
  )
}

