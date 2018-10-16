import * as types from './../constants/ActionTypes'

let s4 = () =>{
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
let randomID = () =>{
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
};
const findIndex = (tasks, id) =>{
    let result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){
            result = index;
        }
    });
    return result;
};

let data = JSON.parse(localStorage.getItem('Bill'));
let initialState = data ? data : [];
let myReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.LIST_FROM_BILL:
            return state;
        case types.ADD_FROM_BILL:
            let newTaskBill = {
                id : action.task.id,
                tensp: action.task.tensp,
                gia: action.task.gia,
                size:  action.task.size,
                tenkh:  action.task.tenkh,
                diaChi: action.task.diaChi,
                ngayMua:  action.task.ngayMua,
                maTichDiem:  action.task.maTichDiem,
            };
            if(!newTaskBill.id){
                newTaskBill.id = randomID();
                state.push(newTaskBill);
            }else {
                let index = findIndex(state,newTaskBill.id);
                state[index] = newTaskBill;
            }
            //state.push(newTask);
            localStorage.setItem('Bill' , JSON.stringify(state));
            return [...state];

        case types.DELETE_BILL:
            let id = action.id;
            let index = findIndex(state,id);
            state.splice(index, 1);
            localStorage.setItem('Bill', JSON.stringify(state));
            return [...state];


        default : return state;
    }
};
export default myReducer;