// Sprint 2 — Frontend 2: carga del Historial de Movimientos.
//
// Simula una petición asíncrona (loading -> success) sobre los datos mock.
// TODO(backend): reemplazar el setTimeout por apiGet('/pagos/movimientos')
// desde src/features/pagos/api.js cuando el endpoint exista.

import { useCallback, useEffect, useRef, useState } from 'react'
import { MOVIMIENTOS_MOCK } from '../mocks/movimientos.mock'

const RETARDO_MS = 700

export function useHistorialMovimientos() {
  const [estado, setEstado] = useState({
    movimientos: [],
    cargando: true,
    error: null,
  })
  const timer = useRef(null)

  const cargar = useCallback(() => {
    if (timer.current) clearTimeout(timer.current)
    setEstado((prev) => ({ ...prev, cargando: true, error: null }))
    timer.current = setTimeout(() => {
      setEstado({ movimientos: MOVIMIENTOS_MOCK, cargando: false, error: null })
    }, RETARDO_MS)
  }, [])

  useEffect(() => {
    cargar()
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [cargar])

  return { ...estado, recargar: cargar }
}
