import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.tableTitle}>Type</th>
          <th className={css.tableTitle}>Amount</th>
          <th className={css.tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={css.tdList} key={item.id}>
            <td className={css.tdClass}>{item.type}</td>
            <td className={css.tdClass}>{item.amount}</td>
            <td className={css.tdClass}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}