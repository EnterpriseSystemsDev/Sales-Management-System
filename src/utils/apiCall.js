import axios from "axios";

export default function callApi(endpoin,method = 'GET', body) {
    //console.log(endpoin);
    return axios({
        method : method,
        url : 'http://5bdc5e5b433b4f0013e6e0c4.mockapi.io/api/'+ endpoin,
        data: body
    }).catch(err => {
        console.log(err);
    });
};