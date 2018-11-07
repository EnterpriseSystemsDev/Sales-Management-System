import * as types from './../constants/ActionTypes'

let initialState = {
    id: '',
    nameProduct: '',
    version: '',
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
        case types.EDIT_VERSION:
            //console.log(action);
            return action.version;

        default:
            return state;
    }
};
export default myReducer;
