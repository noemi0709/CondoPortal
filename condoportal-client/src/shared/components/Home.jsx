import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';

import appFirebase from '../../../../credenciales';
import Threads from './animacion';
import './Home.css';

const auth = getAuth(appFirebase);

const quickActions = [
  { label: 'Revisar gastos', href: '/gastos' },
  { label: 'Ver pagos', href: '/pagos' },
  { label: 'Explorar marketplace', href: '/marketplace' },
];

function Home({ correoUsuario }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function cerrarSesion() {
    await signOut(auth);
  }

  return (
    <div className="home-page">
      <div className="home-tools">
        <button
          className="home-tools-button"
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="home-tools-menu"
        >
          <span aria-hidden="true">&#9776;</span>
          Opciones
        </button>
        {isMenuOpen && (
          <div className="home-tools-menu" id="home-tools-menu">
            <a href="#ajustes">Ajustes</a>
            <a href="#asistencia">Asistencia de la página</a>
          </div>
        )}
      </div>
      <main>
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-threads" aria-hidden="true">
            <Threads amplitude={1} distance={0} enableMouseInteraction />
          </div>

          <div className="home-hero-content">
            <p className="home-eyebrow">CondoPortal</p>
            <h1 id="home-title">Tu comunidad, más simple.</h1>
            <p className="home-intro">
              Gestiona los pagos, gastos y servicios de tu conjunto desde un solo lugar.
            </p>
            <p className="home-user">
              Sesión activa: <strong>{correoUsuario || 'Usuario'}</strong>
            </p>
          </div>
        </section>

        <section className="home-content" aria-labelledby="home-actions-title">
          <div className="home-section-heading">
            <div>
              <p className="home-eyebrow">Acceso rápido</p>
              <h2 id="home-actions-title">¿Qué necesitas consultar?</h2>
            </div>
            <button className="btn btn-primary" onClick={cerrarSesion} type="button">
              Cerrar sesión
            </button>
          </div>

          <div className="home-actions">
            {quickActions.map((action) => (
              <a className="home-action" href={action.href} key={action.href}>
                <span>{action.label}</span>
                <span aria-hidden="true">-&gt;</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
