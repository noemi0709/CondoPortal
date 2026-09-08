# CondoPortal — Asignaciones por Rol

Basado en "Reparto de Actividades por Rol" (Teteocan Technologies).
Cada quien trabaja únicamente dentro de su(s) carpeta(s) asignada(s).

## Frontend 1 — 16 SP

- `condoportal-client/src/features/auth/components/LoginForm.jsx` — Sprint 1
- `condoportal-client/src/features/pagos/components/EstadoCuenta.jsx` — Sprint 2
- `condoportal-client/src/features/dashboard/components/KpiCards.jsx` — Sprint 3
- `condoportal-client/src/features/marketplace/components/NegocioCard.jsx` — Sprint 4
- `condoportal-client/src/shared/components/Toast.jsx` — Sprint 5

## Frontend 2 — 16 SP

- `condoportal-client/src/features/pagos/components/HistorialMovimientos.jsx` — Sprint 2
- `condoportal-client/src/features/dashboard/components/FlujoDeCajaChart.jsx` — Sprint 3
- `condoportal-client/src/features/landing/components/Hero.jsx` — Sprint 4
- `condoportal-client/src/features/landing/components/Footer.jsx` — Sprint 4
- `condoportal-client/src/features/marketplace/components/PerfilProveedor.jsx` — Sprint 4
- `condoportal-client/src/shared/components/ThemeToggle.jsx` — Sprint 5

## Backend 1 — 21 SP

- `condoportal-server/src/controllers/auth.controller.js` — Sprint 1 (endpoint de autenticación)
- `condoportal-server/src/models/gasto.model.js` *(crear)* — Sprint 1 (modelo de datos de gastos)
- `condoportal-server/src/controllers/pagos.controller.js` *(crear)* — Sprint 2 (proyecciones financieras, recibo de pago)
- `condoportal-server/src/controllers/admin.controller.js` *(crear)* — Sprint 5 (gestión de usuarios y roles)

## Backend 2 — 21 SP

- `condoportal-client/src/features/auth/hooks/useAuth.js` + lógica de sesión en `condoportal-server` — Sprint 1 (manejo de sesión token/logout)
- `condoportal-server/src/controllers/gastos.controller.js` *(crear)* — Sprint 1 (CRUD de gastos, filtro por categoría)
- `condoportal-server/src/controllers/pagos.controller.js` *(compartido con Backend 1)* — Sprint 2 (flujo de pago, actualizar estado de cuenta)

## Full-Stack / QA — 19 SP

- `condoportal-client/src/features/dashboard/components/ActividadReciente.jsx` — Sprint 3
- Pruebas de integración del dashboard (sin carpeta fija, cubre todo `features/dashboard`) — Sprint 3
- `condoportal-client/src/features/mapa/` (componente + api.js) — Sprint 4
- `condoportal-client/src/features/admin/AdminPage.jsx` — Sprint 5
- Conectar `Toast.jsx` a eventos reales de la app — Sprint 5
- `condoportal-client/src/shared/hooks/useTheme.js` — Sprint 5 (persistir preferencia de tema)

---

**Regla general:** si tu tarea necesita un archivo que no existe todavía (marcado arriba como *(crear)*), créalo dentro de la carpeta indicada siguiendo el mismo patrón que los archivos ya existentes (ver comentarios al inicio de cada archivo placeholder).
