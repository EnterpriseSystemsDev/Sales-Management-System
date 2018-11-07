import * as types from './../constants/ActionTypes'

let initialState = {
    id: '',
    tensp: '',
    brand: '',
    gia: '',
    size: '',
    mota: '',
    hinhanh: '',
    Sale: '',
    isHot: false,
    isSale: false,
};
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCT:
            //console.log(action);
            return action.task;

        default:
            return state;
    }
};
export default myReducer;