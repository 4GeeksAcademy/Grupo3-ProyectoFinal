import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../../styles/home.css';

const Home = () => {
	const backgroundImageUrl = 'https://img.freepik.com/fotos-premium/escritorio-trabajo-negocios-blanco-computadora-portatil-planta-verde-gafas-oficina-cuaderno-lapiz-sobre-fondo-blanco-freelancer-negocios-linea-educacion-linea-vista-superior-endecha-plana_217116-562.jpg?w=1060';

	return (
		<div className="home-container">
			<div className="center-box">
				<div className="box-content">
					<h2 className="box-title">Bienvenido a FreeLancify</h2>
					<p className="box-description">La plataforma perfecta para freelancers</p>
					<button className="btn custom-button btn-primary" id ="btn-home"><Link to="/register" id="linkRegister">Registrarse</Link></button>
				</div>
			</div>
			<img src={backgroundImageUrl} alt="Fondo" className="background-image" />
		</div>
	);
};

export default Home;