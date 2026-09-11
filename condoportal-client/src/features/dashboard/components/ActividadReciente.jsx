function ActividadReciente() {
  const activities = [
    ['Pago recibido', 'Apto 302 · Cuota de administración', '$420.000'],
    ['Factura registrada', 'Mantenimiento ascensor · Proveedor Atlas', '$680.000'],
    ['Nueva solicitud', 'Apto 504 · Reserva salón social', 'Hoy, 10:42'],
  ]

  return (
    <section className="dashboard-panel" aria-labelledby="actividad-title">
      <div className="dashboard-panel-heading">
        <div>
          <p className="dashboard-panel-label">Últimos movimientos</p>
          <h2 id="actividad-title">Actividad reciente</h2>
        </div>
      </div>
      <div className="dashboard-activity-list">
        {activities.map(([title, detail, value]) => (
          <article className="dashboard-activity" key={`${title}-${detail}`}>
            <span className="dashboard-activity-dot" aria-hidden="true" />
            <div><strong>{title}</strong><p>{detail}</p></div>
            <span>{value}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ActividadReciente
