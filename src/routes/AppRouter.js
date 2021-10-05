import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Journal } from '../components/journal/Journal';
import { AuthRouter } from './AuthRouter';
import { auth } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../redux/acciones/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const [ cheking, setCheking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{

        auth.onAuthStateChanged( (user) =>{

            if( user?.uid ){

                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn(true);

            }else{

                setIsLoggedIn(false);

            }

            setCheking( false );

        })

    },[ dispatch, setCheking, setIsLoggedIn ]);

    if( cheking ){
        return(
            <h1>Cargando...</h1>
        )
    }

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoute path='/auth' isLoggedIn={ isLoggedIn } component={ AuthRouter } />
                    <PrivateRoute exact path='/' isLoggedIn={ isLoggedIn } component={ Journal } />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
