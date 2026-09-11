// Sprint 3 — Frontend 2: selector de periodo del Flujo de Caja.

const PERIODOS = [3, 6, 12]

function SelectorPeriodo({ valor, onCambio }) {
  return (
    <div className="flujo__periodo">
      <label htmlFor="flujo-periodo">Periodo</label>
      <select
        id="flujo-periodo"
        value={valor}
        onChange={(e) => onCambio(Number(e.target.value))}
      >
        {PERIODOS.map((meses) => (
          <option key={meses} value={meses}>
            Últimos {meses} meses
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectorPeriodo
