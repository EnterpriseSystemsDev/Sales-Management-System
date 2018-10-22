import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import SanPham from "./Product";
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ListProduct extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            filterName: '',
            filterStatus:-1,
            sortBy : 'name',
            sortValue: 1
        }
    }
    onChange = (event) =>{
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let filter ={
                name : name === 'filterName' ? value : this.state.filterName,
                status : name === 'filterStatus' ? value : this.state.filterStatus
        };
        this.props.onFilterTable(filter);
        this.setState({
           [name] : value
        });
    };
    onClick = (sortBy, sortValue) =>{
        this.props.onSortProduct({
            by: sortBy,
            value: sortValue
        });
    };
    //  priceFormatter = (cell, row) =>{
    //     return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
    // };
    //  options = () =>{
    //      afterDeleteRow: this.onAfterDeleteRow;
    //      afterSearch: this.afterSearch;
    //      handleConfirmDeleteRow: this.customConfirm
    // };
    //
    //  afterSearch = (searchText, result) =>{
    //     console.log('Your search text is ' + searchText);
    //     console.log('Result is:');
    //     for (let i = 0; i < result.length; i++) {
    //         console.log('Fruit: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
    //     }
    // };
    // customConfirm = (next, dropRowKeys) => {
    //     const dropRowKeysStr = dropRowKeys.join(',');
    //     if ((`(It's a custom confirm)Are you sure you want to delete ${dropRowKeysStr}?`)) {
    //         next();
    //     }
    // };

    render() {
        // const selectRowProp = {
        //     mode: 'checkbox',
        //     bgColor: 'pink',
        //    // hideSelectColumn: true,  // enable hide selection column.
        //     //clickToSelect: true  // you should enable clickToSelect, otherwise, you can't select column.
        // };
        // const cellEditProp = {
        //     mode: 'dbclick'
        // };
        let {tasks,FilterTable,SortTable} = this.props;
        if(FilterTable.name){
            tasks = tasks.filter((task) =>{
               return (task.tensp.toLowerCase().indexOf(FilterTable.name.toLowerCase()) !== -1 ||
                   task.brand.toLowerCase().indexOf(FilterTable.name.toLowerCase()) !== -1 ||
                   task.gia.toLowerCase().indexOf(FilterTable.name.toLowerCase()) !== -1 ||
                   task.mota.toLowerCase().indexOf(FilterTable.name.toLowerCase()) !== -1 ||
                   task.size.toLowerCase().indexOf(FilterTable.name.toLowerCase()) !== -1);
            });
        }

        tasks = tasks.filter((task) =>{
            if(FilterTable.status === -1){
                return task;
            }
            else if(FilterTable.status === 0){
                return task.isHot === (FilterTable.status === 0 ? true : false);
            }
            else{
                return task.isSale === (FilterTable.status === 1 ? true : false);
            }
        });

        if(SortTable.by === 'name'){
            tasks.sort((a,b) =>{
                if(a.tensp > b.tensp){
                    return SortTable.value;
                }
                else if(a.tensp < b.tensp){
                    return -SortTable.value;
                }else {
                    return 0;
                }
            })
        }else {
            tasks.sort((a,b) =>{
                if(a.gia > b.gia){
                    return SortTable.value;
                }
                else if(a.gia < b.gia){
                    return -SortTable.value;
                }else {
                    return 0;
                }
            })
        }

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
                        <thead>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text"
                                       className="form-control "
                                       name="filterName"
                                       onChange={this.onChange}
                                       value={this.state.filterName}
                                       placeholder="nhập sản phẩm cần tìm"
                                />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <select
                                    className="form-control"
                                    name = "filterStatus"
                                    onChange={this.onChange}
                                    value={this.state.filterStatus}
                                >
                                    <option value={-1}>Tất Cả</option>
                                    <option value={0}>Hot</option>
                                    <option value={1}>Sale</option>
                                </select>
                            </td>
                            <td></td>
                            <td>
                                <div className="dropdown">
                                    <button className="btn btn-dark dropdown-toggle"
                                            id="dropdownMenu1"
                                            type="button"
                                            data-toggle = "dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                    >
                                    Sắp Xếp
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li onClick={() => this.onClick('name',1)}>
                                           <a role="button"
                                              className = "sort_selected"

                                           >
                                                <span className="fa fa-sort-alpha-asc pr-5">
                                                    Tên A - Z
                                                </span>
                                           </a>
                                        </li>
                                        <li onClick={() => this.onClick('name', -1)}>
                                            <a role="button" className = "sort_selected">
                                                <span className="fa fa-sort-alpha-desc pr-5">
                                                    Tên Z - A
                                                </span>
                                            </a>
                                        </li>
                                        <li role="separator" className="divider">

                                        </li>
                                        <li onClick={() => this.onClick('status',-1)}>
                                            <a role="button">
                                                Giá Giảm Dần
                                            </a>
                                        </li>
                                        <li  onClick={() => this.onClick('status',1)}>
                                            <a role="button"
                                               className = "sort_selected"
                                            >
                                                Giá Tăng Dần
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
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
                        </thead>
                        <tbody>
                            {listSP }
                        </tbody>
                    </table>
                </div>
                {/*<BootstrapTable pagination data={tasks} condensed={true} bordered={ false} search={ true } multiColumnSearch={ true } striped={true} hover={true}>*/}
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

const mapStateToProps = state =>{
        return {
            tasks : state.tasks,
            editProduct : state.editProduct,
            FilterTable : state.FilterTable,
            SortTable: state.SortTable,
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
    };

};

export default connect(mapStateToProps,mapDispatchToProps) (ListProduct);



