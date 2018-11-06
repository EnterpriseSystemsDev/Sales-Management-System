import axios from "axios";
import {ACCESS_TOKEN, API_BASE_URL} from "../Components/constants";

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Account-Role': 'ROLE_CUSTOMER'
    });

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(registerRequest) {
    return request({
        url: API_BASE_URL + "/auth/register",
        method: 'POST',
        body: JSON.stringify(registerRequest)
    });
}

export default function callApi(endpoin, method = 'GET', body) {
    //console.log(endpoin);
    return axios({
        method: method,
        url: 'http://5bdc5e5b433b4f0013e6e0c4.mockapi.io/api/' + endpoin,
        data: body
    }).catch(err => {
        console.log(err);
    });
};