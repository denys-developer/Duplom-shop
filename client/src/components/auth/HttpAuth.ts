import { Redirect } from "react-router-dom";

const axios = require('axios').default;
let url = "http://localhost:8080/";
interface Date {
    email: String,
    password: String
}
class HttpAuth {
    login(data: Date) {
        return new Promise<boolean>((resolve, reject) => {
            axios.post(url + 'user/login', data)
                .then((response: any) => {
                    resolve(response.data);
                })
        })

    }
    register(data: Date) {
        axios.post(url + 'user/register', data)
            .then((response: any) => {
                console.log(response);
            })
    }
}
const http = new HttpAuth();
export default http;