import * as types from './../constants/ActionTypes'

let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
let randomID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
};


const findIndex = (tasks, id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
};


let data = JSON.parse(localStorage.getItem('Recruitment'));
let initialState = data ? data : [];
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_RECRUITMENT:
            return state;
        case types.ADD_RECRUITMENT:
            let newTaskRecruitment = {
                id: action.task.id,
                tieuDe: action.task.tieuDe,
                viTriTD: action.task.viTriTD,
                luongTD: action.task.luongTD,
                soLuong: action.task.soLuong,
                thoiGian: action.task.thoiGian,
                deadLine: action.task.deadLine,
                moTaTD: action.task.moTaTD,
            };
            if (!newTaskRecruitment.id) {
                newTaskRecruitment.id = randomID();
                state.push(newTaskRecruitment);
            } else {
                let index = findIndex(state, newTaskRecruitment.id);
                state[index] = newTaskRecruitment;
            }
            // state.push(newTask);
            localStorage.setItem('Recruitment', JSON.stringify(state));
            return [...state];

        case types.DELETE_RECRUITMENT:
            let id = action.id;
            let index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('Recruitment', JSON.stringify(state));
            return [...state];
        default :
            return state;
    }
};
export default myReducer;