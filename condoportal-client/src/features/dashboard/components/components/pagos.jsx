import './pagos.css'

function Pagos() {
	return (
		<main className="pagos-page">
			<header className="pagos-header">
				<p className="pagos-eyebrow">Finanzas de la comunidad</p>
				<h1>Pagos</h1>
				<p>Consulta tu estado de cuenta y revisa tus movimientos recientes.</p>
			</header>

			<section className="pagos-card" aria-labelledby="estado-cuenta-title">
				<p className="pagos-card-label">Estado actual</p>
				<h2 id="estado-cuenta-title">Resumen del estado de cuenta</h2>
				<p className="pagos-amount">$0.00</p>
				<span className="pagos-status">Al día</span>
			</section>

			<section className="pagos-card" aria-labelledby="historial-title">
				<p className="pagos-card-label">Actividad</p>
				<h2 id="historial-title">Historial de movimientos</h2>
				<p className="pagos-empty">No hay movimientos registrados.</p>
			</section>
		</main>
	)
}

export default Pagos
