// Sprint 2 — Frontend 2: datos de ejemplo para el Historial de Movimientos.
//
// TODO(backend): sustituir MOVIMIENTOS_MOCK por el endpoint real de movimientos
// de pagos. `pagos.controller.js` pertenece al rol de Backend (ver ASIGNACIONES.md);
// Frontend 2 solo maqueta la vista y su comportamiento.

export const MOVIMIENTOS_MOCK = [
  { id: 'MOV-2026-0142', fecha: '2026-09-01', concepto: 'Cuota mensual · Septiembre 2026', tipo: 'pago', metodo: 'Domiciliación', monto: 1200, estado: 'pendiente', saldo: null },
  { id: 'MOV-2026-0141', fecha: '2026-08-28', concepto: 'Reembolso por mantenimiento de alberca', tipo: 'ingreso', metodo: 'Transferencia', monto: 640, estado: 'completado', saldo: 9850 },
  { id: 'MOV-2026-0140', fecha: '2026-08-15', concepto: 'Cuota extraordinaria · Reja perimetral', tipo: 'pago', metodo: 'Tarjeta', monto: 800, estado: 'completado', saldo: 9210 },
  { id: 'MOV-2026-0139', fecha: '2026-08-10', concepto: 'Multa por estacionamiento en área común', tipo: 'egreso', metodo: 'Cargo a cuenta', monto: 350, estado: 'completado', saldo: 10010 },
  { id: 'MOV-2026-0138', fecha: '2026-08-03', concepto: 'Cuota mensual · Agosto 2026', tipo: 'pago', metodo: 'Transferencia', monto: 1200, estado: 'completado', saldo: 10360 },
  { id: 'MOV-2026-0137', fecha: '2026-07-30', concepto: 'Pago rechazado · fondos insuficientes', tipo: 'pago', metodo: 'Tarjeta', monto: 1200, estado: 'rechazado', saldo: null },
  { id: 'MOV-2026-0136', fecha: '2026-07-18', concepto: 'Aportación a fondo de reserva', tipo: 'ingreso', metodo: 'Transferencia', monto: 500, estado: 'completado', saldo: 11560 },
  { id: 'MOV-2026-0135', fecha: '2026-07-05', concepto: 'Cuota mensual · Julio 2026', tipo: 'pago', metodo: 'Domiciliación', monto: 1200, estado: 'completado', saldo: 11060 },
  { id: 'MOV-2026-0134', fecha: '2026-06-22', concepto: 'Ajuste contable de administración', tipo: 'otro', metodo: '—', monto: 0, estado: 'completado', saldo: 12260 },
  { id: 'MOV-2026-0133', fecha: '2026-06-06', concepto: 'Cuota mensual · Junio 2026', tipo: 'pago', metodo: '—', monto: 1200, estado: 'vencido', saldo: null },
]

// Presentación de cada tipo de movimiento: etiqueta, signo del monto,
// clase de color e icono. `signo`: 1 ingreso, -1 salida, 0 neutro.
export const CONFIG_TIPO = {
  ingreso: { etiqueta: 'Ingreso', signo: 1, clase: 'mov--ingreso', icono: 'entra' },
  egreso: { etiqueta: 'Egreso', signo: -1, clase: 'mov--egreso', icono: 'sale' },
  pago: { etiqueta: 'Pago', signo: -1, clase: 'mov--pago', icono: 'tarjeta' },
  otro: { etiqueta: 'Otro', signo: 0, clase: 'mov--otro', icono: 'punto' },
}

export const CONFIG_ESTADO = {
  completado: { etiqueta: 'Completado', clase: 'badge--ok' },
  pendiente: { etiqueta: 'Pendiente', clase: 'badge--warning' },
  vencido: { etiqueta: 'Vencido', clase: 'badge--danger' },
  rechazado: { etiqueta: 'Rechazado', clase: 'badge--neutral' },
}
