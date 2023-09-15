import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

const Login = () => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context);
    const handleChangeLogin = (e) => {
        actions.handleChange(e, "login")
    }
    //store.isloged ? navigate('/login') : navigate('/registroUsuario')
    return (
        <div
            className=" RegistroUsuarioDiv container d-flex justify-content-center align-items-center"
            style={{
                height: "24rem",
            }}
        >
            <form noValidate onSubmit={e => { e.preventDefault(); actions.logInUser() }}>
                <h2 className="tituloRegistro mb-4">Iniciar Sesión</h2>
                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                        Correo
                    </label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Ingrese su correo"
                        onChange={handleChangeLogin}
                    />
                </div>

                <div className="mb-4">
                    <label for="exampleInputPassword1" class="form-label">
                        Contraseña
                    </label>
                    <input
                        name="password"
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Ingrese su contraseña"
                        onChange={handleChangeLogin}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};

export default Login;