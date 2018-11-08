import axios from "axios";

// export default function callApi(endpoin,method = 'GET', body) {
//     return axios({
//         method : method,
//         url : 'http://localhost:8080/footcare/api/'+ endpoin,
//         data: body
//     }).catch(err => {
//         console.log(err);
//     });
// };

export function callApi(endpoin,method = 'GET', body) {
    return axios({
        method : method,
        url : 'http://5bdc5e5b433b4f0013e6e0c4.mockapi.io/api/'+ endpoin,
        data: body
    }).catch(err => {
        console.log(err);
    });
};

export default function callApi1(endpoin,method = 'GET', body) {
    return axios({
        method : method,
        url : 'http://localhost:8080/footcare/api/'+ endpoin,
        data: body
    }).catch(err => {
        console.log(err);
    });
};
