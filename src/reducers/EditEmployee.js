import * as types from './../constants/ActionTypes'
let initialState = {
    id : '',
    hoTen: '',
    gioiTinh:'',
    namSinh:  '',
    queQuan:  '',
    viTri: '',
    luong:  '',
    userName:  '',
    passWord:  '',
};
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_EMPLOYEE:
            //console.log(action);
            return action.task;

        default: return state;
    }
};
export default myReducer;