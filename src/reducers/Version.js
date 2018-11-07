import * as types from './../constants/ActionTypes'

// //random id
// let s4 = () =>{
//     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// };
// let randomID = () =>{
//     return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
// };


const findIndex = (Version, id) => {
    let result = -1;
    Version.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
};
//let data = JSON.parse(localStorage.getItem('version'));
let initialState = [];
let myReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.LIST_ALL_VERSION:
            state = action.version;
            return [...state];
        case types.ADD_VERSION:
            state.push(action.version);
            return [...state];

        case types.UPDATE_VERSION:
            let {version} = action;
            index = findIndex(state, version.id);
            state[index] = version;
            return [...state];

        case types.DELETE_VERSION:
            let id = action.id;
            let index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];


        case types.UPDATE_STATUS_VERSION_HOT:
            var {task, id} = action;
            var index = findIndex(state, task.id);
            state[index].isHot = !state[index].isHot;
            return [...state];

        case types.UPDATE_STATUS_VERSION_SALE:
            var id = action.id;
            var {version} = action;
            var index = findIndex(state, version.id);
            state[index].isSale = !state[index].isSale;

            return [...state];

        default :
            return state;
    }
};
export default myReducer;