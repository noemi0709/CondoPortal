// Cliente centralizado de llamadas a la API / Supabase.
// Todos los módulos (auth, gastos, pagos, etc.) deben importar desde aquí
// en vez de hacer fetch directo, para que sea fácil cambiar de backend después.

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export async function apiGet(path) {
  const res = await fetch(`${BASE_URL}${path}`)
  if (!res.ok) throw new Error(`Error al obtener ${path}`)
  return res.json()
}

export async function apiPost(path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`Error al enviar a ${path}`)
  return res.json()
}
