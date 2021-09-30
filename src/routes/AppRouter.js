import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Journal } from '../components/journal/Journal';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/auth' component={ AuthRouter } />
                    <Route exact path='/' component={ Journal } />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
