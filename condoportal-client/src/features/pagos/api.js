// Sprint 2 — Backend: proyecciones financieras, flujo de pago, recibo, actualizar estado de cuenta
import { apiGet, apiPost } from '../../shared/services/apiClient'

export const getEstadoCuenta = () => apiGet('/pagos/estado-cuenta')
export const pagarCuota = (datosPago) => apiPost('/pagos/pagar', datosPago)
export const getRecibo = (pagoId) => apiGet(`/pagos/${pagoId}/recibo`)
