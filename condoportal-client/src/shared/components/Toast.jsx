import { useEffect } from 'react'
import './Toast.css'

// Sprint 5 — Componente de notificaciones toast (Frontend 1)
function Toast({ message, type = 'info', onClose }) {
  useEffect(() => {
    if (!onClose) return undefined
    const timeoutId = setTimeout(onClose, 3200)
    return () => clearTimeout(timeoutId)
  }, [message, onClose])

  return <div className={`toast toast--${type}`} role="status">{message}</div>
}

export default Toast
