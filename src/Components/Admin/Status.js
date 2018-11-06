import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import UpdateSanPham from "./UpdateProduct";


class StatusSP extends React.Component {

    componentDidMount(){
        this.props.listAllVersion();
    }


    render() {

        let {Version} = this.props;
        const listSP = Version.map((task, index) => {
            return (
                <UpdateSanPham
                    key = {task.id}
                    index = {index}
                    task = {task}
                />
            );
        });

        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Sản Phẩm HOT</h3>

                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <tbody>
                        <tr>
                            <th>STT</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Hãng</th>
                            <th>Size</th>
                            <th>HOT</th>
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
        Version : state.Version,
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
        listAllVersion : () =>{
            dispatch(actions.listAllVersionRequest())
        }


    };

};

export default connect(listProducts,mapDispatchToProps) (StatusSP);



