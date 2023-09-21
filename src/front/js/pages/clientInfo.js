import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link} from "react-router-dom";
import "../../styles/clientInfo.css";
import Background from "../component/background";

export const ClientInfo = () => {
	const { store, actions } = useContext(Context);
    const [detail, setDetail] = useState({});
    const params = useParams();

    let findClients = ()=>{
        console.log(store.clients);
     let person = store.clients.find((item)=> item.id == params.id)
     console.log(person);
     setDetail(person)
    }
    
    useEffect(()=>{findClients()},[])
    // actions.getClientsById()


    return (
        <Background>
            <div className="fo">
                <div className="kris-the-card-container bg-white shadow-lg rounded-4 p-2 p-md-3 p-lg-4 p-xS-5 position-absolute top-50 start-50 translate-middle">
                    <Link  to={`/clientList`} className="btn btn-custom btn-sm mb-2 mb-md-3 me-2 justify-content-end text-white">Cancelar</Link>
                    <Link  to={`/editInfo/${params.id}`} className="btn btn-custom btn-sm mb-2 mb-md-3 me-2 justify-content-end text-white">Editar</Link>
                    <div>
                     
                        <img className="round" src="https://picsum.photos/150" alt=""/>
                                    <h3>{detail?.full_name}</h3>
                                    <h6>{detail?.company_name}</h6>
                                    <p>{detail?.description}</p>
                                    <div className="buttons">
                                        <Link  to={`/createProject`} className="btn btn-custom btn-sm mb-2 mb-md-3 me-2 justify-content-end text-white">Añadir Proyecto</Link>
                                        <Link  to={`/quotation/create`} className="btn btn-custom btn-sm mb-2 mb-md-3 me-2 justify-content-end text-white">Añadir Cotización</Link>
                                    </div>
                                    <div className="skills">
                                        <h6>Información de cliente</h6>
                                        <ul>
                                            <li>{detail?.address}</li>
                                            <li>{detail?.country}</li>
                                            <li>{detail?.phone}</li>
                                            <li>{detail?.email}</li> 
                                        </ul>
                                    </div>
                    </div>
                </div>
            </div>
        </Background> 
        
    )
}