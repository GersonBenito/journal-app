import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { starLoginEmailPassword, startGoogleLogin } from '../../redux/acciones/auth';

export const Login = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector( state => state.error );

    const [ values, handleInputChange ] = useForm({
        correo: 'gersonbenito4@gmail.com',
        password: '123456qwer'
    });

    const { correo, password } = values;

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        dispatch( starLoginEmailPassword( correo, password ) );
    }

    const handleGoogleLogin = () =>{
        dispatch( startGoogleLogin() );
    }


    return (
        <>
            <h3 className="auth__title mb-3" >Login</h3>

            <form 
                onSubmit={ handleSubmit } 
                className="animate__animated animate__fadeIn animate__faster"
            >

                <input
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    className="auth__input"
                    name="correo"
                    value={ correo }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    className="auth__input"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login con Google</p>

                    <div
                        className="google-btn"
                        onClick={ handleGoogleLogin }
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
