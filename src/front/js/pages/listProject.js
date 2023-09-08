import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../component/background";

export const ListProject = () => {

    return (
        <>
            <Background>
                <div className="cards position-absolute top-0 start-50 translate-middle-x">
                    <p className="fs-1 mb-0 ms-1 pt-0 pt-md-2 pt-lg-3">Proyectos</p>
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-custom btn-sm mb-2 mb-md-3 me-2">Agregar</button>
                    </div>
                    <div className="row row-cols-auto g-4 d-flex justify-content-center">
                        <div className="col w-auto">
                            <div className="card rounded-4 shadow">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Nombre Proyecto</h5>
                                    <p className="card-text">Cliente asociado</p>
                                    <div className="d-flex justify-content-evenly">
                                        <a type="button" className="btn btn-custom btn-sm text-center me-1">Eliminar</a>
                                        <a type="button" className="btn btn-custom btn-sm text-center">Detalles</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col w-auto">
                            <div className="card rounded-4 shadow">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Nombre Proyecto</h5>
                                    <p className="card-text">Cliente asociado</p>
                                    <div className="d-flex justify-content-evenly">
                                        <a type="button" className="btn btn-custom btn-sm text-center me-1">Eliminar</a>
                                        <a type="button" className="btn btn-custom btn-sm text-center">Detalles</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col w-auto">
                            <div className="card rounded-4 shadow">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Nombre Proyecto</h5>
                                    <p className="card-text">Cliente asociado</p>
                                    <div className="d-flex justify-content-evenly">
                                        <a type="button" className="btn btn-custom btn-sm text-center me-1">Eliminar</a>
                                        <a type="button" className="btn btn-custom btn-sm text-center">Detalles</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col w-auto">
                            <div className="card rounded-4 shadow">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Nombre Proyecto</h5>
                                    <p className="card-text">Cliente asociado</p>
                                    <div className="d-flex justify-content-evenly">
                                        <a type="button" className="btn btn-custom btn-sm text-center me-1">Eliminar</a>
                                        <a type="button" className="btn btn-custom btn-sm text-center">Detalles</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col w-auto">
                            <div className="card rounded-4 shadow">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Nombre Proyecto</h5>
                                    <p className="card-text">Cliente asociado</p>
                                    <div className="d-flex justify-content-evenly">
                                        <a type="button" className="btn btn-custom btn-sm text-center me-1">Eliminar</a>
                                        <a type="button" className="btn btn-custom btn-sm text-center">Detalles</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Background >
        </>
    );


}

export default ListProject;