import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from '../features/auth/AuthPage'
import DashboardPage from '../features/dashboard/DashboardPage'
import GastosPage from '../features/gastos/GastosPage'
import PagosPage from '../features/pagos/PagosPage'
import LandingPage from '../features/landing/LandingPage'
import MarketplacePage from '../features/marketplace/MarketplacePage'
import AdminPage from '../features/admin/AdminPage'

// TODO: agregar rutas protegidas por rol (admin / residente / proveedor)
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/gastos" element={<GastosPage />} />
        <Route path="/pagos" element={<PagosPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
