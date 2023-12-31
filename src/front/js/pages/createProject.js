import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Background from "../component/background";
import "../../styles/createProject.css";

export const CreateProject = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getClients();
    }, []);

    const [projectData, setProjectData] = useState({
        clientId: '',
        projectName: '',
        projectDescription: '',
        startDate: '',
        endDate: '',
        hourPrice: ''
    });

    const handleChange = (e) => {
        setProjectData({
            ...projectData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.postProjectRegister(projectData.clientId, projectData.projectName, projectData.projectDescription, projectData.startDate, projectData.endDate, projectData.hourPrice)
    };

    return (
        <>
            <Background>
                <div className="bg-white shadow-lg rounded-4 p-2 p-md-3 p-lg-4 p-xl-5 position-absolute top-50 start-50 translate-middle">
                    <p className="fs-3 pb-4 text-center">Crea un nuevo proyecto</p>
                    <form onSubmit={handleSubmit}>
                        <div className="pb-2">
                            <label htmlFor="client" className="form-label">Cliente asociado al proyecto</label>
                            <select className="form-select" id="clientId" name="clientId" onChange={handleChange}>
                                <option value="">Selecciona el cliente asociado a tu proyecto</option>
                                {store.clients.map((client) => {
                                    return (
                                        <option key={client.id} value={client.id}>{client.full_name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="pb-2">
                            <label htmlFor="projectName" className="form-label">Nombre del proyecto</label>
                            <input type="text" className="form-control" id="projectName" name="projectName" onChange={handleChange} placeholder="Escribe aquí el nombre de tu proyecto" required />
                        </div>
                        <div className="pb-2">
                            <label htmlFor="projectDescription" className="form-label">Descripción del proyecto</label>
                            <input type="text" className="form-control" id="projectDescription" name="projectDescription" onChange={handleChange} placeholder="Describe aquí tu proyecto" required />
                        </div>
                        <div className="pb-2">
                            <label htmlFor="startDate" className="form-label">Ingresa la fecha de inicio</label>
                            <input type="date" className="form-control" id="startDate" name="startDate" onChange={handleChange} required />
                        </div>
                        <div className="pb-2">
                            <label htmlFor="endDate" className="form-label">Ingresa la fecha de finalización</label>
                            <input type="date" className="form-control" id="endDate" name="endDate" onChange={handleChange} required />
                        </div>
                        <div className="pb-2">
                            <label htmlFor="hourPrice" className="form-label">Precio por hora</label>
                            <input type="number" className="form-control" id="hourPrice" name="hourPrice" onChange={handleChange} placeholder="Escribe aquí el precio por hora" required />
                        </div>
                        <div className="pt-4 d-flex justify-content-end pe-1">
                            <button to="/listProject" type="submit" className="btn btn-custom">Guardar proyecto</button>
                        </div>
                    </form>
                </div>
            </Background>
        </>
    );
}

export default CreateProject;
