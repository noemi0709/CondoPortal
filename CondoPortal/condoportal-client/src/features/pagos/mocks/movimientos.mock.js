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

  // --- Historial ampliado (oct 2025 – may 2026) para dar 12 meses al Flujo de Caja (TAREA 03) ---
  { id: 'MOV-2026-0132', fecha: '2026-05-20', concepto: 'Reembolso de póliza de jardinería', tipo: 'ingreso', metodo: 'Transferencia', monto: 700, estado: 'completado', saldo: 13100 },
  { id: 'MOV-2026-0131', fecha: '2026-05-05', concepto: 'Cuota mensual · Mayo 2026', tipo: 'pago', metodo: 'Domiciliación', monto: 1200, estado: 'completado', saldo: 12400 },
  { id: 'MOV-2026-0130', fecha: '2026-04-28', concepto: 'Reparación de bomba hidráulica', tipo: 'egreso', metodo: 'Cargo a cuenta', monto: 480, estado: 'completado', saldo: 13600 },
  { id: 'MOV-2026-0129', fecha: '2026-04-04', concepto: 'Cuota mensual · Abril 2026', tipo: 'pago', metodo: 'Transferencia', monto: 1200, estado: 'completado', saldo: 14080 },
  { id: 'MOV-2026-0128', fecha: '2026-03-30', concepto: 'Aportación extraordinaria · Fondo de obra', tipo: 'ingreso', metodo: 'Transferencia', monto: 1500, estado: 'completado', saldo: 15280 },
  { id: 'MOV-2026-0127', fecha: '2026-03-06', concepto: 'Cuota mensual · Marzo 2026', tipo: 'pago', metodo: 'Domiciliación', monto: 1200, estado: 'completado', saldo: 13780 },
  { id: 'MOV-2026-0126', fecha: '2026-02-19', concepto: 'Multa por ruido fuera de horario', tipo: 'egreso', metodo: 'Cargo a cuenta', monto: 320, estado: 'completado', saldo: 14980 },
  { id: 'MOV-2026-0125', fecha: '2026-02-05', concepto: 'Cuota mensual · Febrero 2026', tipo: 'pago', metodo: 'Tarjeta', monto: 1200, estado: 'completado', saldo: 15300 },
  { id: 'MOV-2026-0124', fecha: '2026-01-22', concepto: 'Reembolso servicio de limpieza', tipo: 'ingreso', metodo: 'Transferencia', monto: 450, estado: 'completado', saldo: 16500 },
  { id: 'MOV-2026-0123', fecha: '2026-01-07', concepto: 'Cuota mensual · Enero 2026', tipo: 'pago', metodo: 'Domiciliación', monto: 1200, estado: 'completado', saldo: 16050 },
  { id: 'MOV-2025-0122', fecha: '2025-12-24', concepto: 'Ajuste de cierre de ejercicio 2025', tipo: 'otro', metodo: '—', monto: 0, estado: 'completado', saldo: 17250 },
  { id: 'MOV-2025-0121', fecha: '2025-12-05', concepto: 'Cuota mensual · Diciembre 2025', tipo: 'pago', metodo: 'Transferencia', monto: 1200, estado: 'completado', saldo: 17250 },
  { id: 'MOV-2025-0120', fecha: '2025-11-08', concepto: 'Cuota mensual · Noviembre 2025', tipo: 'pago', metodo: 'Domiciliación', monto: 1200, estado: 'completado', saldo: 18450 },
  { id: 'MOV-2025-0119', fecha: '2025-11-03', concepto: 'Compra de luminarias LED para áreas comunes', tipo: 'egreso', metodo: 'Cargo a cuenta', monto: 260, estado: 'completado', saldo: 18710 },
  { id: 'MOV-2025-0118', fecha: '2025-10-30', concepto: 'Reembolso por mantenimiento de portón', tipo: 'ingreso', metodo: 'Transferencia', monto: 380, estado: 'completado', saldo: 18970 },
  { id: 'MOV-2025-0117', fecha: '2025-10-06', concepto: 'Cuota mensual · Octubre 2025', tipo: 'pago', metodo: 'Tarjeta', monto: 1200, estado: 'completado', saldo: 18590 },
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
