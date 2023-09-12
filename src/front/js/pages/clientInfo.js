import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/clientInfo.css";

export const ClientInfo = () => {
	const { store, actions } = useContext(Context);

	return (
            <>
            <div className="fo">
                <div className="card-container">
                    <Link  to={`/clientList`} className="pro">Cancelar</Link>
                    <img className="round" src="https://picsum.photos/150" alt=""/>
                    <h3>Kristel Corrales</h3>
                    <h6>Costa Rica</h6>
                    <p>User interface designer and <br/> front-end developer</p>
                    <div className="buttons">
                        <button className="primary">
                            Añadir Proyecto
                        </button>
                        <button className="primary ghost">
                            Añadir cotización
                        </button>
                    </div>
                    <div className="skills">
                        <h6>Información de cliente</h6>
                        <ul>
                            <li>Hatillo, San josé, Costa Rica</li>
                            <li>+506 8894-0467</li>
                            <li>Kristelestercorrales@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            
            </>
        );
    };
    