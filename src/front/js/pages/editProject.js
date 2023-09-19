import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';
import Background from "../component/background";
import "../../styles/editProject.css";

export const EditProject = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const project = actions.getProjectById(id);
    }, [id]);

    const handleSave = () => {
        actions.updateProject(id, store.projectData);
        console.log(store.projectData)
        setIsEditing(false);
    };

    const handleInputChange = (key, value) => {
        actions.updateProjectData({
            [key]: value
        });
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const day = date.getUTCDate().toString().padStart(2, '0');
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
        const year = date.getUTCFullYear();
        return `${year}-${month}-${day}`;
    };

    return (
        <>
            <Background>
                <div className="bg-white shadow-lg rounded-4 p-4 p-lg-5 position-absolute top-50 start-50 translate-middle">
                    <p className="fs-3 text-center">Detalles del proyecto</p>
                    <div className="row border rounded-4 mb-2 py-2">
                        <div className="col-12 col-md-6">Cliente asociado</div>
                        <div className="col-12 col-md-6">
                            {isEditing ?
                                <><select className="bg-color rounded-3" value={store.projectData.client} onChange={(e) => handleInputChange('client', e.target.value)}>
                                    <option value="">Selecciona el cliente</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select></> :
                                <span className="bg-color rounded-3 px-2 px-md-3 py-1">{store.projectData.client}</span>}
                        </div>
                    </div>
                    <div className="row border rounded-4 mb-2 py-2">
                        <div className="col-12 col-md-6">Nombre del proyecto</div>
                        <div className="col-12 col-md-6">
                            {isEditing ?
                                <input type="text" className="bg-color rounded-3" value={store.projectData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Escribe el proyecto" required /> :
                                <span className="bg-color rounded-3 px-2 px-md-3 py-1">{store.projectData.name}</span>}
                        </div>
                    </div>
                    <div className="row border rounded-4 mb-2 py-2">
                        <div className="col-12 col-md-6">Descripción del proyecto</div>
                        <div className="col-12 col-md-6 overflow-auto desc-overflow">
                            {isEditing ?
                                <input type="text" className="bg-color rounded-3" value={store.projectData.description} onChange={(e) => handleInputChange('description', e.target.value)} placeholder="Describe el proyecto" required /> :
                                <div className="bg-color rounded-3 px-2 px-md-3 py-1">{store.projectData.description}</div>}
                        </div>
                    </div>
                    <div className="row border rounded-4 mb-2 py-2">
                        <div className="col-12 col-md-6">Fecha de inicio</div>
                        <div className="col-12 col-md-6">
                            {isEditing ?
                                <input type="date" className="bg-color rounded-3" value={formatDate(store.projectData.Date)} onChange={(e) => handleInputChange('Date', e.target.value)} required /> :
                                <span className="bg-color rounded-3 px-2 px-md-3 py-1">{formatDate(store.projectData.Date)}</span>}
                        </div>
                    </div>
                    <div className="row border rounded-4 mb-3 py-2">
                        <div className="col-12 col-md-6">Fecha de finalización</div>
                        <div className="col-12 col-md-6">
                            {isEditing ?
                                <input type="date" className="bg-color rounded-3" value={formatDate(store.projectData.deadline)} onChange={(e) => handleInputChange('deadline', e.target.value)} required /> :
                                <span className="bg-color rounded-3 px-2 px-md-3 py-1">{formatDate(store.projectData.deadline)}</span>}
                        </div>
                    </div>
                    <div className="row border rounded-4 mb-3 py-2">
                        <div className="col-12 col-md-6">Precio por hora</div>
                        <div className="col-12 col-md-6">
                            {isEditing ?
                                <input type="number" className="bg-color rounded-3" value={store.projectData.hour_price} onChange={(e) => handleInputChange('hour_price', e.target.value)} placeholder="Escribe precio/hora" required /> :
                                <span className="bg-color rounded-3 px-2 px-md-3 py-1">{store.projectData.hour_price}</span>}
                        </div>
                    </div>
                    <div className="text-end">
                        {isEditing ?
                            <button type="button" className="btn btn-custom btn-sm" onClick={handleSave}>Guardar</button> :
                            <button type="button" className="btn btn-custom btn-sm" onClick={() => setIsEditing(true)}>Editar</button>}
                    </div>
                </div>
            </Background>
        </>
    );
}

export default EditProject;
