import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';

class ListProductsInStore extends React.Component {

componentDidMount(){
    this.props.onListStore();
}

    render() {
        let {Store} = this.props;
        const listSP = Store.map((task, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.store}</td>
                    <td>{task.version}</td>
                    <td>{task.nameProduct}</td>
                    <td>{task.size}</td>
                    <td>{task.soluong}</td>
                </tr>
            );
        });
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Sản Phẩm Trong Store</h3>
                </div>
                <div className="table-responsive">
                    <table  className="table table-striped  table-hover">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Cửa Hàng</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Tên Version</th>
                            <th>Size</th>
                            <th>Số Lượng</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listSP }
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state =>{
    return {
        Store: state.Store,
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
        onFilterTable: (filter) =>{
            dispatch(actions.filterTable(filter));
        },
        onSortProduct: (sort) =>{
            dispatch(actions.sortProduct(sort));
        },
        onListStore : () =>{
            dispatch(actions.listProductsInStoreRequest());
        }
    };

};

export default connect(mapStateToProps,mapDispatchToProps) (ListProductsInStore);



