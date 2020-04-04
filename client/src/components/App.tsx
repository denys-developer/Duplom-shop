import React, {useEffect} from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Header from './header/Header';
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import Shop from './shop/Shop';
import AdminPanel from './shop/admin_panel/AdminPanel';
import Card from './shop/product-card/Card';
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions";
import SideBarComponent from "./shop/sideBar/sideBarComponent";
import Basket from "./shop/basket/Basket";
import ProductCard from "./shop/product-card/ProductPage";

export default function App() {
    const dispatch =  useDispatch();
    useEffect(()=>{
        dispatch( getAllProducts() );
    },[]);

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
    <Route path="/basket" component={Basket}/>
    <Route path="/product/:id" component = {ProductCard}/>

    </Switch>
    <Redirect from="/" to="shop" />
</>
)
}
