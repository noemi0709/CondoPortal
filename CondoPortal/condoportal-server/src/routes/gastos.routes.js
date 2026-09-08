import { Router } from 'express'
import { obtenerGastos, registrarGasto } from '../controllers/gastos.controller.js'

const router = Router()

// GET /api/gastos?categoria=mantenimiento
router.get('/', obtenerGastos)
// POST /api/gastos
router.post('/', registrarGasto)

export default router
