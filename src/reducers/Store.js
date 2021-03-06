import * as types from './../constants/ActionTypes'

// //random id
// let s4 = () =>{
//     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// };
// let randomID = () =>{
//     return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
// };


const findIndex = (tasks, id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
};

//let data = JSON.parse(localStorage.getItem('store'));
let initialState = [];
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_PRODUCT_IN_STORE:
            state = action.store;
            return state;

        case types.ADD_PRODUCT_IN_STORE:

            state.push(action.store);
            return [...state];

        // case types.DELETE_VERSION:
        //     let id = action.id;
        //     let index = findIndex(state,id);
        //     state.splice(index, 1);
        //     localStorage.setItem('version', JSON.stringify(state));
        //     return [...state];
        //
        // case types.UPDATE_STATUS_VERSION_HOT:
        //     var id = action.id;
        //     var index = findIndex(state,id);
        //     state[index].isHot = !state[index].isHot;
        //     localStorage.setItem('version', JSON.stringify(state));
        //     return [...state];
        //
        // case types.UPDATE_STATUS_VERSION_SALE:
        //     var id = action.id;
        //     var index = findIndex(state,id);
        //     state[index].isSale = !state[index].isSale;
        //     localStorage.setItem('version', JSON.stringify(state));
        //     return [...state];

        default :
            return state;
    }
};
export default myReducer;