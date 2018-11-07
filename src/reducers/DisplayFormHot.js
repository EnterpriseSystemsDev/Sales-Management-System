import * as types from './../constants/ActionTypes'

let initialState = false;
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_FORM_HOT:
            return !state;
        case types.CLOSE_FORM_HOT:
            return false;

        default :
            return state;
    }
};
export default myReducer;