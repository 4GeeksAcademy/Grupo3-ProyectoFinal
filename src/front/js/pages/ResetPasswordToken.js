import React, { useContext, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import "../../styles/updatePassword.css";

const ResetPasswordToken = () => {
    const { actions } = useContext(Context);
    const [data, setData] = useState({});
    const [token] = useSearchParams();
    const resetToken = token.get('token')

    const handleChange = (e) => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const success = await actions.updatePassword(data, resetToken);

        if (success) {
            alert('Se ha enviado un correo con instrucciones para restablecer la contraseña.');
        } else {
            alert('No se encontró ninguna cuenta asociada a ese correo.');
        }
    };

    return (
        <div className="container" id="resetPasswordTokenContainer">
            <h2 id="resetPasswordTokenTitle">Restablecimiento de Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nueva Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        name='password'
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Confirmar Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        name='password'
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" id="btn-updatePassword">Restablecer Contraseña</button>
            </form>
            <Link to="/login">Volver a Iniciar Sesión</Link>
        </div>
    );
};

export default ResetPasswordToken;
