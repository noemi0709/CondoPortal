// Sprint 1 — Backend: modelo de datos de gastos, CRUD, filtro por categoría
import { apiGet, apiPost } from '../../shared/services/apiClient'

export const getGastos = () => apiGet('/gastos')
export const crearGasto = (gasto) => apiPost('/gastos', gasto)
// TODO: Backend 2 - filtro de gastos por categoría
