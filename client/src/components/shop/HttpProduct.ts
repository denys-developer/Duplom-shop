const axios = require('axios').default;
let url = "http://localhost:8080/product";
class httpProduct {
    categories() {
        return new Promise((resolve, reject) => {
            axios.get(url + '/categories')
            .then((response: any) => {
                console.log(response);
                resolve(response.data);
            })
        })
    }
}
const http = new httpProduct();
export default http;