import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import gastosRoutes from './routes/gastos.routes.js'
import pagosRoutes from './routes/pagos.routes.js'
import adminRoutes from './routes/admin.routes.js'
import { errorHandler } from './middleware/errorHandler.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/gastos', gastosRoutes)
app.use('/api/pagos', pagosRoutes)
app.use('/api/admin', adminRoutes)

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

app.use(errorHandler)

const PORT = Number(process.env.PORT || 3000)
const HOST = process.env.HOST || 'localhost'
const MAX_PORT = Number(process.env.MAX_PORT || 3050)

function startServer(port) {
  const server = app.listen(port, HOST, () => {
    console.log(`Servidor corriendo en http://${HOST}:${port}`)
  })

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && port < MAX_PORT) {
      console.warn(`Puerto ${port} ya está en uso. Reintentando en ${port + 1}...`)
      server.close(() => startServer(port + 1))
      return
    }

    console.error(err)
    process.exit(1)
  })
}

startServer(PORT)
