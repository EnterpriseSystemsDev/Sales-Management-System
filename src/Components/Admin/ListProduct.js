import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import SanPham from "./Product";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



class ListProduct extends React.Component {
     priceFormatter = (cell, row) =>{
        return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
    };
     options = () =>{
        afterDeleteRow: this.onAfterDeleteRow;
         afterSearch: this.afterSearch;
         handleConfirmDeleteRow: this.customConfirm
    };
     onAfterDeleteRow = (rowKeys) => {
        alert('The rowkey you drop: ' + rowKeys);
    };
     afterSearch = (searchText, result) =>{
        console.log('Your search text is ' + searchText);
        console.log('Result is:');
        for (let i = 0; i < result.length; i++) {
            console.log('Fruit: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
        }
    };
    customConfirm = (next, dropRowKeys) => {
        const dropRowKeysStr = dropRowKeys.join(',');
        if ((`(It's a custom confirm)Are you sure you want to delete ${dropRowKeysStr}?`)) {
            next();
        }
    };

    render() {
        const selectRowProp = {
            mode: 'checkbox',
            bgColor: 'pink',
           // hideSelectColumn: true,  // enable hide selection column.
            //clickToSelect: true  // you should enable clickToSelect, otherwise, you can't select column.
        };
        const cellEditProp = {
            mode: 'dbclick'
        };
        let {tasks} = this.props;
        const listSP = tasks.map((task, index) => {
            return (
                   <SanPham
                    key = {task.id}
                    index = {index}
                    task = {task}
                   />
            );
        });
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Sản phẩm</h3>
                </div>
                <div className="table-responsive">
                    <table  className="table table-striped  table-hover">
                        <tbody>
                        <tr>
                            <th>STT</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Hãng</th>
                            <th>Giá</th>
                            <th>Size</th>
                            <th>Mô Tả</th>
                            <th>Hình Ảnh</th>
                            <th>Hành Động</th>
                        </tr>
                        {listSP }
                        </tbody>
                    </table>
                </div>
                {/*<BootstrapTable pagination data={tasks} condensed={true} bordered={ false} search={ true } multiColumnSearch={ true } cellEdit={ cellEditProp } deleteRow={ true } selectRow={ selectRowProp } options={this.options } striped={true} hover={true}>*/}
                    {/*<TableHeaderColumn width='200' dataField="id" columnTitle hidden isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>*/}
                    {/*<TableHeaderColumn width='200' dataField="tensp" columnTitle   dataAlign="center" dataSort={true}>Tên Sản Phẩm</TableHeaderColumn>*/}
                    {/*<TableHeaderColumn width='200' dataField="brand" columnTitle dataSort={true} dataAlign='center'>Hãng</TableHeaderColumn>*/}
                    {/*<TableHeaderColumn width='200' dataField="gia" dataSort={true} dataAlign='center' dataFormat={this.priceFormatter}>Giá</TableHeaderColumn>*/}
                    {/*<TableHeaderColumn width='200' dataField="size" dataSort={true} dataAlign='center'>Size</TableHeaderColumn>*/}
                    {/*<TableHeaderColumn width='200' dataField="mota" dataSort={true} dataAlign='center'>Mô Tả</TableHeaderColumn>*/}
                    {/*<TableHeaderColumn width='200' dataField="isHot" dataSort={true} dataAlign='center'>Hot</TableHeaderColumn>*/}
                    {/*<TableHeaderColumn width='200' dataField="isSale" dataSort={true} dataAlign='center'>Sale</TableHeaderColumn>*/}
                    {/*<TableHeaderColumn width='200' dataField="Sale" dataSort={true} dataAlign='center'>% Sale</TableHeaderColumn>*/}
                {/*</BootstrapTable>*/}
            </div>

        );
    }
}

const listProducts = state =>{
        return {
            tasks : state.tasks,
            editProduct : state.editProduct
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
    };

};

export default connect(listProducts,mapDispatchToProps) (ListProduct);



