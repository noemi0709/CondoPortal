// Sprint 3 — Frontend 2: gráfico de barras agrupadas (ingresos vs egresos).
// Recharts. Colores tomados de los tokens CSS del tema activo.

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const fmtMoneda = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  maximumFractionDigits: 0,
})

function token(nombre, respaldo) {
  if (typeof window === 'undefined') return respaldo
  // Los tokens de modo claro viven en `body.light`, no en :root — se lee del body.
  const valor = getComputedStyle(document.body).getPropertyValue(nombre).trim()
  return valor || respaldo
}

function TooltipFlujo({ active, payload, label }) {
  if (!active || !payload || payload.length === 0) return null
  return (
    <div className="flujo-tooltip">
      <p className="flujo-tooltip__mes">{label}</p>
      {payload.map((serie) => (
        <p key={serie.dataKey} className="flujo-tooltip__fila">
          <span
            className="flujo-tooltip__punto"
            style={{ background: serie.color }}
          />
          {serie.name}: <strong>{fmtMoneda.format(serie.value)}</strong>
        </p>
      ))}
    </div>
  )
}

function GraficoBarras({ datos }) {
  const colorIngreso = token('--mov-ingreso', '#3f7d29')
  const colorEgreso = token('--mov-egreso', '#b4552f')
  const colorEje = token('--sub', '#7a6c5b')
  const colorRejilla = token('--muted', '#e6dac6')

  return (
    <div className="flujo__grafico">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={datos}
          margin={{ top: 8, right: 8, bottom: 0, left: 8 }}
          barGap={4}
          barCategoryGap="22%"
        >
          <CartesianGrid vertical={false} stroke={colorRejilla} />
          <XAxis
            dataKey="mes"
            tick={{ fill: colorEje, fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: colorRejilla }}
          />
          <YAxis
            width={72}
            tick={{ fill: colorEje, fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(valor) => fmtMoneda.format(valor)}
          />
          <Tooltip
            content={<TooltipFlujo />}
            cursor={{ fill: colorRejilla, fillOpacity: 0.35 }}
          />
          <Legend />
          <Bar
            dataKey="ingresos"
            name="Ingresos"
            fill={colorIngreso}
            radius={[4, 4, 0, 0]}
            maxBarSize={44}
            isAnimationActive={false}
          />
          <Bar
            dataKey="egresos"
            name="Egresos"
            fill={colorEgreso}
            radius={[4, 4, 0, 0]}
            maxBarSize={44}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GraficoBarras
