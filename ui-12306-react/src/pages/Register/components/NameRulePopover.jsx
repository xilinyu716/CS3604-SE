import { useState } from 'react'
import styles from './NameRulePopover.module.css'

export default function NameRulePopover() {
  const [open, setOpen] = useState(false)
  return (
    <span className={styles.wrap}>
      <a className={styles.link} onClick={()=>setOpen(!open)}>姓名填写规则</a>
      {open && (
        <div className={styles.pop}>
          <ul>
            <li>居民身份证、港澳居民居住证、台湾居民居住证、中国护照按姓名顺序填写中文姓名。</li>
            <li>外国人永久居留身份证按姓名顺序填写中文或英文姓名。</li>
            <li>港澳居民来往内地通行证、台湾居民来往大陆通行证按姓名顺序输入姓名。</li>
            <li>外国护照按姓名顺序填写英文姓名，姓和名之间使用空格分隔。</li>
            <li>确认姓名中生僻字无法输入时，可用生僻字拼音或同音字替代。</li>
            <li>姓名中有“.”或“•”时，准确输入。</li>
            <li>姓名较长超过30字符的，按顺序连续输入前30字符。</li>
          </ul>
        </div>
      )}
    </span>
  )
}
