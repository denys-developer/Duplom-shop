const axios = require('axios').default;
let url = "http://localhost:8080/";
interface Date {
    email: String,
    password: String
}
class HttpAuth {
    login(data: Date) {
        console.log('ewfew');
        axios.post(url + 'user/login', data)
            .then((response: any) => {
                console.log(response);
            })
    }
}
const http = new HttpAuth();
export default http;