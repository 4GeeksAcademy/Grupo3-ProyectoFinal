import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/addClient.css";
import Background from "../component/background";

export const AddClient = () => {
	const { store, actions } = useContext(Context);
	const [saveClient, setSaveClient] = useState({
		full_name: '',
		email: '',
		phone: '',
		description: '',
		address: '',
		country: '',
		company_name: '',
	});

	const handleChange=(e)=>{
		setSaveClient({
			...saveClient, 
			[e.target.name]: e.target.value
		})
	};
	
	const handleSubmit =(e)=>{
		e.preventDefault()
		actions.addClient(saveClient)
	}

	return (
		<Background>
			<form className="kris-my-form bg-white shadow-lg rounded-4 p-2 p-md-3 p-lg-4 p-xS-5 position-absolute top-50 start-50 translate-middle" 
			onSubmit={handleSubmit}>
			<div className="container">
				<div className="baki">
					<h1 className="fs-3 pb-4 text-center"><strong>Nuevo Cliente</strong></h1>
					<div className="image-profile">
						<img src="https://picsum.photos/150" alt=""/>
					</div>
					<div className="backe">
						<select name="country" onChange={handleChange}>
							<option>-- Elige un país --</option>
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
						<div className="grid pb-2">
							<input type="text" placeholder="Nombre de la Empresa" name="company_name"  onChange={handleChange}></input>
						</div>
						<div className="grid grid-2 pb-2">
							<input type="text" name="full_name"  placeholder="Nombre Completo *" required onChange={handleChange}></input>
							<input type="text" name="email" placeholder="Correo Electrónico *" required onChange={handleChange}></input>
						</div>
						<div className="grid grid-2 pb-2">
							<input type="text" name="phone" placeholder="Número Telefónico *" required onChange={handleChange}></input>
							<input type="text" name="address" placeholder="Residencia" onChange={handleChange}></input>
						</div>
						<textarea name="description" placeholder="Descripción de cliente" onChange={handleChange}></textarea>
						<div className="grid grid-3 pb-2">
							<div className="required-msg" required>Campos requeridos *</div>
								<button className="btn-grid" type="submit">
									<span className="front">Guardar</span>
								</button>
								<button className="btn-grid" type="reset">
                                    <Link  to={`/clientList`} className="text-white">Cancelar</Link>
								</button> 
						</div>
					</div>
				</div>
			</div>
		</form>
		</Background>
	);
};
