import * as types from './../constants/ActionTypes'
let initialState = false;
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_THEME:
              return !state;
        default : return state;
    }
};
export default myReducer;