import { observable, computed, action } from "mobx";
import http from './HttpProduct';
export default class Store {
    @observable activeCategoryId: number = 0;
    @observable products: any = 0;
    constructor() {
        this.setProducts();
    }
    @action
    setProducts() {
        http.products().then((response) => {
            this.products = response;
            console.log(response);
        })

    }
    getProducts() {
        return this.products;
    }
    get categoryId() {
        return this.activeCategoryId;
    }
    set categoryId(id: number) {
        this.activeCategoryId = id;

    }
}