import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/clientInfo.css";
import Background from "../component/background";

export const ClientInfo = () => {
	const { store, actions } = useContext(Context);
    actions.getClients()


	{store.clients.length == 0 ? "Cargando...": store.clients.map((item, index)=>{
        return (
            <Background>
            <div className="fo">
                <div className="card-container">
                    <Link  to={`/clientList`} className="pro">Cancelar</Link>
                    <Link  to={`/editInfo`} className="proi">Editar</Link>
                    <div>
                     
                        <img className="round" src="https://picsum.photos/150" alt=""/>
                        <h3>{item.full_name}</h3>
                        <h6>{item.company_name}</h6>
                        <p>{item.description}</p>
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
                                <li>{item.address}</li>
                                <li>{item.country}</li>
                                <li>{item.phone}</li>
                                <li>{item.email}</li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Background> 
        )
    })} 
                   
            
    
    };
    