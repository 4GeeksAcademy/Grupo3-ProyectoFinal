import React, { useContext } from 'react'
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

const Register = () => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context);
    store.signup ? navigate('/login') : null
    const handleChangeSignIn = (e) => {
        actions.handleChange(e, "signup")
    }
    return (
        <div
            className=" RegistroUsuarioDiv container d-flex justify-content-center align-items-center"
            style={{
                height: "32rem",
            }}
        >
            <form noValidate onSubmit={e => { e.preventDefault(); actions.signUpUser(), e.target.reset() }}>
                <h2 className="tituloRegistro mb-4">Registrar Usuario</h2>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Nombre
                    </label>
                    <input
                        name='name'
                        type="name"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Ingrese su Nombre"
                        onChange={handleChangeSignIn}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Apellido
                    </label>
                    <input
                        name="last_name"
                        type="lastName"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Ingrese su Apellido"
                        onChange={handleChangeSignIn}
                    />
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                        Correo
                    </label>
                    <input
                        name='email'
                        type="email"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Ingrese su correo"
                        onChange={handleChangeSignIn}
                    />
                </div>

                <div className="mb-4">
                    <label for="exampleInputPassword1" className="form-label">
                        Contraseña
                    </label>
                    <input
                        name='password'
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Ingrese una contraseña"
                        onChange={handleChangeSignIn}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Registrarse
                </button>
                <div className="text-center mt-4">
                    <Link to="/login" className="btn btn-primary">Iniciar Sesión</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;