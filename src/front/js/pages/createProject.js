import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../component/background";

export const CreateProject = () => {

    return (
        <>
            <Background />
            <div className="new-project bg-white rounded-4 p-3 p-lg-4 p-xl-5">
                <p className="fs-3 pb-4 text-center">Crea un nuevo proyecto</p>
                <form>
                    <div className="pb-2">
                        <label htmlFor="client" className="form-label">Cliente asociado al proyecto</label>
                        <select className="form-select" id="client">
                            <option value="">Seleciona el cliente asociado a tu proyecto</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="pb-2">
                        <label htmlFor="projectName" className="form-label">Nombre del proyecto</label>
                        <input type="input" className="form-control" id="projectName" name="projectName" placeholder="Escribe aquí el nombre de tu proyecto" required />
                    </div>
                    <div className="pb-2">
                        <label htmlFor="projectDescription" className="form-label">Descripción del proyecto</label>
                        <input type="input" className="form-control" id="projectDescription" name="projectDescription" placeholder="Describe aquí tu proyecto" required />
                    </div>
                    <div className="pb-2">
                        <label htmlFor="startDate" className="form-label">Ingresa la fecha de inicio</label>
                        <input type="date" className="form-control" id="startDate" name="startDate" required />
                    </div>
                    <div className="pb-2">
                        <label htmlFor="endDate" className="form-label">Ingresa la fecha de finalización</label>
                        <input type="date" className="form-control" id="endDate" name="endDate" required />
                    </div>
                    <div className="pt-4 d-flex justify-content-end pe-1">
                        <button type="submit" className="btn btn-primary">Guardar proyecto</button>
                    </div>
                </form>
            </div>
        </>
    );


}

export default CreateProject;