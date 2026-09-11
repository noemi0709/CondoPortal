// Sprint 1 — Backend 2: manejo de sesión (token/logout)
import { useState } from 'react'

export function useAuth() {
  const [user, setUser] = useState(null)
  // TODO: leer token guardado, validar sesión activa
  return { user, setUser }
}
