import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/clientList.css";
import { Background } from "../component/background";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../store/appContext";

export const ClientList = () => {
	const { store, actions } = useContext(Context);
	actions.getClients()

	return (
		
		<Background>
		
			<div className="bar">
				<div className="container">
					<div className="back">
						<div className="col d-flex justify-content-end">
							<Link  to={`/addClient`} className="btn btn-info d-flex justify-content-end text-white">Agregar <FontAwesomeIcon icon={faPlus} className="add-icon" />	</Link>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="clientes-tit">
						<div className="row">
							<div className="col"><strong>Clientes</strong></div>
							<div className="col">
									<input id="search" type="search" placeholder="Search..."  required />
							</div>
						</div>
					</div>

					<div className="fondo">
						<div className="flex-grow-0">
						<div className="flex-grow-0">
							<table className="table">
								<thead>
									<tr>
									<th scope="col"><FontAwesomeIcon icon={faImage} className="add-icon" /></th>
									<th scope="col">Nombre</th>
									</tr>
								</thead>
								<tbody>
									{store.clients.length == 0 ? "Cargando": store.clients.map((item, index)=>{
										return (
										<tr>
											<th className="image-porfi" scope="row"><img src="https://picsum.photos/150" alt=""/></th>
											<td>{item.full_name}</td>
											<td>
											<button><FontAwesomeIcon icon={faSquareMinus} className="add-icon" /></button><Link  to={`/clientInfo`} className=" d-flex justify-content-end "> <FontAwesomeIcon icon={faInfo} className="add-icon" /></Link>
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
