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
import AdminPanel from './shop/admin_panel/AdminPanel';
import Card from './shop/product-card/Card';
export default function App() {
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
                <Route exact path="/shop">
                    <Shop />
                </Route>
                <Route path="/admin-panel">
                    <AdminPanel />
                </Route>

                <Route path="/shop/:id" component={Card} />

            </Switch>
            <Redirect from="/" to="shop" />

        </>

    )

}