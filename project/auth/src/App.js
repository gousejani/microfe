import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';


import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
})

export default ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/auth/signin" component={Signin}></Route>
                    <Route exact path="/auth/signup" component={Signup}></Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}