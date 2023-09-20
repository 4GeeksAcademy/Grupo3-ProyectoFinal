import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/background.css";

export const Background = (props) => {
    const { actions } = useContext(Context);

    const handleLogOut = () => {
        actions.logOut();
    }
    return (
        <div className="container-fluid min-vh-100 d-flex p-md-3 p-lg-4 p-xl-5">
            <div className="background w-100 rounded-5 shadow-lg m-5 position-relative">
                <div className="z-1 navbar navbar-expand-lg sidebar flex-column h-100 rounded-5 shadow-lg p-md-3 p-lg-4 p-xl-5 position-absolute">
                    <div className="container-fluid h-100">
                        <button className="navbar-toggler mb-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse h-100" id="navbarToggler">
                            <nav className="nav flex-column h-100">
                                {/* <nav className="flex-column h-100"> */}
                                <div className="d-flex flex-column align-items-center">
                                    <img src="https://picsum.photos/200" alt="Nombre del Usuario" className="user-photo rounded-circle" />
                                    <p className="fw-bold text-center text-white pt-2 pb-4">Nombre del Usuario</p>
                                </div>
                                <div className="mx-auto">
                                    <Link className="nav-link text-white" to="/listProject"><i className="fa-solid fa-folder-tree icon-link"></i> Proyectos</Link>
                                    <Link className="nav-link text-white" to="/clientList"><i className="fa-solid fa-user-group icon-link"></i> Clientes</Link>
                                    <Link className="nav-link text-white" to="/quotation/list"><i className="fa-solid fa-hand-holding-dollar icon-link"></i> Cotizaciones</Link>
                                </div>
                                <div className="mt-auto pb-5 pb-lg-0 mx-auto">
                                    <Link className="nav-link text-white" to="/profile"><i className="fa-solid fa-gear icon-link"></i> Perfil</Link>
                                    <Link className="nav-link text-white" to="/login" onClick={handleLogOut}><i className="fa-solid fa-right-from-bracket icon-link"></i> Cerrar Sesión</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {props.children}
            </div>

        </div>

    );
};

export default Background;