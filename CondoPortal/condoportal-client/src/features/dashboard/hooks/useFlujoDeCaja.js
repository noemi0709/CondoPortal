// Sprint 3 — Frontend 2: carga y agrupamiento del Flujo de Caja.
//
// Simula una petición asíncrona (mismo patrón que useHistorialMovimientos) y
// agrupa MOVIMIENTOS_MOCK por mes.
// TODO(backend): sustituir el setTimeout por getFlujoCaja() de pagos/api.js.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { MOVIMIENTOS_MOCK } from '../../pagos/mocks/movimientos.mock'

const RETARDO_MS = 700

const MESES_CORTOS = [
  'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic',
]

// Rango continuo de claves 'YYYY-MM' entre dos meses (ambos incluidos).
function rangoMeses(desde, hasta) {
  const claves = []
  let [anio, mes] = desde.split('-').map(Number)
  const [anioFin, mesFin] = hasta.split('-').map(Number)
  while (anio < anioFin || (anio === anioFin && mes <= mesFin)) {
    claves.push(`${anio}-${String(mes).padStart(2, '0')}`)
    if (++mes > 12) {
      mes = 1
      anio++
    }
  }
  return claves
}

function agruparPorMes(movimientos) {
  const acumulado = new Map()

  for (const mov of movimientos) {
    if (mov.estado !== 'completado' || mov.tipo === 'otro') continue

    const clave = mov.fecha.slice(0, 7) // 'YYYY-MM'
    if (!acumulado.has(clave)) acumulado.set(clave, { ingresos: 0, egresos: 0 })

    const fila = acumulado.get(clave)
    if (mov.tipo === 'ingreso') fila.ingresos += mov.monto
    else fila.egresos += mov.monto // 'pago' | 'egreso'
  }

  if (acumulado.size === 0) return []

  // Serie continua: los meses sin movimientos aparecen en 0 (no se omiten).
  const ordenadas = [...acumulado.keys()].sort()
  return rangoMeses(ordenadas[0], ordenadas[ordenadas.length - 1]).map((clave) => {
    const [anio, mes] = clave.split('-')
    const fila = acumulado.get(clave) ?? { ingresos: 0, egresos: 0 }
    return {
      clave,
      mes: `${MESES_CORTOS[Number(mes) - 1]} ${anio}`,
      ingresos: fila.ingresos,
      egresos: fila.egresos,
    }
  })
}

export function useFlujoDeCaja() {
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

  const flujoMensual = useMemo(
    () => agruparPorMes(estado.movimientos),
    [estado.movimientos],
  )

  return {
    flujoMensual,
    cargando: estado.cargando,
    error: estado.error,
    recargar: cargar,
  }
}
