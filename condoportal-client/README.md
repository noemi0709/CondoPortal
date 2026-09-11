# CondoPortal — Client (React + Vite)

Estructura organizada por **feature** (módulo de negocio), alineada a los sprints
del documento "Reparto por Rol":

- `src/features/auth`         → Sprint 1 (Backend 1, Backend 2, Frontend 1)
- `src/features/gastos`       → Sprint 1 (Backend 1, Backend 2)
- `src/features/pagos`        → Sprint 2 (Backend 1, Backend 2, Frontend 1, Frontend 2)
- `src/features/dashboard`    → Sprint 3 (Frontend 1, Frontend 2, Full-Stack/QA)
- `src/features/landing`      → Sprint 4 (Frontend 2)
- `src/features/mapa`         → Sprint 4 (Full-Stack/QA)
- `src/features/marketplace`  → Sprint 4 (Frontend 1, Frontend 2)
- `src/features/admin`        → Sprint 5 (Backend 1, Full-Stack/QA)
- `src/shared`                → componentes/hooks/servicios usados por varios módulos (toasts, tema, cliente de API)
- `src/routes`                → definición de rutas de la app

## Cómo arrancar

```bash
npm install
npm run dev
```

Antes de iniciar el cliente, crea `.env.local` a partir de `.env.example` y completa
la configuración de Firebase. `.env.local` está excluido de Git y no debe subirse
al repositorio:

```bash
copy .env.example .env.local
```

Las variables `VITE_*` de Firebase son configuración pública del cliente web, no
credenciales administrativas. Protege el proyecto con restricciones de API,
Firebase Authentication y reglas de Firestore/Storage. Nunca agregues al cliente
una cuenta de servicio ni una clave privada.

Cada archivo trae un comentario indicando en qué sprint y con qué rol se
relaciona, según el documento de reparto de actividades. Son placeholders:
cada desarrollador reemplaza el contenido de su(s) componente(s) asignado(s).

## Nota sobre el backend

Este scaffold asume que existe una API en `VITE_API_URL` (ver
`src/shared/services/apiClient.js`). Si el equipo decide usar Supabase en vez
de un backend propio (Node/Express), ese archivo es el único que cambiaría:
en vez de hacer `fetch`, usaría el cliente de Supabase.
