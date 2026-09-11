// Sprint 2 — Frontend 1: vista resumen estado de cuenta
function EstadoCuenta() {
  return (
    <section className="pagos-card" aria-labelledby="estado-cuenta-title">
      <p className="pagos-card-label">Estado actual</p>
      <h2 id="estado-cuenta-title">Resumen del estado de cuenta</h2>
      <p className="pagos-amount">$0.00</p>
      <span className="pagos-status">Al día</span>
    </section>
  )
}

export default EstadoCuenta
