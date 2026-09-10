// Sprint 3 — Frontend 2: estados de interfaz del Flujo de Caja.
// Reutiliza las clases .hist-estado / .btn / .sr-only de historial.css.

const ALTURAS_SKELETON = [58, 40, 72, 52, 80, 46, 68, 60, 76, 44, 70, 50]

export function CargandoFlujo() {
  return (
    <div className="hist-estado" aria-busy="true">
      <span className="sr-only">Cargando flujo de caja…</span>
      <div className="flujo-skeleton" aria-hidden="true">
        {ALTURAS_SKELETON.map((alto, i) => (
          <span
            key={i}
            className="flujo-skeleton__barra"
            style={{ height: `${alto}%` }}
          />
        ))}
      </div>
    </div>
  )
}

export function ErrorFlujo({ onReintentar }) {
  return (
    <div className="hist-estado hist-estado--error" role="alert">
      <svg width="56" height="56" viewBox="0 0 24 24" aria-hidden="true" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5M12 16h.01" />
      </svg>
      <p className="hist-estado__titulo">No se pudo cargar el flujo de caja</p>
      <p className="hist-estado__texto">Revisa tu conexión e inténtalo de nuevo.</p>
      <button type="button" className="btn btn--primary" onClick={onReintentar}>
        Reintentar
      </button>
    </div>
  )
}

export function SinFlujo() {
  return (
    <div className="hist-estado hist-estado--vacio">
      <svg width="64" height="64" viewBox="0 0 24 24" aria-hidden="true" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5M4 19h16M8 16v-4M13 16V9M18 16v-6" />
      </svg>
      <p className="hist-estado__titulo">Sin movimientos en el periodo</p>
      <p className="hist-estado__texto">
        No hay ingresos ni egresos registrados en los meses seleccionados.
      </p>
    </div>
  )
}
