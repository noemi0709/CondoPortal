function FlujoDeCajaChart() {
  const months = [
    { month: 'Ene', income: 72, expense: 48 },
    { month: 'Feb', income: 64, expense: 54 },
    { month: 'Mar', income: 80, expense: 61 },
    { month: 'Abr', income: 70, expense: 52 },
    { month: 'May', income: 84, expense: 68 },
    { month: 'Jun', income: 92, expense: 63 },
  ]

  return (
    <section className="dashboard-panel" aria-labelledby="flujo-title">
      <div className="dashboard-panel-heading">
        <div>
          <p className="dashboard-panel-label">Comportamiento financiero</p>
          <h2 id="flujo-title">Flujo de caja</h2>
        </div>
        <div className="dashboard-legend"><span className="dashboard-legend-income" /> Ingresos <span className="dashboard-legend-expense" /> Gastos</div>
      </div>
      <div className="dashboard-chart" aria-label="Ingresos y gastos de enero a junio">
        {months.map((item) => (
          <div className="dashboard-chart-column" key={item.month}>
            <div className="dashboard-bars">
              <span className="dashboard-bar dashboard-bar-income" style={{ height: `${item.income}%` }} title={`Ingresos ${item.month}`} />
              <span className="dashboard-bar dashboard-bar-expense" style={{ height: `${item.expense}%` }} title={`Gastos ${item.month}`} />
            </div>
            <span>{item.month}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FlujoDeCajaChart
