import styles from './OrderItem.module.css'

export default function OrderItem({ ticket, isFirst, rowSpan }) {
  return (
    <tr>
      {isFirst && (
        <td className={`${styles.tdLeft} ${styles.alignTop}`} rowSpan={rowSpan}>
          <div className={styles.ticketInfo}>
            <div className={styles.title}>{ticket.from} <i className="icon icon-to"></i> {ticket.to} {ticket.code}</div>
            <div>{ticket.date} 开</div>
          </div>
        </td>
      )}
      <td style={{ width: 200 }}>
        <div>{ticket.passenger}</div>
        <div>{ticket.idType}</div>
      </td>
      <td>
        <div>{ticket.seatType}</div>
        <div>{ticket.coach}车{ticket.seat}</div>
      </td>
      <td>
        <div>{ticket.ticketType}</div>
        <div><span className="txt-price">{ticket.price}元</span></div>
      </td>
      <td>
        <div className={styles.status}>{ticket.status}</div>
      </td>
    </tr>
  )
}
