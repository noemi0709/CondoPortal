function KpiCards() {
  const kpis = [
    { label: 'Recaudo del mes', value: '$8.450.000', note: '+12,4% vs. mayo', tone: 'positive' },
    { label: 'Cuotas pendientes', value: '$1.280.000', note: '8 apartamentos', tone: 'warning' },
    { label: 'Gastos ejecutados', value: '$5.970.000', note: '72% del presupuesto', tone: 'neutral' },
    { label: 'Saldo disponible', value: '$2.480.000', note: 'Corte actualizado hoy', tone: 'positive' },
  ]

  return (
    <section className="dashboard-kpis" aria-label="Indicadores principales">
      {kpis.map((kpi) => (
        <article className="dashboard-kpi" key={kpi.label}>
          <p>{kpi.label}</p>
          <strong>{kpi.value}</strong>
          <span className={`dashboard-kpi-note dashboard-kpi-note--${kpi.tone}`}>{kpi.note}</span>
        </article>
      ))}
    </section>
  )
}

export default KpiCards
