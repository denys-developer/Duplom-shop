import React from 'react';
import SideBarComponent from './sideBar/sideBarComponent';
import Catalog from './catalog/Catalog';
import Store from './store';
import './shop-style.css'
export default class Shop extends React.Component {
    store: Store;
    constructor(props: Readonly<{}>) {
        super(props);
        this.store = new Store();
    }
    render() {
        return (
            <div style={{display:'flex'}}>
                <SideBarComponent store={this.store} />
                <Catalog store={this.store} />
            </div>
        )
    }
}