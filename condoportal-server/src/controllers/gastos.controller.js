import { listarGastos, listarGastosPorCategoria, crearGasto } from '../models/gasto.model.js'

// Backend 2 — Sprint 1: "CRUD de gastos" + "Filtro de gastos por categoría"
export function obtenerGastos(req, res) {
  const { categoria } = req.query
  const gastos = categoria ? listarGastosPorCategoria(categoria) : listarGastos()
  res.status(200).json(gastos)
}

export function registrarGasto(req, res) {
  const { descripcion, categoria, monto, fecha } = req.body
  if (!descripcion || !categoria || !monto) {
    return res.status(400).json({ error: 'descripcion, categoria y monto son requeridos' })
  }
  const gasto = crearGasto({ descripcion, categoria, monto, fecha })
  res.status(201).json(gasto)
}
