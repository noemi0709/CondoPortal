import EstadoCuenta from './components/EstadoCuenta'
import HistorialMovimientos from './components/HistorialMovimientos'
import '../dashboard/components/components/pagos.css'

function PagosPage() {
  return (
    <main className="pagos-page">
      <header className="pagos-header">
        <p className="pagos-eyebrow">Finanzas de la comunidad</p>
        <h1>Pagos</h1>
        <p>Consulta tu estado de cuenta y revisa tus movimientos recientes.</p>
      </header>
      <EstadoCuenta />
      <HistorialMovimientos />
    </main>
  )
}

export default PagosPage
