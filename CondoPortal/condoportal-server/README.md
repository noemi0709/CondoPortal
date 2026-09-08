# CondoPortal — Server (Node.js + Express)

## Estructura

```
src/
├── controllers/    → lógica de negocio (auth.controller.js: verifica login)
├── models/         → acceso a datos (usuario.model.js: por ahora en memoria)
├── routes/         → definición de endpoints (auth.routes.js: /api/auth/*)
├── middleware/      → manejo de errores, futura autenticación de rutas
└── index.js         → arranca el servidor Express
```

## Cómo correrlo

```bash
npm install
cp .env.example .env
npm run dev
```

Servidor en: http://localhost:3000

## Endpoints implementados

### Auth (Sprint 1 — Backend 1)
- `POST /api/auth/login` → `{ email, password }` → `{ token, usuario }` o 401

Usuarios de prueba (ver `src/models/usuario.model.js`):
- admin@condoportal.com / 123456
- residente@condoportal.com / 123456

### Gastos (Sprint 1 — Backend 2)
- `GET /api/gastos` → lista todos los gastos
- `GET /api/gastos?categoria=mantenimiento` → filtro por categoría
- `POST /api/gastos` → `{ descripcion, categoria, monto, fecha }` → crea un gasto

### Pagos (Sprint 2 — Backend 1 y Backend 2)
- `GET /api/pagos/proyecciones` → proyecciones financieras (placeholder, falta lógica real)
- `POST /api/pagos/pagar` → `{ usuarioId, monto, concepto }` → registra un pago
- `GET /api/pagos/:pagoId/recibo` → obtiene el recibo de un pago
- `GET /api/pagos/estado-cuenta/:usuarioId` → estado de cuenta de un usuario

### Admin (Sprint 5 — Backend 1)
- `GET /api/admin/usuarios` → lista usuarios (sin exponer passwordHash)
- `PATCH /api/admin/usuarios/:usuarioId/rol` → `{ rol }` → cambia el rol de un usuario

## Pendiente (siguientes tareas del sprint)

- **Backend 2** — Manejo de sesión (token/logout): invalidar tokens, refresh token.
- **Backend 1** — Calcular la lógica real de "Proyecciones financieras" (hoy es un placeholder).
- **Backend 2** — Conectar "Actualizar estado de cuenta tras pago" con el flujo de `pagarCuota`.
- Reemplazar todos los modelos (`usuario.model.js`, `gasto.model.js`, `pago.model.js`) — hoy son arreglos en memoria — por una base de datos real.

## Conectar con el frontend

En `condoportal-client`, crea un archivo `.env` con:
```
VITE_API_URL=http://localhost:3000/api
```
Así `src/shared/services/apiClient.js` del cliente ya apunta a este servidor.
