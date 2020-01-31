const axios = require('axios').default;
let url = "http://localhost:8080/product";

class httpProduct {
    categories() {
        return new Promise((resolve, reject) => {
            axios.get(url + '/categories')
                .then((response: any) => {
                    resolve(response.data);
                })
        })
    }
    products() {
        return new Promise((resolve, reject) => {
            axios.get(url + '/')
                .then((response: any) => {
                    resolve(response.data);
                })
        })
    }
    getDetails(id: string) {
        return new Promise((resolve, reject) => {
            axios.post(url + '/details', {
                id: id
            }).
                then((response: any) => {
                    resolve(response);
                })
        })
    }
}
const http = new httpProduct();
export default http;