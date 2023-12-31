import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/register.css";
import Navbar from "../component/navbar";

const Register = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    store.signup ? navigate('/login') : null;

    const handleChangeSignIn = (e) => {
        actions.handleChange(e, "signup");
    };

    return (
        <>
            <Navbar />
            <div className="RContainer" id="RContainer">
                <div className="lItem" id="lItem">
                    <div className="loginForm" id="loginForm">
                        <h2 id="tituloRegistro">Registro</h2>
                        <form noValidate onSubmit={(e) => { e.preventDefault(); actions.signUpUser(); e.target.reset(); }}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Ingrese su Nombre"
                                    onChange={handleChangeSignIn}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="last_name" className="form-label">
                                    Apellido
                                </label>
                                <input
                                    name="last_name"
                                    type="text"
                                    className="form-control"
                                    id="last_name"
                                    placeholder="Ingrese su Apellido"
                                    onChange={handleChangeSignIn}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Correo
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Ingrese su correo"
                                    onChange={handleChangeSignIn}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">
                                    Contraseña
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Ingrese una contraseña"
                                    onChange={handleChangeSignIn}
                                    required
                                />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <button type="submit" className="btn btn-primary" id="btn-register">
                                    Registrarse
                                </button>
                            </div>
                            <p id="registerLink" style={{ textAlign: 'center' }}>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Register;
