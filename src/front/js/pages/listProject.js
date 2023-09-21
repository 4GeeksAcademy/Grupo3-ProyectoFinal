import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import Background from "../component/background";
import "../../styles/listProject.css";

export const ListProject = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getProjects();
    }, []);

    const handleDelete = (projectId) => {
        actions.deleteProject(projectId);
    };

    return (
        <>
            <Background>
                <div className="cards position-absolute top-0 start-50 translate-middle-x">
                    <p className="fs-1 mb-0 ms-1 pt-0 pt-md-2 pt-lg-3">Proyectos</p>
                    <div className="d-flex justify-content-end">
                        <Link to="/createProject" className="btn btn-custom btn-sm mb-2 mb-md-3 me-2">Agregar<i className="fa-solid fa-plus ms-2"></i></Link>
                    </div>
                    <div className="row row-cols-auto g-4 d-flex justify-content-center">
                        {store.projects.map((project) => {
                            return (
                                <div key={project.id} className="col w-auto">
                                    <div className="card rounded-4 shadow">
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{project.name}</h5>
                                            <p className="card-text">{project.description}</p>
                                            <div className="d-flex justify-content-evenly">
                                                <a type="button" className="btn btn-custom btn-sm text-center me-1" onClick={() => handleDelete(project.id)}>Eliminar</a>
                                                <Link to={`/editProject/${project.id}`} className="btn btn-custom btn-sm text-center">Detalles</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Background>
        </>
    );
}

export default ListProject;
