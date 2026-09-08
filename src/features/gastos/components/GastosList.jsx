function GastosList({ gastos = [] }) {
  return (
    <ul>
      {gastos.map((g) => (
        <li key={g.id}>{g.descripcion}</li>
      ))}
    </ul>
  )
}

export default GastosList
