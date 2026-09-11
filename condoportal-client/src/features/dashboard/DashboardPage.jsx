import KpiCards from './components/KpiCards'
import FlujoDeCajaChart from './components/FlujoDeCajaChart'
import ActividadReciente from './components/ActividadReciente'
import './dashboard.css'

function DashboardPage() {
  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <p className="dashboard-eyebrow">Resumen de tu comunidad</p>
          <h1>Dashboard</h1>
          <p>Una lectura rápida de las finanzas y la actividad del conjunto.</p>
        </div>
        <span className="dashboard-period">Junio 2025</span>
      </header>
      <KpiCards />
      <div className="dashboard-lower-grid">
        <FlujoDeCajaChart />
        <ActividadReciente />
      </div>
    </main>
  )
}

export default DashboardPage
