import * as types from './../constants/ActionTypes'


let initialState =[];
let myReducer = (state= initialState, action) => {

    switch (action.type) {
        case types.GET_ALL_USERS:
            console.log(action);
            state = action.users;
            return state;
            //return [...state];
        case types.REMOVE_USER:
            localStorage.removeItem('user');
            return state;

        default : return state;
    }
};
export default myReducer;