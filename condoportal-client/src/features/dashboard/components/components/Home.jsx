import { getAuth, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Toast from '../../../../shared/components/Toast';

import appFirebase from '../../../../credenciales';
import Threads from './animacion';
import './Home.css';

const auth = getAuth(appFirebase);

const quickActions = [
  { label: 'Revisar gastos', href: '/gastos' },
  { label: 'Ver pagos', href: '/pagos' },
  { label: 'Explorar marketplace', href: '/marketplace' },
];

function Home({ correoUsuario, nombreUsuario }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTool, setActiveTool] = useState(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [supportForm, setSupportForm] = useState({ category: 'Pagos', message: '' });
  const [toastMessage, setToastMessage] = useState('');
  const [nombreActivo, setNombreActivo] = useState(() => (
    localStorage.getItem('profile-name') || nombreUsuario || correoUsuario || 'Usuario'
  ));

  useEffect(() => {
    function syncProfileName(event) {
      if (event.key === 'profile-name') setNombreActivo(event.newValue || correoUsuario || 'Usuario');
    }

    window.addEventListener('storage', syncProfileName);
    return () => window.removeEventListener('storage', syncProfileName);
  }, [correoUsuario]);

  async function cerrarSesion() {
    await signOut(auth);
  }

  function openTool(tool) {
    if (tool === 'settings') {
      window.open('/ajustes', '_blank', 'noopener,noreferrer');
      setIsMenuOpen(false);
      return;
    }
    setActiveTool(tool);
    setIsMenuOpen(true);
  }

  function goHome() {
    setActiveTool(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function enviarSoporte(event) {
    event.preventDefault();
    if (!supportForm.message.trim()) return;
    setToastMessage('Tu solicitud fue preparada para soporte.');
    window.location.href = `mailto:soporte@condoportal.com?subject=${encodeURIComponent(supportForm.category)}&body=${encodeURIComponent(supportForm.message)}`;
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
          <div className={`home-tools-menu${activeTool ? ' home-tools-menu--panel' : ''}`} id="home-tools-menu">
            <button type="button" onClick={() => openTool('settings')}>Ajustes</button>
            <button type="button" onClick={() => openTool('support')}>Asistencia de la página</button>
            {activeTool === 'support' && (
              <section className="home-tool-panel home-support-panel" aria-labelledby="support-title">
                <button className="home-back-button" type="button" onClick={goHome}>
                  <span aria-hidden="true">←</span> Volver a Inicio
                </button>
                <div>
                  <p className="home-eyebrow">Estamos para ayudarte</p>
                  <h2 id="support-title">Asistencia del portal</h2>
                  <p>Cuéntanos qué necesitas y el equipo de soporte revisará tu solicitud.</p>
                </div>
                <form className="home-support-form" onSubmit={enviarSoporte}>
                  <label>Motivo<select value={supportForm.category} onChange={(event) => setSupportForm({ ...supportForm, category: event.target.value })}><option>Pagos</option><option>Gastos</option><option>Marketplace</option><option>Otro</option></select></label>
                  <label>Mensaje<textarea value={supportForm.message} onChange={(event) => setSupportForm({ ...supportForm, message: event.target.value })} rows="5" placeholder="Escribe aquí tu solicitud" required /></label>
                  <button className="home-save-button" type="submit">Enviar solicitud</button>
                </form>
              </section>
            )}
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
              Sesión activa: <strong>{nombreActivo}</strong>
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
      {toastMessage && <Toast message={toastMessage} type="success" onClose={() => setToastMessage('')} />}
    </div>
  );
}

export default Home;
