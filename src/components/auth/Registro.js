import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, unSetError } from '../../redux/acciones/error';
import { startRegisterWithEmailPasswordName } from '../../redux/acciones/auth';

export const Registro = () => {

    const dispatch = useDispatch();
    const { error } = useSelector( state => state.error );
    
    const [ values, handleInputChange ] = useForm({
        nombre: 'Gerson Benito',
        correo: 'gersonbenito4@gmail.com',
        password: '123456qwer',
        password2: '123456qwer',
    });


    const { nombre, correo, password, password2 } = values;

    const handleRegister = (e) =>{

        e.preventDefault();
        
        if(isFormValid()){

            handleRegisterEmailPassword();
        }

    }

    const isFormValid = () =>{

        if(nombre.trim().length === 0){
            
            dispatch( setError( 'El nombre es requerido' ) );

            return false

        }else if( !validator.isEmail( correo ) ){
            
            dispatch( setError('El correo no es valido') );

            return false;
        }else if( password !== password2){
            
            dispatch( setError( 'las cotraseñas no son iguales, o debe de teber mas 6 caracteres' ) );
            return false;
        }

        dispatch( unSetError() );

        return true;
    }

    const handleRegisterEmailPassword = () =>{

        dispatch( startRegisterWithEmailPasswordName( correo, password, nombre ) );
    }

    return (
        <>
            
            <h3 className="auth__title mb-3" >Registro</h3>
            {
                (error) && 
                    (
                        <div className="auth__alert-error">
                            { error }
                        </div>
                    )
            }
            <form onSubmit={ handleRegister } >

                <input
                    type="text"
                    placeholder="Nombre"
                    autoComplete="off"
                    className="auth__input"
                    name="nombre"
                    value={ nombre }
                    onChange={ handleInputChange }
                />

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

                <input
                    type="password"
                    placeholder="Confirmar password"
                    autoComplete="off"
                    className="auth__input"
                    name="password2"
                    value={ password2 }
                    onChange={ handleInputChange }
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
