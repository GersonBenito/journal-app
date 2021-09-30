import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <>
            <h3 className="auth__title mb-3" >Login</h3>

            <form>

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

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login con Google</p>

                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>


                </div>

                <div className="center">
                    <Link
                      to='/auth/register' 
                      className="link" 
                    >
                        Crear nueva cuenta
                    </Link>
                </div>

            </form>

        </>
    )
}
