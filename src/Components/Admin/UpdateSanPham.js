import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import $ from "jquery";

class UpdateSanPham extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            tensp : '',
            brand : '',
            gia : '',
            size : '',
            mota : '',
            hinhanh : '',
            Sale:'',
            isHot:false,
            isSale:false,
        }
    }
    onChange = (event) =>{
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    };
    UpdateSP = () =>{
        this.props.onUpdateStatus(this.props.task.id);

    };
    UpdateSPSale = () =>{
        this.props.onUpdateStatusSale(this.props.task.id);
    };
    render() {
        $(document).ready(function () {
            $(".aaa").click(function () {
                if ($(this).is(":checked")) {
                    $("#hidden_fields").show();
                } else {
                    $("#hidden_fields").hide();
                }
            });
        });
        let {task , index} = this.props;
        return (

            <tr key ={index}>
                <td>{index + 1}</td>
                <td>{task.tensp}</td>
                <td>{task.brand}</td>
                <td>{task.size}</td>
                <td>

                    <div className="material-switch pull-left ">
                        <input
                            onClick={this.UpdateSP}
                            id={task.id}
                            name="isHOT"
                            type="checkbox"
                            value={task.isHot}
                            onChange={this.onChange}
                            checked={task.isHot}
                        />
                        <label htmlFor={task.id} className="label-danger" />
                    </div>
                </td>
                {/*<td>*/}
                    {/*<div className="material-switch pull-left ">*/}
                        {/*<input*/}
                            {/*className="aaa"*/}
                            {/*onClick={this.UpdateSPSale}*/}
                            {/*id={task.id +1}*/}
                            {/*name="isSale"*/}
                            {/*type="checkbox"*/}
                            {/*value={task.isSale}*/}
                            {/*onChange={this.onChange}*/}
                            {/*checked={task.isSale}*/}
                        {/*/>*/}
                        {/*<label htmlFor={task.id +1} className="label-warning" />*/}
                    {/*</div>*/}
                {/*</td>*/}

                <td>
                    <button onClick={this.onEdit } type="button" className="btn btn-success">
                        Cập nhật
                    </button>
                </td>
                {/*<td>*/}
                    {/*<input type="text"*/}
                           {/*id="hidden_fields" style={{display:'none'}}*/}
                           {/*className="form-control"*/}
                           {/*name="Sale"*/}
                           {/*value={task.Sale}*/}
                           {/*onChange={this.onChange}*/}
                           {/*placeholder="% Sale"*/}
                    {/*/>*/}
                {/*</td>*/}
            </tr>


        );


    }
}
const listProducts = state =>{
    return {
        tasks : state.tasks,
        displayForm: state.displayForm,
        editProduct : state.editProduct
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
        onUpdateStatus: (id) =>{
            dispatch(actions.updateStatus(id));
        },
        onUpdateStatusSale: (id) =>{
            dispatch(actions.updateStatusSale(id));
        },
    };

};

export default connect(listProducts,mapDispatchToProps) (UpdateSanPham);



