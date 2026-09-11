import NegocioCard from './components/NegocioCard'
import '../dashboard/components/components/marketplace.css'

function MarketplacePage() {
  return (
    <main className="marketplace-page">
      <header className="marketplace-header">
        <p className="marketplace-eyebrow">Servicios para tu comunidad</p>
        <h1>Marketplace</h1>
        <p>Encuentra negocios y proveedores recomendados por tu comunidad.</p>
      </header>
      <NegocioCard />
    </main>
  )
}

export default MarketplacePage
