import * as types from './../constants/ActionTypes'

let initialState = {
    id: '',
    tieuDe: '',
    viTriTD: '',
    luongTD: '',
    soLuong: '',
    thoiGian: '',
    deadLine: '',
    moTaTD: '',
};
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_RECRUITMENT:
            return action.task;
        default:
            return state;
    }
};
export default myReducer;