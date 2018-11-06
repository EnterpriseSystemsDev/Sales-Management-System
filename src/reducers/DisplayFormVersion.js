import * as types from './../constants/ActionTypes'
let initialState = false;
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_FORM_VERSION:
            return !state;
        case types.OPEN_FORM_EDIT_VERSION:
            return true;
        case types.CLOSE_FORM_VERSION:
            return false;
        // case types.OPEN_FORM_WHEN_EDIT:
        //     return true;
        // case types.UPDATE_FORM_EMPLOYEE:
        //     return true;

        default : return state;
    }
};
export default myReducer;