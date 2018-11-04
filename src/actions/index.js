import * as types from "../constants/ActionTypes";

export  const  changeTheme = () => {
    return{
        type: types.CHANGE_THEME
    }
};

export const ListAll = () => {
    return {
        type : types.LIST_ALL
    }
};

export const listAllVersion = () => {
    return {
        type : types.LIST_ALL_VERSION
    }
};

export const deleteVersion = () => {
    return {
        type : types.DELETE_VERSION
    }
};

export const addToCart = (item) => {
    return {
        type : types.ADD_TO_CART,
        item
    }
};
export const listCart = () => {
    return {
        type : types.LIST_CART
    }
};
export const ListEmployees = () => {
    return {
        type : types.LIST_EMPLOYEES
    }
};
export const addEmployee = (task) => {
    return {
        type : types.ADD_EMPLOYEE,
        task : task
    }
};
export const editEmployee = (task) => {
    return {
        type : types.EDIT_EMPLOYEE,
        task : task
    }
};

export const addRecruitment= (task) => {
    return {
        type : types.ADD_RECRUITMENT,
        task : task
    }
};
export const editRecruitment= (task) => {
    return {
        type : types.EDIT_RECRUITMENT,
        task : task
    }
};
export const deleteRecruitment = (id) => {
    return {
        type : types.DELETE_RECRUITMENT,
        id : id
    }
};
export const listRecruitment = () => {
    return {
        type : types.LIST_RECRUITMENT
    }
};
export  const  openForm = () => {
    return{
        type: types.OPENFORM
    }
};
export  const  openFormHot = () => {
    return{
        type: types.OPEN_FORM_HOT
    }
};
export  const  closeFormHot = () => {
    return{
        type: types.CLOSE_FORM_HOT
    }
};

export  const  openFormStore = () => {
    return{
        type: types.OPEN_FORM_STORE
    }
};
export  const  closeFormStore = () => {
    return{
        type: types.CLOSE_FORM_STORE
    }
};


export  const  openFormVersion = () => {
    return{
        type: types.OPEN_FORM_VERSION
    }
};
export  const  openFormEditVersion = () => {
    return{
        type: types.OPEN_FORM_EDIT_VERSION
    }
};
export  const  openFormRecruitment = () => {
    return{
        type: types.OPEN_FORM_RECRUITMENT
    }
};
export  const  closeFormRecruitment = () => {
    return{
        type: types.CLOSE_FORM_RECRUITMENT
    }
};

export  const  openFormWhenEdit = () => {
    return{
        type: types.OPEN_FORM_WHEN_EDIT
    }
};
export  const  closeForm = () => {
    return{
        type: types.CLOSEFORM
    }
};
export  const  closeFormVersion = () => {
    return{
        type: types.CLOSE_FORM_VERSION
    }
};

export  const  updateForm = () => {
    return{
        type: types.UPDATEFORM
    }
};
export  const  updateFormEmployee = () => {
    return{
        type: types.UPDATE_FORM_EMPLOYEE
    }
};
export  const  updateFormRecruitment = () => {
    return{
        type: types.UPDATE_FORM_RECRUITMENT
    }
};



export const deleteEmployee = (id) => {
    return {
        type : types.DELETE_EMPLOYEE,
        id : id
    }
};


export const editProDuct = (task) => {
    return {
        type : types.EDIT_PRODUCT,
        task : task
    }
};
export const ADDPRODUCT = (task) => {
    return {
        type : types.ADD_PRODUCT,
        task : task
    }
};
export const editVersion = (version) => {
    return {
        type : types.EDIT_VERSION,
        version : version
    }
};
export const addVersion = (version) => {
    return {
        type : types.ADD_VERSION,
        version : version
    }
};

export const addProductsInStore = (store) => {
    return {
        type : types.ADD_PRODUCT_IN_STORE,
        store : store
    }
};
export const listProductsInStore = () => {
    return {
        type : types.LIST_PRODUCT_IN_STORE
    }
};


export const deleteProduct = (id) => {
    return {
        type : types.DELETE_PRODUCT,
        id : id
    }
};


export  const  listFormHD = () => {
    return{
        type: types.LIST_FROM_BILL
    }
};

export const addFormHD = (task) => {
    return {
        type : types.ADD_FROM_BILL,
        task : task
    }
};
export const deleteBill = (id) => {
    return {
        type : types.DELETE_BILL,
        id : id
    }
};

export const updateStatus = (id) => {
    return {
        type : types.UPDATE_STATUS,
        id : id
    }
};
export const updateStatusVersionHot = (id) => {
    return {
        type : types.UPDATE_STATUS_VERSION_HOT,
        id : id
    }
};

export const updateStatusVersionSale = (id) => {
    return {
        type : types.UPDATE_STATUS_VERSION_SALE,
        id : id
    }
};

export const updateStatusSale = (id) => {
    return {
        type : types.UPDATE_STATUS_SALE,
        id : id
    }
};

export const filterTable = (filter) => {
    return {
        type : types.FILTER_TABLE,
        filter : filter
    }
};

export const searchProduct = (keyword) => {
    return {
        type : types.SEARCH_PRODUCT,
        keyword : keyword
    }
};
export const sortProduct = (sort) => {
    return {
        type : types.SORT_PRODUCT,
        sort : sort
    }
};


