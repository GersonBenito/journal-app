import React from 'react';
import { Link } from 'react-router-dom';

export const Registro = () => {
    return (
        <>
            
            <h3 className="auth__title mb-3" >Registro</h3>

            <form>

                <input
                    type="text"
                    placeholder="Nombre"
                    autoComplete="off"
                    className="auth__input"
                    name="nombre"
                />

                <input
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    className="auth__input"
                    name="correo"
                />

                <input
                    type="text"
                    placeholder="Password"
                    autoComplete="off"
                    className="auth__input"
                    name="password"
                />

                <input
                    type="text"
                    placeholder="Confirmar password"
                    autoComplete="off"
                    className="auth__input"
                    name="password2"
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5 mt-5"
                >
                    Registrar
                </button>

                <div className="center">
                    <Link
                      to='/auth/login' 
                      className="link" 
                    >
                        Ya estas registrado?
                    </Link>
                </div>

            </form>

        </>
    )
}
