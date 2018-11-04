import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import UpdateProductSale from "./UpdateProductSale";


class ListSale extends React.Component {


    render() {

        let {Version} = this.props;
        const listSP = Version.map((task, index) => {
            return (
                <UpdateProductSale
                    key = {task.id}
                    index = {index}
                    task = {task}
                />
            );
        });

        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title warning ">Thêm Sản Phẩm Sale</h3>

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
                            <th>Sale</th>
                            <th>% Sale</th>
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
        Version: state.Version,
    }

};
const mapDispatchToProps = (dispatch, props) => {
    return{

        onEditProduct: (task) =>{
            dispatch(actions.editProDuct(task));
        },

    };

};

export default connect(listProducts,mapDispatchToProps) (ListSale);



