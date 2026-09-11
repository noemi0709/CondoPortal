import { Router } from 'express'
import {
  proyeccionesFinancieras,
  pagarCuota,
  generarRecibo,
  estadoCuenta,
} from '../controllers/pagos.controller.js'

const router = Router()

router.get('/proyecciones', proyeccionesFinancieras)
router.post('/pagar', pagarCuota)
router.get('/:pagoId/recibo', generarRecibo)
router.get('/estado-cuenta/:usuarioId', estadoCuenta)

export default router
