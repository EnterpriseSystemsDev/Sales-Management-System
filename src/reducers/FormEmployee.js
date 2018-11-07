import * as types from './../constants/ActionTypes'

let initialState = false;
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_FORM_RECRUITMENT:
            return !state;
        case types.CLOSE_FORM_RECRUITMENT:
            return false;
        case types.UPDATE_FORM_RECRUITMENT:
            return true;

        default :
            return state;
    }
};
export default myReducer;