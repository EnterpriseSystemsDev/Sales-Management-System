import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import SanPham from "./Product";



class ListProduct extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            filterName: '',
            filterStatus:-1,
            sortBy : 'name',
            sortValue: 1,
            Version: [],
        }
    }

    componentDidMount(){
        this.props.listAllVersion();
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


    render() {

      // let {Version} = this.state;
        let {FilterTable,SortTable,Version} = this.props;
        console.log(Version);
        if(FilterTable.name){
            Version = Version.filter((task) =>{
               return (task.versionName.toLowerCase().indexOf(FilterTable.name.toLowerCase()) !== -1 ||
                   // task.nameProduct.toLowerCase().indexOf(FilterTable.name.toLowerCase()) !== -1 ||
                   // task.gia.toLowerCase().indexOf(FilterTable.name.toLowerCase()) !== -1 ||
                   task.description.toLowerCase().indexOf(FilterTable.name.toLowerCase()) !== -1 )
                   // task.size.toLowerCase().indexOf(FilterTable.name.toLowerCase()) !== -1);
            });
        }
        Version = Version.filter((task) =>{
            if(FilterTable.status === -1){
                return task;
            }
            else if(FilterTable.status === 0){
                return task.hot ;
            }
            else{
                return task.onSaleOff;
            }
        });

        if(SortTable.by === 'name'){
            Version.sort((a,b) =>{
                if(a.versionName > b.versionName){
                    return SortTable.value;
                }
                else if(a.versionName < b.versionName){
                    return -SortTable.value;
                }else {
                    return 0;
                }
            })
        }else {
            Version.sort((a,b) =>{
                if(a.price > b.price){
                    return SortTable.value;
                }
                else if(a.price < b.price){
                    return -SortTable.value;
                }else {
                    return 0;
                }
            })
        }

        const listSP = Version.map((task, index) => {
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
                    <h3 className="panel-title">Danh Sách Version</h3>
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
                            {/*<td> </td>*/}
                            {/*<td> </td>*/}
                            <td> </td>
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
                                                     Tên A - Z  <span className={(SortTable.by === 'name' && SortTable.value === 1) ?'fa fa-check' :''}/>
                                                </span>
                                           </a>
                                        </li>
                                        <li onClick={() => this.onClick('name', -1)}>
                                            <a role="button" className = "sort_selected">
                                                <span className="fa fa-sort-alpha-desc pr-5">
                                                     Tên Z - A  <span className={(SortTable.by === 'name' && SortTable.value === -1) ?'fa fa-check' :''}/>
                                                </span>
                                            </a>
                                        </li>
                                        <li role="separator" className="divider">

                                        </li>
                                        <li onClick={() => this.onClick('status',-1)}>
                                            <a role="button" >
                                                Giá Giảm Dần  <span className={(SortTable.by === 'status' && SortTable.value === -1) ?'fa fa-check' :''}/>
                                            </a>
                                        </li>
                                        <li  onClick={() => this.onClick('status',1)}>
                                            <a role="button"
                                               className = "sort_selected"
                                            >
                                                 Giá Tăng Dần  <span className={(SortTable.by === 'status' && SortTable.value === 1) ?'fa fa-check' :''}/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                            <tr>
                                <th>STT</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Mô Tả</th>
                                <th>Giá</th>
                                {/*<th>Size</th>*/}
                                {/*<th>Hình Ảnh</th>*/}
                                <th>Hành Động</th>
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
            tasks : state.tasks,
            Version: state.Version,
            editProduct : state.editProduct,
            FilterTable : state.FilterTable,
            SortTable: state.SortTable,
            DisplayFormVersion : state.DisplayFormVersion,
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
        listAllVersion : () =>{
            dispatch(actions.listAllVersionRequest());
        },


    };

};

export default connect(mapStateToProps,mapDispatchToProps) (ListProduct);



