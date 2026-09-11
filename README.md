# CondoPortal

Proyecto dividido en dos partes independientes:

```
CondoPortal/
├── condoportal-client/   → Frontend en React + Vite (ver su propio README)
├── condoportal-server/   → Backend en Node.js + Express (ver su propio README)
└── ASIGNACIONES.md       → Qué carpeta/archivo le toca a cada rol del equipo
```

## Para empezar a trabajar

1. Lee `ASIGNACIONES.md` para saber qué te toca según tu rol (Frontend 1, Frontend 2, Backend 1, Backend 2, Full-Stack/QA).
2. Entra a `condoportal-client` o `condoportal-server` según te corresponda y sigue el README de esa carpeta para instalar y correr el proyecto.
3. Si trabajas en frontend, necesitas también el backend corriendo en paralelo (`condoportal-server`) para probar las llamadas reales a la API.

## Orden recomendado para levantar ambos

```bash
# Terminal 1 — backend
cd condoportal-server
npm install
copy .env.example .env      (Windows) / cp .env.example .env (Mac/Linux)
npm run dev

# Terminal 2 — frontend
cd condoportal-client
npm install
npm run dev
```

El frontend queda en `http://localhost:5173` y el backend en `http://localhost:3000`.
