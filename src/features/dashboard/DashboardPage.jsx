import KpiCards from './components/KpiCards'
import FlujoDeCajaChart from './components/FlujoDeCajaChart'
import ActividadReciente from './components/ActividadReciente'

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <KpiCards />
      <FlujoDeCajaChart />
      <ActividadReciente />
    </div>
  )
}

export default DashboardPage
