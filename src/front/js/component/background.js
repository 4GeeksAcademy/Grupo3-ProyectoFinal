import React from "react";
import { Link } from "react-router-dom";

export const Background = () => {
    return (
        <div className="container-fluid min-vh-100 d-flex p-md-3 p-lg-4 p-xl-5">
            <div className="background w-100 rounded-5 shadow-lg m-5 position-relative">
                <div className="z-1 navbar navbar-expand-lg sidebar flex-column h-100 rounded-5 shadow-lg p-md-3 p-lg-4 p-xl-5 position-absolute">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mb-auto" id="navbarToggler">
                            <nav className="nav flex-column">
                                <img src="https://picsum.photos/200" alt="Nombre del Usuario" className="user-photo mx-auto rounded-circle" />
                                <p className="fw-bold text-center text-white pt-2 pb-4">Nombre del Usuario</p>
                                <Link className="nav-link text-white" to="#"><i className="fa-solid fa-folder-tree icon-link"></i> Proyectos</Link>
                                <Link className="nav-link text-white" to="#"><i className="fa-solid fa-user-group icon-link"></i> Clientes</Link>
                                <Link className="nav-link text-white" to="#"><i className="fa-solid fa-hand-holding-dollar icon-link"></i> Cotizaciones</Link>
                                <div className="flex-grow-1"></div>
                                <Link className="nav-link text-white" to="#"><i className="fa-solid fa-gear icon-link"></i> Configuración</Link>
                                <Link className="nav-link text-white" to="#"><i className="fa-solid fa-right-from-bracket icon-link"></i> Cerrar Sesión</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Background;
