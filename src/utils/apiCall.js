import axios from "axios";

export default function callApi(endpoin,method = 'GET', body) {
    return axios({
        method : method,
        url : 'http://localhost:8080/footcare/api/'+ endpoin,
        data: body
    }).catch(err => {
        console.log(err);
    });
};