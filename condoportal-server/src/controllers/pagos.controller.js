import { registrarPago, obtenerReciboPorId, obtenerEstadoCuenta } from '../models/pago.model.js'

// Backend 1 — Sprint 2: "Proyecciones financieras" (placeholder simple por ahora)
export function proyeccionesFinancieras(req, res) {
  // TODO: calcular proyección real a partir de gastos + pagos históricos
  res.status(200).json({ mensaje: 'Proyecciones financieras (pendiente de lógica real)' })
}

// Backend 2 — Sprint 2: "Flujo de pago de cuota"
export function pagarCuota(req, res) {
  const { usuarioId, monto, concepto } = req.body
  if (!usuarioId || !monto) {
    return res.status(400).json({ error: 'usuarioId y monto son requeridos' })
  }
  const pago = registrarPago({ usuarioId, monto, concepto: concepto || 'Cuota de mantenimiento' })
  // TODO Backend 2: "Actualizar estado de cuenta tras pago" (aquí o via evento/webhook)
  res.status(201).json(pago)
}

// Backend 1 — Sprint 2: "Generar recibo de pago"
export function generarRecibo(req, res) {
  const recibo = obtenerReciboPorId(req.params.pagoId)
  if (!recibo) return res.status(404).json({ error: 'Recibo no encontrado' })
  res.status(200).json(recibo)
}

// Frontend 1 (consume) — Sprint 2: "Vista resumen estado de cuenta"
export function estadoCuenta(req, res) {
  const estado = obtenerEstadoCuenta(Number(req.params.usuarioId))
  res.status(200).json(estado)
}
