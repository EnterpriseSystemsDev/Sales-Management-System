import React from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import TuyenDung from "./Recruitment";

class ListRecruitment extends React.Component {
    render() {
        let {Recruitment} = this.props;
        const listTD = Recruitment.map((item, index) => {
            return (
              <TuyenDung
              key = {item.id}
              index={index}
              item = {item}
              />
            );
        });
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title ">Tin Tuyển Dụng</h3>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <tbody>
                        <tr>
                            <th>Tiêu Đề</th>
                            <th>Vị Trí</th>
                            <th>Lương</th>
                            <th>Số Lượng</th>
                            <th>Hình Thức</th>
                            <th>DeadLine</th>
                            <th>Mô Tả</th>
                            <th>Hành Động</th>
                        </tr>
                        {listTD}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state =>{
    return {
        Recruitment : state.Recruitment,

    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        ADDRecruitment : (task) => {
            dispatch(actions.addRecruitment(task))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ListRecruitment);



