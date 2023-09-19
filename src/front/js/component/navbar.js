import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<>
			<nav className="navbar" id="myNavbar">
				<div className="nav-container">
					<NavLink exact to="/" className="nav-logo" id="logo">
						FreeLancify
						<i className="fas fa-code"></i>
					</NavLink>

					<ul className={click ? "nav-menu active" : "nav-menu"} id="menu">
						<li className="nav-item">
							<NavLink
								exact
								to="/"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Inicio
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/Nosotros"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Información
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/login"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Iniciar Sesión
							</NavLink>
						</li>
					</ul>
					<div className="nav-icon" onClick={handleClick} id="menuIcon">
						<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
