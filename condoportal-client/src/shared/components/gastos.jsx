import './gastos.css'
import imagen from '../../../../gastos.jpg'

function Gastos() {
	return (
		<main className="gastos-page">
			<header className="gastos-header">
				<p className="gastos-eyebrow">Administración financiera</p>
				<h1>Gastos</h1>
				<p>Consulta los gastos registrados de tu comunidad.</p>
			</header>

			<section className="gastos-feature" aria-labelledby="gastos-feature-title">
				<div className="gastos-image-frame">
					<img src={imagen} alt="Registro visual de gastos de la comunidad" />
				</div>
				<div>
					<p className="gastos-eyebrow">Resumen visual</p>
					<h2 id="gastos-feature-title">Mantén tus gastos bajo control</h2>
					<p>Consulta la información financiera de tu conjunto de forma clara.</p>
				</div>
			</section>

			<ul className="gastos-list">
				<li className="gastos-empty">No hay gastos registrados.</li>
			</ul>
		</main>
	)
}

export default Gastos