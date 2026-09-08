import { Router } from 'express'
import { listarUsuarios, actualizarRolUsuario } from '../controllers/admin.controller.js'

const router = Router()

// GET /api/admin/usuarios
router.get('/usuarios', listarUsuarios)
// PATCH /api/admin/usuarios/:usuarioId/rol
router.patch('/usuarios/:usuarioId/rol', actualizarRolUsuario)

export default router
