import * as types from './../constants/ActionTypes'
let initialState = {
    name : '',
    status: -1
};
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            return {
                name : action.filter.name,
                status: parseInt(action.filter.status , 10)
            };
        default: return state;
    }
};
export default myReducer;