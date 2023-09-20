import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/clientInfo.css";
import Background from "../component/background";

export const ClientInfo = () => {
	const { store, actions } = useContext(Context);
    actions.getClientsById()


    return (
        <Background>
            <div className="fo">
                <div className="kris-the-card-container bg-white shadow-lg rounded-4 p-2 p-md-3 p-lg-4 p-xS-5 position-absolute top-50 start-50 translate-middle">
                    <Link  to={`/clientList`} className="btn btn-custom btn-sm mb-2 mb-md-3 me-2 justify-content-end text-white">Cancelar</Link>
                    <Link  to={`/editInfo`} className="btn btn-custom btn-sm mb-2 mb-md-3 me-2 justify-content-end text-white">Editar</Link>
                    <div>
                     
                        <img className="round" src="https://picsum.photos/150" alt=""/>
                            {store.clients.length == 0 ? "Cargando información": store.clients.map((item, index)=>{
                                return (
                                    <>
                                    <h3>{item.full_name}</h3>
                                    <h6>{item.company_name}</h6>
                                    <p>{item.description}</p>
                                    <div className="buttons">
                                        <button className="btn btn-custom btn-sm mb-2 mb-md-3 me-2 justify-content-end text-white">
                                            Añadir Proyecto
                                        </button>
                                            <button className="btn btn-custom btn-sm mb-2 mb-md-3 me-2 justify-content-end text-white">
                                                Añadir cotización 
                                            </button>
                                    </div>
                                    <div className="skills">
                                        <h6>Información de cliente</h6>
                                        <ul>
                                            <li>{item.address}</li>
                                            <li>{item.country}</li>
                                            <li>{item.phone}</li>
                                            <li>{item.email}</li> 
                                        </ul>
                                    </div>
                                    </>
                                );
                            })};
                    </div>
                </div>
            </div>
        </Background> 
        
    )
}