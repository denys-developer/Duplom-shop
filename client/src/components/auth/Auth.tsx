import React from 'react';
import Login from './login/Login';
import Register from './register/Register';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
export default class Auth extends React.Component {
    render() {
        return (

            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
                <Link to="/login">
                    Loign
                </Link>
                <Link to="/register">
                    Register
                </Link>
                <Redirect from="/auth" to="login" />

            </Router>

        )
    }
}