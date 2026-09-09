// Sprint 2 — Frontend 2: vista historial de movimientos
//
// TODO(backend): reemplazar MOVIMIENTOS_MOCK por datos reales cuando el rol
// de Backend exponga el endpoint de movimientos de pagos (ver ASIGNACIONES.md;
// pagos.controller.js pertenece a Backend). El componente solo maqueta la
// tabla y su versión responsiva.

const MOVIMIENTOS_MOCK = [
  {
    id: 1,
    fecha: '2026-08-03',
    concepto: 'Cuota mensual · Agosto 2026',
    metodo: 'Transferencia',
    folio: 'MOV-2026-0803',
    monto: 1200,
    estatus: 'pagado',
  },
  {
    id: 2,
    fecha: '2026-07-30',
    concepto: 'Cuota extraordinaria · Fachada',
    metodo: 'Tarjeta',
    folio: 'MOV-2026-0731',
    monto: 800,
    estatus: 'pagado',
  },
  {
    id: 3,
    fecha: '2026-07-05',
    concepto: 'Cuota mensual · Julio 2026',
    metodo: 'Domiciliación',
    folio: 'MOV-2026-0705',
    monto: 1200,
    estatus: 'pendiente',
  },
  {
    id: 4,
    fecha: '2026-06-06',
    concepto: 'Cuota mensual · Junio 2026',
    metodo: '—',
    folio: 'MOV-2026-0606',
    monto: 1200,
    estatus: 'vencido',
  },
  {
    id: 5,
    fecha: '2026-05-04',
    concepto: 'Cuota mensual · Mayo 2026',
    metodo: 'Transferencia',
    folio: 'MOV-2026-0504',
    monto: 1200,
    estatus: 'pagado',
  },
]

const ESTATUS = {
  pagado: { clase: 'badge--ok', texto: 'Pagado' },
  pendiente: { clase: 'badge--warning', texto: 'Pendiente' },
  vencido: { clase: 'badge--danger', texto: 'Vencido' },
}

const fmtFecha = new Intl.DateTimeFormat('es-MX', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

const fmtMonto = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
})

function HistorialMovimientos() {
  return (
    <section className="history" aria-labelledby="history-title">
      <h2 id="history-title" className="history__title">
        Historial de movimientos
      </h2>

      <div className="table-container">
        <table className="table table--history">
          <caption className="history__caption">
            Movimientos registrados en tu estado de cuenta (datos de ejemplo).
          </caption>
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Concepto</th>
              <th scope="col">Método</th>
              <th scope="col">Folio</th>
              <th scope="col" className="history__num">
                Monto
              </th>
              <th scope="col">Estatus</th>
            </tr>
          </thead>
          <tbody>
            {MOVIMIENTOS_MOCK.map((mov) => {
              const estatus = ESTATUS[mov.estatus] ?? {
                clase: '',
                texto: mov.estatus,
              }
              return (
                <tr key={mov.id}>
                  <td data-label="Fecha">
                    {fmtFecha.format(new Date(`${mov.fecha}T00:00:00`))}
                  </td>
                  <td data-label="Concepto">{mov.concepto}</td>
                  <td data-label="Método">{mov.metodo}</td>
                  <td data-label="Folio">
                    <code className="folio">{mov.folio}</code>
                  </td>
                  <td data-label="Monto" className="history__num">
                    {fmtMonto.format(mov.monto)}
                  </td>
                  <td data-label="Estatus">
                    <span className={`badge ${estatus.clase}`}>
                      {estatus.texto}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default HistorialMovimientos
