import React from "react";
import {connect} from 'react-redux'

class Statistical extends React.Component {
    render() {
        let { Employee,tasks, Recruitment , Bill} = this.props;

        return (
            <div>
                <div className="panel panel-default ">
                    <div className="panel-heading ">
                        <h2 className="panel-title ">Thống Kê</h2>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-user"/> {Employee.length}</h2>
                                <h4>Nhân Viên</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="well dash-box ">
                                <h2><span className="glyphicon glyphicon-list-alt" /> {Bill.length}</h2>
                                <h4>Đơn Hàng</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-shopping-cart" /> {tasks.length}</h2>
                                <h4>Sản Phẩm</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-briefcase"  /> {Recruitment.length}</h2>
                                <h4>Tuyển Dụng</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
const Count = state =>{
    return {
        Employee: state.Employee,
        tasks : state.tasks,
        Recruitment : state.Recruitment,
        Bill : state.Bill,

    }

};
export default  connect(Count,null) (Statistical);



