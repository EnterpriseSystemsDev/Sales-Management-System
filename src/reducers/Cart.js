import * as types from './../constants/ActionTypes'

//let data = JSON.parse(localStorage.getItem('Bill'));
//let initialState = data ? data : [];

let initialState = [


    ];
let myReducer = (state= initialState, action) => {
    let {item} = action;
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            state.push({
               item
            });
            return [...state];
        default : return state;
    }
};
export default myReducer;