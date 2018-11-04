import {combineReducers} from 'redux';
import tasks from './Product';
import displayForm from './DisplayForm';
import Employee from "./Employee";
import Recruitment from "./Recruitment";
import Bill from "./Bill";
import editProduct from './EditProduct';
import EditEmployee from './EditEmployee';
import EditRecruitment from "./EditRecruitment";
import FormEmployee from "./FormEmployee";
import FilterTable from "./FilterTable";
import SearchProduct from "./SearchProduct";
import SortTable from "./SortTable";
import ChangeTheme from "./ChangeTheme";
import Cart from "./Cart";
import Version from "./Version";
import EditVersion from "./EditVersion";
import Store from "./Store";
import DisplayFormVersion from "./DisplayFormVersion";
import DisplayFormHot from "./DisplayFormHot";
import DisplayFormStore from "./DisplayFormStore"

const myReducer = combineReducers({
    tasks : tasks,
    displayForm: displayForm,
    DisplayFormVersion,
    editProduct: editProduct,
    Employee: Employee,
    EditEmployee : EditEmployee,
    Recruitment : Recruitment,
    EditRecruitment: EditRecruitment,
    Bill: Bill,
    FormEmployee: FormEmployee,
    FilterTable: FilterTable,
    SearchProduct: SearchProduct,
    SortTable: SortTable,
    ChangeTheme:ChangeTheme,
    Cart: Cart,
    Version: Version,
    EditVersion :EditVersion,
    Store: Store,
    DisplayFormHot,
    DisplayFormStore,


});
export default myReducer;