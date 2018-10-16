import * as types from './../constants/ActionTypes'
var initialState = false;
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPENFORM:
            return !state;
        case types.UPDATEFORM:
            return true;
        case types.CLOSEFORM:
            return false;
        case types.OPEN_FORM_WHEN_EDIT:
            return true;
        case types.UPDATE_FORM_EMPLOYEE:
            return true;
        default : return state;
    }
};
export default myReducer;