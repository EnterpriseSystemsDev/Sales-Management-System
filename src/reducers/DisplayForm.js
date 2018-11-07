import * as types from './../constants/ActionTypes'

let initialState = false;
let myReducer = (state = initialState, action) => {
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
        // case types.CHANGE_THEME:
        //     //return !state;
        //     console.log(state);

        default :
            return state;
    }
};
export default myReducer;