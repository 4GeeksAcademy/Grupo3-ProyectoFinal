import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/addClient.css";

export const AddClient = () => {
	const { store, actions } = useContext(Context);

	return (
		<form className="my-form">
			<div className="container">
				<h1 className="fw-bold tx-white">Nuevo Cliente</h1>
				<div className="baki">
					<div className="image-profile">
						<img src="https://picsum.photos/150" alt=""/>
					</div>
					<div className="backe">
						<select>
							<option selected disabled>-- Elige un país --</option>
							<option>Argentina</option>			
							<option>Bolivia</option>
							<option>Chile</option>
							<option>Colombia</option>
							<option>Costa Rica</option>
							<option>Cuba</option>
							<option>Ecuador</option>
							<option>El Salvador</option>
							<option>Guatemala</option>
							<option>Haití</option>
							<option>Honduras</option>
							<option>Mexico</option>
							<option>Nicaragua</option>
							<option>Panamá</option>
							<option>Paraguay</option>
							<option>Perú</option>
							<option>República Dominicana</option>
							<option>Uruguay</option>
							<option>Venezuela</option>
							<option>Otro</option>      
						</select>
						<div className="grid">
							<input type="text" placeholder="Nombre de empresa" ></input>
						</div>
						<div className="grid grid-2">
							<input type="text" placeholder="Nombre" required></input>
							<input type="text" placeholder="Correo electrónico" required></input>
						</div>
						<div className="grid grid-2">
							<input type="text" placeholder="Número telefónico" required></input>
							<input type="text" placeholder="Residencia"></input>
						</div>
						<textarea placeholder="Descripción de cliente"></textarea>
						<div className="grid grid-3">
							<div className="required-msg text-white" required>Campos requeridos</div>
								<button className="btn-grid" type="submit">
									<span className="front">Guardar</span>
								</button>
								<button className="btn-grid" type="reset">
                                    <Link  to={`/clientList`} className="n">Cancelar</Link>
								</button> 
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};
