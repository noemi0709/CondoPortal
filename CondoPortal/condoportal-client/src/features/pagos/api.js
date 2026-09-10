// Sprint 2 — Backend: proyecciones financieras, flujo de pago, recibo, actualizar estado de cuenta
import { apiGet, apiPost } from '../../shared/services/apiClient'

export const getEstadoCuenta = () => apiGet('/pagos/estado-cuenta')
export const pagarCuota = (datosPago) => apiPost('/pagos/pagar', datosPago)
export const getRecibo = (pagoId) => apiGet(`/pagos/${pagoId}/recibo`)

// Sprint 3 — flujo de caja mensual (ingresos vs egresos). Aún sin backend:
// useFlujoDeCaja agrupa datos mock. Dejar lista la firma para conectar.
export const getFlujoCaja = (meses = 12) => apiGet(`/pagos/flujo-caja?meses=${meses}`)
