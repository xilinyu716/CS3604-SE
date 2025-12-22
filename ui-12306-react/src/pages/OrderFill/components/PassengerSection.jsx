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

function PassengerTable({ passengers, selectedPassengers, onCheck, onUpdate }) {
  // Helper to check if passenger is selected
  const isSelected = (p) => selectedPassengers.some(sp => sp.passenger_id_no === p.passenger_id_no)
  
  // Get selected details if selected
  const getSelectedDetails = (p) => selectedPassengers.find(sp => sp.passenger_id_no === p.passenger_id_no) || {}

  // We display ALL passengers, and use checkbox to select which ones to buy tickets for.
  // Or usually, we show a list of contacts to pick from, and then a table of "tickets to buy".
  // The user requirement implies "passenger info is not mine".
  // Let's list all passengers.
  
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
        {passengers.length === 0 && <tr><td colSpan="7" style={{textAlign:'center', padding: 20}}>暂无常用联系人，请新增</td></tr>}
        {passengers.map(p => {
          const selected = isSelected(p)
          const details = getSelectedDetails(p)
          
          return (
            <tr key={p.passenger_id_no}>
              <td>
                <input 
                  type="checkbox" 
                  checked={selected} 
                  onChange={(e) => onCheck(p, e.target.checked)}
                />
              </td>
              <td>
                <select 
                  className={styles.select} 
                  value={selected ? details.ticketType : (p.passenger_type_name || '成人')}
                  disabled={!selected}
                  onChange={(e) => onUpdate(p.passenger_id_no, 'ticketType', e.target.value)}
                >
                  <option value="成人">成人票</option>
                  <option value="儿童">儿童票</option>
                  <option value="学生">学生票</option>
                </select>
              </td>
              <td>{p.passenger_name}</td>
              <td>{p.passenger_id_type_name || '中国居民身份证'}</td>
              <td>{p.passenger_id_no}</td>
              <td>
                <select 
                  className={styles.select} 
                  value={selected ? details.seatType : '二等座'}
                  disabled={!selected}
                  onChange={(e) => onUpdate(p.passenger_id_no, 'seatType', e.target.value)}
                  aria-label="席别"
                >
                  <option value="二等座">二等座</option>
                  <option value="一等座">一等座</option>
                  <option value="商务座">商务座</option>
                  <option value="无座">无座</option>
                </select>
              </td>
              <td>
                <button className={styles.linkBtn}>删除</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default function PassengerSection({ passengers = [], selectedPassengers = [], onCheck, onUpdate }) {
  return (
    <section className={styles.section}>
      <PassengerHeader />
      <PassengerTable 
        passengers={passengers} 
        selectedPassengers={selectedPassengers}
        onCheck={onCheck}
        onUpdate={onUpdate}
      />
    </section>
  )
}

