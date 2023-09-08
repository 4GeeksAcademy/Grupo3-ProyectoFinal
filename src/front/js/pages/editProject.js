import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../component/background";

export const EditProject = () => {

    return (
        <>
            <Background>
                <div className="bg-white shadow-lg rounded-4 p-2 p-md-3 p-lg-4 p-xl-5 position-absolute top-50 start-50 translate-middle">
                    <p className="fs-3 text-center">Detalles del proyecto</p>
                    <div className="row border rounded-4 mb-2 py-2">
                        <div className="col-12 col-md-6">Cliente asociado</div>
                        <div className="col-12 col-md-6"><span className="bg-color rounded-3 px-2 px-md-3 py-1">Evil</span></div>
                    </div>
                    <div className="row border rounded-4 mb-2 py-2">
                        <div className="col-12 col-md-6">Nombre del proyecto</div>
                        <div className="col-12 col-md-6"><span className="bg-color rounded-3 px-2 px-md-3 py-1">Cositas</span></div>
                    </div>
                    <div className="row border rounded-4 mb-2 py-2">
                        <div className="col-12 col-md-6">Descripción del proyecto</div>
                        <div className="col-12 col-md-6 overflow-auto desc-overflow"><div className="bg-color rounded-3 px-2 px-md-3 py-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas blandit suscipit. Aenean in blandit sem. Pellentesque eleifend tellus vitae magna facilisis sodales. Nunc id ex eu purus consectetur imperdiet sit amet ac tortor. Duis feugiat massa ex, vel bibendum velit maximus ac. Ut vitae lacus sollicitudin, finibus felis sed, tempor quam. Ut vehicula augue eu metus finibus viverra. Nam quis metus turpis. Aliquam erat volutpat.</div></div>
                    </div>
                    <div className="row border rounded-4 mb-2 py-2">
                        <div className="col-12 col-md-6">Fecha de inicio</div>
                        <div className="col-12 col-md-6"><span className="bg-color rounded-3 px-2 px-md-3 py-1">01/01/2023</span></div>
                    </div>
                    <div className="row border rounded-4 mb-3 py-2">
                        <div className="col-12 col-md-6">Fecha de finalización</div>
                        <div className="col-12 col-md-6"><span className="bg-color rounded-3 px-2 px-md-3 py-1">07/09/2023</span></div>
                    </div>
                    <div className="text-end">
                        <button type="button" className="btn btn-custom btn-sm">Editar</button>
                    </div>
                </div>
            </Background>
        </>
    );


}

export default EditProject;