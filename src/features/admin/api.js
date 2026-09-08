// Sprint 5 — Backend 1: gestión de usuarios y roles
import { apiGet, apiPost } from '../../shared/services/apiClient'

export const getUsuarios = () => apiGet('/admin/usuarios')
export const actualizarRol = (usuarioId, rol) =>
  apiPost(`/admin/usuarios/${usuarioId}/rol`, { rol })
