// Backend 1 — Sprint 1: "Modelo de datos de gastos"
// TODO: reemplazar por tabla real en base de datos (Postgres/Supabase).

const gastosDemo = [
  { id: 1, descripcion: 'Mantenimiento de jardines', categoria: 'mantenimiento', monto: 3500, fecha: '2026-08-01' },
  { id: 2, descripcion: 'Pago de luz áreas comunes', categoria: 'servicios', monto: 1200, fecha: '2026-08-03' },
]

let nextId = 3

export function listarGastos() {
  return gastosDemo
}

export function listarGastosPorCategoria(categoria) {
  return gastosDemo.filter((g) => g.categoria === categoria)
}

export function crearGasto({ descripcion, categoria, monto, fecha }) {
  const nuevo = { id: nextId++, descripcion, categoria, monto, fecha }
  gastosDemo.push(nuevo)
  return nuevo
}
