// Sprint 1 — Backend 1: endpoint de autenticación
import { apiPost } from '../../shared/services/apiClient'

export function login(email, password) {
  return apiPost('/auth/login', { email, password })
}

export function logout() {
  // TODO: Backend 2 - manejo de sesión (token/logout)
}
