// Sprint 3 — Frontend 2: Gráfico de Flujo de Caja del Dashboard.
//
// Contenedor: carga (hook), selector de periodo y estados de interfaz.
// El gráfico de barras agrupadas (ingresos vs egresos por mes) usa Recharts.

import { useMemo, useState } from 'react'
import { useFlujoDeCaja } from '../hooks/useFlujoDeCaja'
import SelectorPeriodo from './flujo/SelectorPeriodo'
import GraficoBarras from './flujo/GraficoBarras'
import { CargandoFlujo, ErrorFlujo, SinFlujo } from './flujo/EstadosFlujo'

const fmtMoneda = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  maximumFractionDigits: 0,
})

function FlujoDeCajaChart() {
  const { flujoMensual, cargando, error, recargar } = useFlujoDeCaja()
  const [meses, setMeses] = useState(6)

  const datos = useMemo(
    () => flujoMensual.slice(-meses),
    [flujoMensual, meses],
  )

  const totales = useMemo(() => {
    const ingresos = datos.reduce((suma, d) => suma + d.ingresos, 0)
    const egresos = datos.reduce((suma, d) => suma + d.egresos, 0)
    return { ingresos, egresos, balance: ingresos - egresos }
  }, [datos])

  const claseBalance =
    totales.balance >= 0 ? 'flujo__monto--ingreso' : 'flujo__monto--egreso'

  return (
    <section className="flujo" aria-labelledby="flujo-titulo">
      <header className="flujo__head">
        <div>
          <h2 id="flujo-titulo" className="flujo__titulo">Flujo de caja</h2>
          <p className="flujo__desc">
            Ingresos frente a egresos del condominio, mes a mes.
          </p>
        </div>
        <SelectorPeriodo valor={meses} onCambio={setMeses} />
      </header>

      {!cargando && !error && datos.length > 0 && (
        <p className="flujo__resumen" aria-live="polite">
          Ingresos{' '}
          <strong className="flujo__monto flujo__monto--ingreso">
            {fmtMoneda.format(totales.ingresos)}
          </strong>
          {' · '}Egresos{' '}
          <strong className="flujo__monto flujo__monto--egreso">
            {fmtMoneda.format(totales.egresos)}
          </strong>
          {' · '}Balance{' '}
          <strong className={`flujo__monto ${claseBalance}`}>
            {fmtMoneda.format(totales.balance)}
          </strong>
        </p>
      )}

      {cargando ? (
        <CargandoFlujo />
      ) : error ? (
        <ErrorFlujo onReintentar={recargar} />
      ) : datos.length === 0 ? (
        <SinFlujo />
      ) : (
        <>
          <GraficoBarras datos={datos} />
          <table className="sr-only">
            <caption>Flujo de caja mensual (ingresos y egresos)</caption>
            <thead>
              <tr>
                <th scope="col">Mes</th>
                <th scope="col">Ingresos</th>
                <th scope="col">Egresos</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((d) => (
                <tr key={d.clave}>
                  <td>{d.mes}</td>
                  <td>{fmtMoneda.format(d.ingresos)}</td>
                  <td>{fmtMoneda.format(d.egresos)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </section>
  )
}

export default FlujoDeCajaChart
