// Backend — Sprint 2: pagos y estado de cuenta
// TODO: reemplazar por tabla real en base de datos.

const pagosDemo = []
let nextId = 1

export function registrarPago({ usuarioId, monto, concepto }) {
  const pago = {
    id: nextId++,
    usuarioId,
    monto,
    concepto,
    fecha: new Date().toISOString(),
    estatus: 'pagado',
  }
  pagosDemo.push(pago)
  return pago
}

export function obtenerReciboPorId(pagoId) {
  return pagosDemo.find((p) => p.id === Number(pagoId))
}

export function listarPagos() {
  return pagosDemo
}

export function obtenerEstadoCuenta(usuarioId) {
  const pagos = pagosDemo.filter((p) => p.usuarioId === usuarioId)
  const totalPagado = pagos.reduce((sum, p) => sum + p.monto, 0)
  return { usuarioId, pagos, totalPagado }
}
