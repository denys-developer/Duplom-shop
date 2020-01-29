import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Header from './header/Header';
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import Shop from './shop/Shop';


export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                </Switch>
                <Redirect from="/" to="shop" />

            </>

        )
    }
}