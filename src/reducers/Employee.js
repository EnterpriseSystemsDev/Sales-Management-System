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


let data = JSON.parse(localStorage.getItem('Employee'));
let initialState = data ? data : [];
let myReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.LIST_EMPLOYEES:
            return state;
        case types.ADD_EMPLOYEE:
            let newTaskEmployee = {
                id : action.task.id,
                hoTen: action.task.hoTen,
                gioiTinh: action.task.gioiTinh,
                namSinh:  action.task.namSinh,
                queQuan:  action.task.queQuan,
                viTri: action.task.viTri,
                luong:  action.task.luong,
                userName:  action.task.userName,
                passWord:  action.task.passWord,
            };
            if(!newTaskEmployee.id){
                newTaskEmployee.id = randomID();
                state.push(newTaskEmployee);
            }else {
                let index = findIndex(state,newTaskEmployee.id);
                state[index] = newTaskEmployee;
            }
            //state.push(newTask);
            localStorage.setItem('Employee' , JSON.stringify(state));
            return [...state];

            case types.DELETE_EMPLOYEE:
            let id = action.id;
            let index = findIndex(state,id);
            state.splice(index, 1);
            localStorage.setItem('Employee', JSON.stringify(state));
            return [...state];


        default : return state;
    }
};
export default myReducer;