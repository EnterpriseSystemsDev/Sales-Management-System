import React from "react";
import ThemNV from "./AddEmployee";
import DanhSachNV from "./ListEmployee";
import TuyenDung from "./AddRecruitment";
import DanhSachTD from "./ListRecruitment";
import {connect} from 'react-redux'
import * as actions from "../../actions";


class ManagementEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            hoTen: '',
            gioiTinh: '',
            namSinh: '',
            queQuan: '',
            viTri: '',
            luong: '',
            userName: '',
            passWord: ''

        }
    }

    themNV = () => {
        //let {editEmployees} = this.props;
        // if(editEmployees && editEmployees.id !== ''){
        //    this.props.openFormWhenEdit();
        // }else {
        this.props.openForm();
        this.props.closeFormRecruitment();
        //}
        this.props.editEmployees({
            id: '',
            hoTen: '',
            gioiTinh: '',
            namSinh: '',
            queQuan: '',
            viTri: '',
            luong: '',
            userName: '',
            passWord: ''
        });
    };

    themTD = () => {
        this.props.openFormRecruitment();
        this.props.closeForm();
        this.props.editRecruitment({
            id: '',
            tieuDe: '',
            viTriTD: '',
            luongTD: '',
            soLuong: '',
            thoiGian: '',
            deadLine: '',
            moTaTD: '',
        });
    };

    render() {
        let {FormEmployee, displayForm} = this.props;
        let themNV = displayForm ? <ThemNV/> : '';
        let themTD = FormEmployee === true ? <TuyenDung/> : '';
        return (
            <div>
                <div className="btn-group">
                    <button className="btn btn-success" style={{marginBottom: '15px', borderRadius: '10px'}}
                            onClick={this.themNV}>Thêm Nhân Viên
                    </button>
                    <button className="btn btn-info"
                            style={{marginBottom: '15px', borderRadius: '10px', marginLeft: '5px'}}
                            onClick={this.themTD}>Tuyển Dụng
                    </button>
                </div>
                <br/>
                {themNV}
                {themTD}
                <DanhSachNV/>
                <DanhSachTD/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        displayForm: state.displayForm,
        editProduct: state.editProduct,
        EditEmployee: state.EditEmployee,
        FormEmployee: state.FormEmployee,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        editEmployees: (task) => {
            dispatch(actions.editEmployee(task))
        },
        editRecruitment: (task) => {
            dispatch(actions.editRecruitment(task))
        },

        closeForm: () => {
            dispatch(actions.closeForm())
        },
        openForm: () => {
            dispatch(actions.openForm());
        },
        updateFormEmployee: () => {
            dispatch(actions.updateFormEmployee())
        },
        openFormWhenEdit: () => {
            dispatch(actions.openFormWhenEdit())
        },
        openFormRecruitment: () => {
            dispatch(actions.openFormRecruitment())
        },
        closeFormRecruitment: () => {
            dispatch(actions.closeFormRecruitment())
        },
    };

};
export default connect(mapStateToProps, mapDispatchToProps)(ManagementEmployee);



