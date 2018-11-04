import * as types from './../constants/ActionTypes'

//random id
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

let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data ? data : [];
let myReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_PRODUCT:
            let newTaskProducts = {
                id: action.task.id,
                tensp: action.task.tensp,
                //version:action.task.version,
                brand: action.task.brand,
                //gia:  action.task.gia,
                //size:  action.task.size,
                mota:  action.task.mota,
               // hinhanh:  action.task.hinhanh,
                //Sale : action.task.Sale ,
                //isHot: action.task.isHot ,
                //isSale:action.task.isSale,
            };
                if(!newTaskProducts.id){
                    newTaskProducts.id = randomID();
                    state.push(newTaskProducts);
                }else {
                   let index = findIndex(state,newTaskProducts.id);
                   state[index] = newTaskProducts;
                }
            localStorage.setItem('tasks' , JSON.stringify(state));
            return [...state];

        case types.DELETE_PRODUCT:
            let id = action.id;
            let index = findIndex(state,id);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        default : return state;
    }
};
export default myReducer;