// Sprint 4 — Frontend 1: grid de negocios marketplace
function NegocioCard({ negocio }) {
  return (
    <article className="negocio-card">
      <p className="negocio-card-label">Proveedor destacado</p>
      <h2>{negocio?.nombre || 'Aún no hay negocios publicados'}</h2>
      <p>{negocio?.descripcion || 'Pronto encontrarás servicios disponibles para tu conjunto.'}</p>
    </article>
  )
}

export default NegocioCard
