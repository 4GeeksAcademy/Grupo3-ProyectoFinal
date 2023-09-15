import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

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
            alert('Se ha enviado un correo con instrucciones para restablecer la contraseña.');
        } else {
            alert('No se encontró ninguna cuenta asociada a ese correo.');
        }
    };

    return (
        <div className="container">
            <h2>Solicitud de Restablecimiento de Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email.email || ''}
                        onChange={(e) => setEmail({email: e.target.value})}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar Correo</button>
            </form>
            <Link to="/login">Volver a Iniciar Sesión</Link>
        </div>
    );
};

export default ResetPasswordRequest;