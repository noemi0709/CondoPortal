import React from 'react';
import imagen from "../../../../login.jpg";

import appFirebase from "../../../../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';

const auth = getAuth(appFirebase);

const Login = () => {

  const [registrando, setRegistrado] = React.useState(false);
  const [mostrarPassword, setMostrarPassword] = React.useState(false);
  const [errorMensaje, setErrorMensaje] = React.useState('');

  const functionAutenticacion = async (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();
    setErrorMensaje('');

    try {
      if (registrando) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error("Error en la autenticación:", error);
      setErrorMensaje(
        error.code === 'auth/invalid-credential'
          ? 'El correo o la contraseña no son correctos.'
          : 'No se pudo completar la autenticación. Inténtalo de nuevo.'
      );
    }
  };

  return (
    <main className="login-page">
      <section className="login-panel" aria-labelledby="login-title">
        <div className="login-form-column">
          <div className="login-card">
            <p className="login-eyebrow">CondoPortal</p>
            <h1 id="login-title">{registrando ? 'Crea tu cuenta' : 'Bienvenido de nuevo'}</h1>
            <p className="login-subtitle">
              {registrando ? 'Regístrate para administrar tu comunidad.' : 'Ingresa para continuar.'}
            </p>

            <form onSubmit={functionAutenticacion} className="login-form">
                <input name="email" type="email" placeholder="Ingresar Email" className="caja_texto" required />
                <div className="password-wrap">
                  <input
                    name="password"
                    type={mostrarPassword ? "text" : "password"}
                    placeholder="Ingresar Contraseña"
                    className="caja_texto"
                    required
                  />
                  <button
                    type="button"
                    className="btn-show-password"
                    onClick={() => setMostrarPassword(!mostrarPassword)}
                  >
                    {mostrarPassword ? "Ocultar" : "Ver"}
                  </button>
                </div>
                <button type="submit" className="btnform">
                  {registrando ? "Registrarse" : "Iniciar sesión"}
                </button>
                {errorMensaje && <p className="login-error" role="alert">{errorMensaje}</p>}
              </form>
              <p className="texto">
                {registrando ? "Si ya tienes una cuenta," : "¿No tienes una cuenta?"}
                <button type="button" onClick={() => setRegistrado(!registrando)} className="brnswicth">
                  {registrando ? "Iniciar sesión" : "Regístrate"}
                </button>
              </p>
          </div>
        </div>
        <div className="login-image-column">
          <img src={imagen} alt="Edificio residencial" className="tamaño-imagen" />
        </div>
      </section>
    </main>
  );
};

export default Login;