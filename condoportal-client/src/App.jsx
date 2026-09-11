import { useEffect, useState } from "react";
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./features/dashboard/components/components/Login.jsx";
import Home from "./features/dashboard/components/components/Home.jsx";
import Gastos from "./features/dashboard/components/components/gastos.jsx";
import Pagos from "./features/dashboard/components/components/pagos.jsx";
import Marketplace from "./features/dashboard/components/components/marketplace.jsx";
import DashboardPage from "./features/dashboard/DashboardPage.jsx";
import Ajustes from "./shared/components/ajustes.jsx";
import PillNav from "./features/dashboard/components/components/PillNav.jsx";

const auth = getAuth(appFirebase);

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Gastos", href: "/gastos" },
  { label: "Pagos", href: "/pagos" },
  { label: "Marketplace", href: "/marketplace" },
];

function AuthenticatedApp({ usuario }) {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('home-theme') === 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';

    function syncTheme(event) {
      if (event.key === 'home-theme') setDarkMode(event.newValue === 'dark');
    }

    window.addEventListener('storage', syncTheme);
    return () => window.removeEventListener('storage', syncTheme);
  }, [darkMode]);

  return (
    <div className="portal-app">
      {location.pathname !== "/ajustes" && (
        <header className="portal-header">
          <PillNav
            items={navItems}
            activeHref={location.pathname}
            useRouterLinks
          />
        </header>
      )}

      <Routes>
        <Route path="/" element={<Home correoUsuario={usuario.email} nombreUsuario={usuario.displayName} />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/ajustes" element={<Ajustes correoUsuario={usuario.email} />} />
        <Route path="/gastos" element={<Gastos />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase ?? null);
    });

    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      {usuario ? (
        <AuthenticatedApp usuario={usuario} />
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
}

export default App;