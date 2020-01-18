import React, { Component } from 'react';
import Auth from './auth/Auth';
import Header from './header/Header';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
export default class App extends Component {
    render() {
        return (<>
        <Header/>
            <Router>
                <Switch>
                    <Route exact path="/auth">
                        <Auth />
                    </Route>
                </Switch>
                <Redirect from="/" to="auth" />

            </Router>
        </>

        )
    }
}