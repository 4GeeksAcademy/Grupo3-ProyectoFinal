import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Background = (props) => {
    const [isMenuOpen, setMenuOpen] = useState(false); // Estado para el menú de hamburguesa

    return (
        <div className="container-fluid p-0 background">
            {/* Menu hamburguesa*/}
            <nav className="navbar navbar-light d-lg-none">
                <button className="navbar-toggler" type="button" onClick={() => setMenuOpen(!isMenuOpen)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                    <button className="close-menu-btn" onClick={() => setMenuOpen(false)}>X</button>
                    <div className="user-section">
                        <div className="user-photo">
                            <img src="https://picsum.photos/200" alt="Nombre del Usuario" />
                        </div>
                        <div className="user-name">Nombre del Usuario</div>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="#"><i className="fas fa-file"></i>Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Clientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Cotizaciones</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Configuración</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Cerrar Sesión</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Barra lateral pantallas grandes */}
            <div className="navbarStyle position-absolute d-none d-lg-flex">
                <div className="user-section">
                    <div className="user-photo">
                        <img src="https://picsum.photos/200" alt="Nombre del Usuario" />
                    </div>
                    <div className="user-name">Nombre del Usuario</div>
                </div>
                <ul className="main-links m-0 p-0">
                    <li><Link to="#">Proyectos</Link></li>
                    <li><Link to="#">Clientes</Link></li>
                    <li><Link to="#">Cotizaciones</Link></li>
                </ul>
                <ul className="bottom-links m-0 p-0">
                    <li><Link to="#">Configuración</Link></li>
                    <li><Link to="#">Cerrar Sesión</Link></li>
                </ul>
            </div>

            {
                props.children
            }

        </div>
    );
};

export default Background;
