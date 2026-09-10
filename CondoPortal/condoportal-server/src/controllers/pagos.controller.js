import { registrarPago, obtenerReciboPorId, obtenerEstadoCuenta, listarPagos } from '../models/pago.model.js'
import { listarGastos } from '../models/gasto.model.js'

// Agrupa una lista de movimientos (gastos o pagos) por mes (clave "YYYY-MM")
// y regresa un objeto { "2026-08": 4700, "2026-09": 1500, ... } con el total de ese mes.
function agruparPorMes(movimientos) {
  const totalesPorMes = {}
  for (const mov of movimientos) {
    const mes = mov.fecha.slice(0, 7) // "2026-08-01..." -> "2026-08"
    totalesPorMes[mes] = (totalesPorMes[mes] || 0) + mov.monto
  }
  return totalesPorMes
}

function promedio(totalesPorMes) {
  const meses = Object.keys(totalesPorMes)
  if (meses.length === 0) return 0
  const suma = meses.reduce((acc, mes) => acc + totalesPorMes[mes], 0)
  return suma / meses.length
}

// Backend 1 — Sprint 2: "Proyecciones financieras"
// Calcula el saldo actual (ingresos - gastos) y proyecta el saldo del próximo mes
// usando el promedio mensual histórico de ingresos y gastos.
export function proyeccionesFinancieras(req, res) {
  const gastos = listarGastos()
  const pagos = listarPagos()

  const totalGastos = gastos.reduce((sum, g) => sum + g.monto, 0)
  const totalIngresos = pagos.reduce((sum, p) => sum + p.monto, 0)
  const saldoActual = totalIngresos - totalGastos

  const gastosPorMes = agruparPorMes(gastos)
  const ingresosPorMes = agruparPorMes(pagos)

  const promedioGastosMensual = promedio(gastosPorMes)
  const promedioIngresosMensual = promedio(ingresosPorMes)

  const proyeccionProximoMes = saldoActual + (promedioIngresosMensual - promedioGastosMensual)

  res.status(200).json({
    totalIngresos,
    totalGastos,
    saldoActual,
    promedioIngresosMensual,
    promedioGastosMensual,
    proyeccionProximoMes,
    detalle: {
      gastosPorMes,
      ingresosPorMes,
    },
  })
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
