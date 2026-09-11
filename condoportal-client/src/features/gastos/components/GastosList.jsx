function GastosList({ gastos = [] }) {
  return (
    <ul className="gastos-list">
      {gastos.length > 0 ? gastos.map((g) => (
        <li className="gasto-item" key={g.id}>
          <span>{g.descripcion}</span>
          <strong>{g.monto ? `$${g.monto}` : 'Pendiente'}</strong>
        </li>
      )) : (
        <li className="gastos-empty">No hay gastos registrados.</li>
      )}
    </ul>
  )
}

export default GastosList
