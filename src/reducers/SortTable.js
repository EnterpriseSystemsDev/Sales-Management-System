import * as types from './../constants/ActionTypes'
let initialState = {
    by : 'name',
    value: 1
};
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_PRODUCT:
            return {
                by: action.sort.by,
                value: action.sort.value,
            };
        default: return state;
    }
};
export default myReducer;