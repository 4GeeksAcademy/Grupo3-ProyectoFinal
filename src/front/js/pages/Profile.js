import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Background from "../component/background";
import "../../styles/profile.css";

export const Profile = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getProfile();
        console.log("hola")
    }, []);
    console.log(store.current_user)
    return (
        <>
            <Background>
                <div className="bg-white shadow-lg rounded-4 p-2 p-md-3 p-lg-4 p-xl-5 position-absolute top-50 start-50 translate-middle">
                    <p className="fs-3 pb-4 text-center">PERFIL</p>

                    <div className="profile-card">
                        <div className="profile-content">
                            <div className="profile-column">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName" className="subrayado-bold">
                                        Nombre
                                    </label>
                                    <p className="label-box">{store.current_user.name}</p>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputLastName" className="subrayado-bold">
                                        Apellido
                                    </label>
                                    <p className="label-box">{store.current_user.last_name}</p>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="subrayado-bold">
                                        Correo
                                    </label>
                                    <p className="label-box">{store.current_user.email}</p>
                                </div>
                            </div>

                            <div className="profile-column">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPhone" className="subrayado-bold">
                                        Teléfono
                                    </label>
                                    <p className="label-box">{store.current_user.phone}</p>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleAboutMe" className="subrayado-bold">
                                        Sobre mí
                                    </label>
                                    <p className="label-box">{store.current_user.about_me}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Background>
        </>
    );
}

export default Profile;
