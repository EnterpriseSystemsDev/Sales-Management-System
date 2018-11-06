import * as types from './../constants/ActionTypes'


const findIndex = (tasks, id) =>{
    let result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){
            result = index;
        }
    });
    return result;
};



let initialState =  [];

let myReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            state =action.tasks;
            console.log(state);
            return state;
        case types.ADD_PRODUCT:
            // let newTaskProducts = {
            //     id: action.task.id,
            //     tensp: action.task.tensp,
            //     //version:action.task.version,
            //     brand: action.task.brand,
            //     //gia:  action.task.gia,
            //     //size:  action.task.size,
            //     mota:  action.task.mota,
            //    // hinhanh:  action.task.hinhanh,
            //     //Sale : action.task.Sale ,
            //     //isHot: action.task.isHot ,
            //     //isSale:action.task.isSale,
            // };
            //     if(!newTaskProducts.id){
            //         newTaskProducts.id = randomID();
            //         state.push(newTaskProducts);
            //     }else {
            //        let index = findIndex(state,newTaskProducts.id);
            //        state[index] = newTaskProducts;
            //     }
            // // //localStorage.setItem('tasks' , JSON.stringify(state));
            state.push(action.tasks);
            return [...state];

        case types.DELETE_PRODUCT:
            let id = action.id;
            let index = findIndex(state,id);
            state.splice(index, 1);
            //localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        default : return state;
    }
};
export default myReducer;