import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/clientInfo.css";

export const ClientInfo = () => {
	const { store, actions } = useContext(Context);
    let params = useParams();
    let findPeople = ()=>{
        let person = store.clients.find((item)=> item._id == params.id)
        setDetail(person)
       }
       
       useEffect(()=>{findPeople()},[store.clients])

	return (
            <>
            <div className="fo">
                <div className="card-container">
                    <Link  to={`/clientList`} className="pro">Cancelar</Link>
                    <img className="round" src="https://picsum.photos/150" alt=""/>
                    <h3>{detail?.properties?.full_name}</h3>
                    <h6>{detail?.properties?.country}</h6>
                    <p>{detail?.properties?.description}</p>
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
                            <li>{detail?.properties?.address}</li>
                            <li>{detail?.properties?.phone}</li>
                            <li>{detail?.properties?.email}</li>
                        </ul>
                    </div>
                </div>
            </div>

            
            </>
        );
    };
    