
const axios = require('axios').default;
let url = "http://localhost:8080/user";
interface Date {
    email: String,
    password: String
}
class httpAuth {
    login(data: Date) {
        return new Promise<boolean>((resolve, reject) => {
            axios.post(url + '/login', data)
                .then((response: any) => {
                    resolve(response.data);
                })
        })

    }
    register(data: Date) {
        axios.post(url + '/register', data)
            .then((response: any) => {
                console.log(response);
            })
    }
}
const http = new httpAuth();
export default http;