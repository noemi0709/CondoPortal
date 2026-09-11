import { getAuth, updateEmail, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import appFirebase from '../../credenciales';
import Toast from './Toast';
import './ajustes.css';

const auth = getAuth(appFirebase);

function Ajustes({ correoUsuario }) {
	const navigate = useNavigate();
	const [darkMode, setDarkMode] = useState(() => localStorage.getItem('home-theme') === 'dark');
	const [notificationsEnabled, setNotificationsEnabled] = useState(true);
	const [profileForm, setProfileForm] = useState({
		name: auth.currentUser?.displayName || '',
		email: correoUsuario || auth.currentUser?.email || '',
	});
	const [toastMessage, setToastMessage] = useState('');

	useEffect(() => {
		document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
		localStorage.setItem('home-theme', darkMode ? 'dark' : 'light');
	}, [darkMode]);

	function handleProfileChange(event) {
		const { name, value } = event.target;
		setProfileForm((currentForm) => ({ ...currentForm, [name]: value }));
	}

	async function guardarPerfil(event) {
		event.preventDefault();
		const user = auth.currentUser;
		if (!user) return;

		try {
			await updateProfile(user, { displayName: profileForm.name.trim() });
			if (profileForm.email.trim() !== user.email) {
				await updateEmail(user, profileForm.email.trim());
			}
			localStorage.setItem('profile-name', profileForm.name.trim());
			setToastMessage('Datos de inicio de sesión actualizados.');
		} catch (error) {
			console.error('No se pudo actualizar el perfil:', error);
			setToastMessage(error.code === 'auth/requires-recent-login'
				? 'Por seguridad, vuelve a iniciar sesión para cambiar el correo.'
				: 'No se pudieron guardar los datos del perfil.');
		}
	}

	function cambiarTema(event) {
		const isDark = event.target.checked;
		setDarkMode(isDark);
		localStorage.setItem('home-theme', isDark ? 'dark' : 'light');
	}

	return (
		<main className={`ajustes-page${darkMode ? ' ajustes-page--dark' : ''}`}>
			<section className="ajustes-panel" aria-labelledby="ajustes-title">
				<button className="ajustes-back-button" type="button" onClick={() => navigate('/')}>
					<span aria-hidden="true">←</span> Volver a Inicio
				</button>
				<div className="ajustes-heading">
					<p className="ajustes-eyebrow">Preferencias</p>
					<h1 id="ajustes-title">Ajustes de tu portal</h1>
					<p>Administra tus datos de acceso, apariencia y avisos del portal.</p>
				</div>
				<form className="ajustes-profile-form" onSubmit={guardarPerfil}>
					<label>Nombre de inicio de sesión<input name="name" value={profileForm.name} onChange={handleProfileChange} placeholder="Tu nombre" required /></label>
					<label>Correo electrónico<input name="email" type="email" value={profileForm.email} onChange={handleProfileChange} required /></label>
					<button className="ajustes-save-button" type="submit">Guardar datos</button>
				</form>
				<label className="ajustes-setting-row">
					<span><strong>Modo oscuro</strong><small>Cambia la apariencia de la pantalla de Inicio.</small></span>
					<input type="checkbox" checked={darkMode} onChange={cambiarTema} />
				</label>
				<label className="ajustes-setting-row">
					<span><strong>Notificaciones de actividad</strong><small>Recibe avisos sobre pagos, solicitudes y novedades.</small></span>
					<input type="checkbox" checked={notificationsEnabled} onChange={(event) => setNotificationsEnabled(event.target.checked)} />
				</label>
			</section>
			{toastMessage && <Toast message={toastMessage} type="success" onClose={() => setToastMessage('')} />}
		</main>
	);
}

export default Ajustes;
