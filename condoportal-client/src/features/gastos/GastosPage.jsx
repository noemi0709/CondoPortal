import GastosList from './components/GastosList'
import '../dashboard/components/components/gastos.css'

function GastosPage() {
  return (
    <main className="gastos-page">
      <header className="gastos-header">
        <p className="gastos-eyebrow">Administración financiera</p>
        <h1>Gastos</h1>
        <p>Consulta los gastos registrados de tu comunidad.</p>
      </header>
      <GastosList />
    </main>
  )
}

export default GastosPage
