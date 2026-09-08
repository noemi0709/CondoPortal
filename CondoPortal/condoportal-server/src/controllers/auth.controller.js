import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { buscarUsuarioPorEmail } from '../models/usuario.model.js'

// Backend 1 — Sprint 1: "Crear endpoint de autenticación"
// Verifica usuario/contraseña y responde si el acceso es válido.
export async function login(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña son requeridos' })
  }

  const usuario = buscarUsuarioPorEmail(email)

  if (!usuario) {
    return res.status(401).json({ error: 'Credenciales inválidas' })
  }

  const passwordValida = await bcrypt.compare(password, usuario.passwordHash)

  if (!passwordValida) {
    return res.status(401).json({ error: 'Credenciales inválidas' })
  }

  // Nota: "manejo de sesión (token/logout)" completo (refresh token,
  // blacklist de logout, etc.) es tarea de Backend 2. Aquí solo se genera
  // el token para que el login responda algo usable end-to-end.
  const token = jwt.sign(
    { id: usuario.id, email: usuario.email, rol: usuario.rol },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  )

  return res.status(200).json({
    token,
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
    },
  })
}
