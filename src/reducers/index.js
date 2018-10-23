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
import ChangeTheme from "./ChangeTheme"
const myReducer = combineReducers({
    tasks : tasks,
    displayForm: displayForm,
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
    ChangeTheme:ChangeTheme

});
export default myReducer;