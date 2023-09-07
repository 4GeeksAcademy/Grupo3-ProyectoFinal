import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../component/background";

export const ListProject = () => {

    return (
        <>
            <Background>
                <div className="position-absolute top-0 start-50 translate-middle-x">
                    <div className="d-flex justify-content-between align-items-center pt-2 pt-lg-3 pt-xl-4 pt-xxl-5 pb-4">
                        <p className="fs-1">Proyectos</p>
                        <button type="button" className="btn btn-custom btn-sm">Agregar</button>
                    </div>
                    <div className="row row-cols-auto g-4">
                        <div className="col w-auto">
                            <div className="card rounded-4">
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
                            <div className="card rounded-4">
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
                            <div className="card rounded-4">
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
                            <div className="card rounded-4">
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
                            <div className="card rounded-4">
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