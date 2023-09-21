import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import "../../styles/resetPassword.css";
import Navbar from "../component/navbar";
import Swal from 'sweetalert2';

const ResetPasswordRequest = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            alert('Por favor, ingrese su correo electrónico.');
            return;
        }

        const success = await actions.resetPasswordRequest(email);

        if (success) {
            Swal.fire({
                icon: 'success',
                title: 'Correo enviado',
                text: 'Se ha enviado un correo con instrucciones para restablecer la contraseña.',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se encontró ninguna cuenta asociada a ese correo.',
            });
        }
    };

    return (
        <>
            <Navbar />
            <div className="pContainer" id="pContainer">
                <div className="pItem" id="pItem">
                    <div className="passwordForm" id="passwordForm">
                        <h2 id="resetPasswordTitle">Solicitud de Restablecimiento de Contraseña</h2>
                        <form onSubmit={handleSubmit} id="resetPasswordForm">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email.email || ''}
                                    onChange={(e) => setEmail({ email: e.target.value })}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" id="btn-password">Enviar Correo</button>

                        </form>
                        <Link to="/login">Cancelar</Link>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ResetPasswordRequest;
