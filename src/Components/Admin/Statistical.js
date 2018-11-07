import React from "react";
import {connect} from 'react-redux';
import * as actions from "../../actions";

class Statistical extends React.Component {
    componentWillMount() {
        const animation = () => {
            return 'animated bounceIn slowest';
        }
    };

    componentDidMount() {
        this.props.listAllVersion();
    }

    render() {
        let {Employee, tasks, Recruitment, Bill, Version} = this.props;
        const countHot = Version.map((item, index) => {
            return item.isHot;
        });
        const countSale = Version.map((item, index) => {
            return item.isSale;
        });
        return (
            <div>
                <div className="panel panel-default ">
                    <div className="panel-heading ">
                        <h2 className="panel-title ">Thống Kê</h2>
                    </div>
                    <div className="panel-body animatedParent animateOnce">
                        <div className="col-md-3 animated bounceIn slowest">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-user"/> {Employee.length}</h2>
                                <h4>Nhân Viên</h4>
                            </div>
                        </div>
                        <div className="col-md-3 animated bounceIn slowest">
                            <div className="well dash-box ">
                                <h2><span className="glyphicon glyphicon-list-alt"/> {Bill.length}</h2>
                                <h4>Đơn Hàng</h4>
                            </div>
                        </div>
                        <div className="col-md-3 animated bounceIn slowest">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-shopping-cart"/> {Version.length}</h2>
                                <h4>Sản Phẩm</h4>
                            </div>
                        </div>
                        <div className="col-md-3 animated bounceIn slowest">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-briefcase"/> {Recruitment.length}</h2>
                                <h4>Tuyển Dụng</h4>
                            </div>
                        </div>
                        <div className="col-md-6 animated bounceIn slowest">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-fire"/> {countHot.filter(Boolean).length}</h2>
                                <h4>Sản Phẩm HOT</h4>
                            </div>
                        </div>
                        <div className="col-md-6 animated bounceIn slowest">
                            <div className="well dash-box">
                                <h2><span className="fa fa-tags"/> {countSale.filter(Boolean).length}</h2>
                                <h4>Sản Phẩm Sale</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        Employee: state.Employee,
        tasks: state.tasks,
        Recruitment: state.Recruitment,
        Bill: state.Bill,
        Version: state.Version,

    }

};
const mapDispatchToProps = (dispatch, props) => {
    return {
        delete_PRODUCT: (id) => {
            dispatch(actions.deleteProduct(id));
        },
        onUpDateForm: () => {
            dispatch(actions.updateForm());
        },

        onEditProduct: (task) => {
            dispatch(actions.editProDuct(task));
        },
        onFilterTable: (filter) => {
            dispatch(actions.filterTable(filter));
        },
        onSortProduct: (sort) => {
            dispatch(actions.sortProduct(sort));
        },
        listAllVersion: () => {
            dispatch(actions.listAllVersionRequest());
        },


    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Statistical);



