import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/clientList.css";
import { Background } from "../component/background";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRegular } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../store/appContext";

export const ClientList = () => {
	const { store, actions } = useContext(Context);

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
								<form class="d-flex">
									<input class="form-control me-2 rounded"  placeholder="Search" aria-label="Search"></input>
								</form>
							</div>
						</div>
					</div>

					<div className="fondo">
						<div className="flex-grow-0">
							<div className="row">
								<div className="image-porfi col">
									<img src="https://picsum.photos/150" alt=""/>
								</div>
								<div className="text-description col">Name, lastName</div>
								<div className="text-description col">Email</div>
								<div className="text-description col">
									<Link  to={`/clientInfo`} className="btn"> <FontAwesomeIcon icon={faPlus} className="add-icon" />	</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Background>
		
		
	)
}
