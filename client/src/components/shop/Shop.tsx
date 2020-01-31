import React from 'react';
import SideBarComponent from './sideBar/sideBarComponent';
import {Catalog} from './catalog/Catalog';
import Store from './store';
import './shop-style.css'
export default function Shop() {
    const store: Store = new Store();
    return (
        <div style={{ display: 'flex', height: "90vh" }}>
            <SideBarComponent store={store} />
            <Catalog store={store} />
        </div>
    )

}