import * as types from './../constants/ActionTypes'
let initialState = false;
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_FORM_STORE:
            return !state;
        case types.CLOSE_FORM_STORE:
            return false;

        default : return state;
    }
};
export default myReducer;