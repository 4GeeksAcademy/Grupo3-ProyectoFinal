import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

const Login = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const handleChangeLogin = (e) => {

        actions.handleChange(e, "login")
    }

    store.isloged ? navigate('/listProject') : null;

    return (
        <div className="lContainer" id="lContainer">
            <div className="lItem" id="lItem">
                <div className="loginForm" id="loginForm">
                    <h2 id="tituloRegistro">Iniciar Sesión</h2>
                    <form noValidate onSubmit={(e) => { e.preventDefault(); actions.logInUser(); }}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Ingrese su correo"
                                onChange={handleChangeLogin}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">
                                <i className="bi bi-lock-fill"></i> Contraseña
                            </label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Ingrese su contraseña"
                                onChange={handleChangeLogin}
                            />
                        </div>
                        <div className="forgot-password-link" id="forgot-password-link">
                            <Link to="/reset_password_request">¿Olvidó su contraseña?</Link>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button type="submit" className="btn btn-primary">
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                    <p id="registerLink" style={{ textAlign: 'center' }}>¿No eres miembro? <Link to="/register">Registrarse</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
