import React from "react";
import {connect} from 'react-redux'
import NhanVien from "./Employee";

//import * as actions from '../../actions/index';
class ListEmployee extends React.Component {
    render() {
        let {Employee} = this.props;
        const listEmployee = Employee.map((item, index) => {
            return (
                <NhanVien
                    key={item.id}
                    index={index}
                    item={item}
                />


            );
        });
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Nhân Viên</h3>
                </div>
                <div className="table-responsive">
                    <table className="table  table-hover ">
                        <tbody>
                        <tr>
                            <th>Họ Tên</th>
                            <th>Giới Tính</th>
                            <th>Năm Sinh</th>
                            {/*<th>Quê Quán</th>*/}
                            <th>Vị Trí</th>
                            <th>Lương</th>
                            <th>UserName</th>
                            <th>Hành Động</th>
                        </tr>
                        {listEmployee}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

const ListEmployees = state => {
    return {
        Employee: state.Employee,

    }

};
export default connect(ListEmployees, null)(ListEmployee);



