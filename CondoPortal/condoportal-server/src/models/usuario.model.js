// TODO (Sprint futuro / Backend): reemplazar este arreglo en memoria por
// una tabla real en la base de datos (ej. Postgres vía Supabase o Prisma).
// Por ahora sirve para poder probar el endpoint de login de punta a punta.

import bcrypt from 'bcryptjs'

// Contraseña de prueba para los dos usuarios: "123456"
const passwordHashDemo = bcrypt.hashSync('123456', 10)

export const usuariosDemo = [
  {
    id: 1,
    nombre: 'Admin Demo',
    email: 'admin@condoportal.com',
    passwordHash: passwordHashDemo,
    rol: 'admin',
  },
  {
    id: 2,
    nombre: 'Residente Demo',
    email: 'residente@condoportal.com',
    passwordHash: passwordHashDemo,
    rol: 'residente',
  },
]

export function buscarUsuarioPorEmail(email) {
  return usuariosDemo.find((u) => u.email === email)
}
