import { observable, computed, action } from "mobx";

export default class Store {
    @observable activeCategoryId: number = 0;
    constructor() {
    }
    get categoryId() {
        return this.activeCategoryId;
    }
    set categoryId(id: number) {
        this.activeCategoryId = id;
    }
}