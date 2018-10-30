import * as types from './../constants/ActionTypes'

//let data = JSON.parse(localStorage.getItem('Bill'));
//let initialState = data ? data : [];
let initialState = [
        {
            brand : 'Jordan',
            name : 'Jordan 1 Bred',
            desc : 'qua đẹp',
            price: '200',
            quality: '1',
        },
        {
            brand : 'Yeezy',
            name : 'Yeezy 700',
            desc : 'qua đẹp',
            price: '220',
            quality: '1',
        }

    ];
let myReducer = (state= initialState, action) => {
    switch (action.type) {
        // case types.LIST_CART:
        //     return state;
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default : return state;
    }
};
export default myReducer;