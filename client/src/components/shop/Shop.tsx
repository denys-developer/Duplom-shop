import React from 'react';
import SideBarComponent from './sideBar/sideBarComponent';
import Store from './store';
export default class Shop extends React.Component {
    store: Store;
    constructor(props: Readonly<{}>) {
        super(props);
        this.store = new Store();
    }
    render() {
        return (
            <div>
                <SideBarComponent store={this.store}/>
            </div>
        )
    }
}