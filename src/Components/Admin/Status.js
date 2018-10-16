import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import UpdateSanPham from "./UpdateSanPham";


class StatusSP extends React.Component {


    onChange = (event) =>{
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    };


    render() {
        let {tasks} = this.props;
        const listSP = tasks.map((task, index) => {
            return (
                <UpdateSanPham
                    key = {task.id}
                    index = {index}
                    task = {task}
                />
            );
        });

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Thay Đổi Trạng Thái Sản Phẩm</h3>

                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <tbody>
                        <tr>
                            <th>STT</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Hãng</th>
                            <th>Size</th>
                            <th>HOT</th>
                            <th>Sale</th>
                            {/*<th>Hành Động</th>*/}

                        </tr>
                        {listSP }
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

const listProducts = state =>{
    return {
        tasks : state.tasks,
        displayForm: state.displayForm,
        // editProduct : state.editProduct
    }

};
const mapDispatchToProps = (dispatch, props) => {
    return{
        delete_PRODUCT : (id) => {
            dispatch(actions.deleteProduct(id));
        },
        onUpDateForm : () => {
            dispatch(actions.updateForm());
        },

        onEditProduct: (task) =>{
            dispatch(actions.editProDuct(task));
        },
        // onUpdateStatus: (id) =>{
        //   dispatch(actions.updateStatus(id));
        // },
    };

};

export default connect(listProducts,mapDispatchToProps) (StatusSP);



