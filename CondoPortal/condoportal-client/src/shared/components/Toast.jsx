// Sprint 5 — Componente de notificaciones toast (Frontend 1)
function Toast({ message, type = 'info' }) {
  return <div className={`toast toast--${type}`}>{message}</div>
}

export default Toast
