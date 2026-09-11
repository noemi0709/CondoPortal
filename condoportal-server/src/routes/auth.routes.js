import { Router } from 'express'
import { login } from '../controllers/auth.controller.js'

const router = Router()

// POST /api/auth/login
router.post('/login', login)

// TODO Backend 2 — Sprint 1: manejo de sesión (token/logout)
// router.post('/logout', logout)

export default router
