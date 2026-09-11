import './marketplace.css'
import Stack from './imagenes'
import { useMemo, useState } from 'react'
import imagen1 from '../../../../imagen1.jpg'
import imagen2 from '../../../../imagen2.jpg'
import imagen3 from '../../../../imagen3.jpg'
import imagen4 from '../../../../imagen4.jpg'
import imagen5 from '../../../../imagen5.jpg'
import imagen6 from '../../../../imagen6.jpg'
import imagen7 from '../../../../imagen7.jpg'
import imagen8 from '../../../../imagen8.jpg'

const images = [
  imagen1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
  imagen7,
  imagen8,
]

const initialBusinesses = [
  {
    id: 1,
    name: 'Mantenimiento residencial',
    category: 'Mantenimiento',
    description: 'Reparaciones y mantenimiento para tu hogar.',
  },
  {
    id: 2,
    name: 'Limpieza profesional',
    category: 'Hogar',
    description: 'Servicios de limpieza para apartamentos y zonas comunes.',
  },
]

function Marketplace() {
  const [businesses, setBusinesses] = useState(initialBusinesses)
  const [searchTerm, setSearchTerm] = useState('')
  const [showRegistration, setShowRegistration] = useState(false)
  const [businessForm, setBusinessForm] = useState({
    name: '',
    category: '',
    description: '',
  })

  const filteredBusinesses = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    if (!normalizedSearch) return businesses

    return businesses.filter((business) =>
      [business.name, business.category, business.description]
        .join(' ')
        .toLowerCase()
        .includes(normalizedSearch),
    )
  }, [businesses, searchTerm])

  function handleFormChange(event) {
    const { name, value } = event.target
    setBusinessForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  function handleBusinessSubmit(event) {
    event.preventDefault()

    const newBusiness = {
      id: Date.now(),
      name: businessForm.name.trim(),
      category: businessForm.category.trim(),
      description: businessForm.description.trim(),
    }

    if (!newBusiness.name || !newBusiness.category || !newBusiness.description) return

    setBusinesses((currentBusinesses) => [newBusiness, ...currentBusinesses])
    setBusinessForm({ name: '', category: '', description: '' })
    setShowRegistration(false)
  }

  return (
    <main className="marketplace-page">
      <header className="marketplace-header">
        <p className="marketplace-eyebrow">Servicios para tu comunidad</p>
        <h1>Marketplace</h1>
        <p>Encuentra negocios y proveedores recomendados por tu comunidad.</p>
      </header>

      <section className="marketplace-content" aria-labelledby="marketplace-featured-title">
        <article className="negocio-card">
          <p className="negocio-card-label">Proveedor destacado</p>
          <h2 id="marketplace-featured-title">Servicios para tu conjunto</h2>
          <p>Explora opciones de mantenimiento, hogar y bienestar.</p>
        </article>

        <div className="marketplace-stack" aria-label="Proveedores destacados">
          <Stack
            randomRotation={false}
            sensitivity={200}
            sendToBackOnClick
            cards={images.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Vista de proveedor ${index + 1}`}
                className="card-image"
              />
            ))}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={false}
          />
        </div>
      </section>

      <section className="marketplace-directory" aria-labelledby="marketplace-directory-title">
        <div className="marketplace-directory-heading">
          <div>
            <p className="marketplace-eyebrow">Directorio comunitario</p>
            <h2 id="marketplace-directory-title">Negocios y proveedores</h2>
          </div>
          <button
            className="marketplace-register-button"
            type="button"
            onClick={() => setShowRegistration((isVisible) => !isVisible)}
            aria-expanded={showRegistration}
          >
            {showRegistration ? 'Cerrar registro' : 'Registrar negocio'}
          </button>
        </div>

        <label className="marketplace-search">
          <span>Buscar por nombre, categoría o servicio</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Ej. limpieza o mantenimiento"
          />
        </label>

        {showRegistration && (
          <form className="marketplace-form" onSubmit={handleBusinessSubmit}>
            <h3>Registrar un negocio</h3>
            <div className="marketplace-form-grid">
              <label>
                Nombre del negocio
                <input
                  name="name"
                  value={businessForm.name}
                  onChange={handleFormChange}
                  required
                />
              </label>
              <label>
                Categoría
                <input
                  name="category"
                  value={businessForm.category}
                  onChange={handleFormChange}
                  placeholder="Ej. Hogar"
                  required
                />
              </label>
              <label className="marketplace-form-full">
                Descripción del servicio
                <textarea
                  name="description"
                  value={businessForm.description}
                  onChange={handleFormChange}
                  rows="3"
                  required
                />
              </label>
            </div>
            <button className="marketplace-submit-button" type="submit">
              Guardar negocio
            </button>
          </form>
        )}

        <div className="marketplace-businesses">
          {filteredBusinesses.length > 0 ? filteredBusinesses.map((business) => (
            <article className="marketplace-business-card" key={business.id}>
              <span>{business.category}</span>
              <h3>{business.name}</h3>
              <p>{business.description}</p>
            </article>
          )) : (
            <p className="marketplace-empty">No encontramos negocios con esa búsqueda.</p>
          )}
        </div>
      </section>
    </main>
  )
}

export default Marketplace
