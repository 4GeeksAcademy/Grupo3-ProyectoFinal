import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/clientList.css";
import { Background } from "../component/background";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../store/appContext";

export const ClientList = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
 	actions.getClients();	
	}, []);

	const deleteThem = (clientId) => {
		actions.deleteClients(clientId);
	};
	
	return (
		
		<Background>
		
			<div className="bar">
				<div className="container">
					<div className="back">
						<div className="lagre col d-flex justify-content-end">
							<Link  to={`/addClient`} className="btn btn-custom btn-sm mb-2 mb-md-3 me-2 justify-content-end text-white">Agregar <FontAwesomeIcon icon={faPlus} className="add-icon" />	</Link>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="null">
						<div className="row">
							<div className="col fs-1 mb-0 ms-1 pt-0 pt-md-2 pt-lg-3"><strong>Clientes</strong></div>
						</div>
					</div>

					<div className="fondo">
						<div className="flex-grow-0">
						<div className="flex-grow-0">
							<table className="table">
								<thead>
									<tr>
									<th scope="col"><FontAwesomeIcon icon={faImage} className="add-icon" /></th>
									<th scope="col"><font color="#23CFB0">Nombre del cliente</font></th>
									</tr>
								</thead>
								<tbody>
									{store.clients.length == 0 ? "Ups... No existen clientes :(": store.clients.map((item, index)=>{
										return (
										<tr>
											<th className="image-porfi" scope="row"><img src="https://picsum.photos/150" alt=""/></th>
											<td>{item.full_name}</td>
											<td>
											<button className="btnClose" onClick={() => deleteThem('client_id')}><FontAwesomeIcon icon={faTrashCan} className="add-icon" /></button><Link  to={`/clientInfo`} className=" d-flex justify-content-end "> <FontAwesomeIcon icon={faInfo} className="add-icon" /></Link>
											</td>
										</tr>)
									})}
								</tbody>
							</table>
						</div>
						</div>
					</div>
				</div>
			</div>
		</Background>
		
		
	)
}
