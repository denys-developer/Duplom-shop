import React from 'react';
import Store from '../store';
import { computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import http from '../HttpProduct';
interface Props {
    store: Store;
}
@observer
export default class Catalog extends React.Component<Props>{
    products: any;
    constructor(props: Props) {
        super(props);


    }
    componentWillMount() {
        http.products().then((products) => {
            this.products = products;

        })
    }
    componentWillUpdate() {
        http.products().then((products) => {
            this.products = products;

        })
    }
    render() {
        let categoryId = this.props.store.activeCategoryId;
        return (
            <div style={{ width: '100%' }}>
                {this.products}
            </div>


        )
    }
}