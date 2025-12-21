import styles from './PassengerSection.module.css'

function PassengerHeader() {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>乘客信息</h2>
      <p className={styles.tips}>成人携带未满6周岁且不占座儿童可在购票成功后添加。</p>
      <div className={styles.search}>
        <input className={styles.searchInput} placeholder="输入乘客姓名" aria-label="输入乘客姓名" />
        <button className={styles.searchBtn} aria-label="搜索">查询</button>
        <button className={styles.addBtn} aria-label="新增乘客">新增乘客</button>
      </div>
    </div>
  )
}

function PassengerTable() {
  return (
    <table className={styles.table} aria-label="乘客列表">
      <thead>
        <tr>
          <th>选择</th>
          <th>票种</th>
          <th>姓名</th>
          <th>证件类型</th>
          <th>证件号码</th>
          <th>席别</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" /></td>
          <td><span className={styles.tag}>成人</span></td>
          <td>张三</td>
          <td>中国居民身份证</td>
          <td>1101**********1234</td>
          <td>
            <select className={styles.select} aria-label="席别">
              <option>二等座</option>
              <option>一等座</option>
              <option>商务座</option>
              <option>无座</option>
            </select>
          </td>
          <td>
            <button className={styles.linkBtn}>添加儿童票</button>
            <button className={styles.linkBtn}>删除</button>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td><span className={styles.tagChild}>儿童</span></td>
          <td>李四</td>
          <td>中国居民身份证</td>
          <td>3205**********5678</td>
          <td>
            <select className={styles.select} aria-label="席别">
              <option>二等座</option>
              <option>一等座</option>
              <option>商务座</option>
              <option>无座</option>
            </select>
          </td>
          <td>
            <button className={styles.linkBtn}>删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default function PassengerSection() {
  return (
    <section className={styles.section}>
      <PassengerHeader />
      <PassengerTable />
    </section>
  )
}

