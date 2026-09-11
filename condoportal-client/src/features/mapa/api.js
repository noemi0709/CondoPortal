// Sprint 4 — Full-Stack/QA: puntos de interés cercanos
import { apiGet } from '../../shared/services/apiClient'

export const getPuntosDeInteres = () => apiGet('/mapa/puntos-interes')
