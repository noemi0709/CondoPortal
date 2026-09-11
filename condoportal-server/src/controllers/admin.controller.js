import { usuariosDemo } from '../models/usuario.model.js'

// Backend 1 — Sprint 5: "Gestión de usuarios y roles"
export function listarUsuarios(req, res) {
  const usuarios = usuariosDemo.map(({ passwordHash, ...resto }) => resto)
  res.status(200).json(usuarios)
}

export function actualizarRolUsuario(req, res) {
  const { usuarioId } = req.params
  const { rol } = req.body

  const usuario = usuariosDemo.find((u) => u.id === Number(usuarioId))
  if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' })

  const rolesValidos = ['admin', 'residente', 'proveedor']
  if (!rolesValidos.includes(rol)) {
    return res.status(400).json({ error: `Rol inválido. Usa uno de: ${rolesValidos.join(', ')}` })
  }

  usuario.rol = rol
  res.status(200).json({ id: usuario.id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol })
}
