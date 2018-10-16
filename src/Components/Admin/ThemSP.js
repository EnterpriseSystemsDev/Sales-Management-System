import React from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import $ from "jquery"
class ThemSP extends React.Component {
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

    onClear = () =>{
        this.setState({
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

        });
    };

    closeForm = () =>{
      this.props.closeForm();
    };
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.addProduct(this.state);
        //xoa data
        this.onClear();
        this.closeForm();
    };

    componentWillMount(){
        if(this.props.editProduct && this.props.editProduct.id !== null){
            this.setState({
                id: this.props.editProduct.id,
                tensp : this.props.editProduct.tensp,
                brand : this.props.editProduct.brand,
                gia : this.props.editProduct.gia,
                size : this.props.editProduct.size,
                mota : this.props.editProduct.mota,
                hinhanh : this.props.editProduct.hinhanh,
                Sale:this.props.editProduct.Sale,
                isHot:this.props.editProduct.isHot,
                isSale:this.props.editProduct.isSale,
            });
        }
        else {
            this.onClear();
        }
    };

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.editProduct){
            this.setState({
                id: nextProps.editProduct.id,
                tensp :nextProps.editProduct.tensp,
                brand : nextProps.editProduct.brand,
                gia : nextProps.editProduct.gia,
                size : nextProps.editProduct.size,
                mota : nextProps.editProduct.mota,
                hinhanh : nextProps.editProduct.hinhanh,
                Sale:nextProps.editProduct.Sale,
                isHot:nextProps.editProduct.isHot,
                isSale:nextProps.editProduct.isSale,
            });
        }
        else {
            this.onClear();
        }
    }

    render() {
        //console.log(this.state);
        $(document).ready(function () {
            $("#someSwitchOptionWarning").click(function () {
                if ($(this).is(":checked")) {
                    $("#hidden_fields").show();
                } else {
                    $("#hidden_fields").hide();
                }
            });
        });
        return (
            <div className={!this.state.id ? 'panel panel-success' : 'panel panel-danger'}>
                <div className="panel-heading">
                    <h2 className="panel-title">
                        { !this.state.id ? 'Thêm Sản Phẩm' : 'Cập Nhật Sản Phẩm'}
                    </h2>
                </div>

                <form className="panel-body" onSubmit={this.onSubmit}>
                    <div className="form-group col-md-6">
                        <label>Tên Sản Phẩm:</label>
                        <input type="text"
                               className="form-control"
                               id="input1"
                               required = "cancacnad"
                               name="tensp"
                               value={this.state.tensp}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Brand:</label>
                        <input type="text"
                               className="form-control"
                               id="input2"
                               required
                               name = "brand"
                               value = {this.state.brand}
                               onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Giá:</label>
                        <input type="text"
                               className="form-control"
                               id="input3"
                               required
                               name="gia"
                               value={this.state.gia}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Size:</label>
                        <input type="text"
                               className="form-control"
                               id="input4"
                               required
                               name="size"
                               value={this.state.size}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Mô Tả:</label>
                        <textarea
                                  className="form-control"
                                  name="mota"
                                  id="input5"
                                  required
                                  value={this.state.mota}
                                  onChange={this.onChange}
                       />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Hình Ảnh:</label>
                        <input type="text"
                               className="form-control"
                               id="input6"
                               required
                               name="hinhanh"
                               value={this.state.hinhanh}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <div id="hidden_fields" style={{display:'none'}}>
                            <label style={{float:'left',marginRight:'20px'}} >(%): </label>
                            <input type="text"
                                   className="form-control"
                                   id="hidden_field"
                                   name="Sale"
                                   value={this.state.Sale}
                                   onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label style={{float:'left',marginRight:'20px'}}>HOT: </label>
                        <div className="material-switch pull-left ">
                            <input
                                id="someSwitchOptionDanger"
                                name="isHot"
                                type="checkbox"
                                value={this.state.isHot}
                                onChange={this.onChange}
                            />
                            <label htmlFor="someSwitchOptionDanger" className="label-danger" />
                        </div>
                        <div className=" col-md-6">
                            <label style={{float:'left',marginRight:'20px'}}>Sale: </label>
                            <div className="material-switch pull-left ">
                                <input
                                    id="someSwitchOptionWarning"
                                    name="isSale"
                                    type="checkbox"
                                    value={this.state.isSale}
                                    onChange={this.onChange}
                                />
                                <label htmlFor="someSwitchOptionWarning" className="label-warning" />
                            </div>
                        </div>
                    </div>



                    <div className="form-group col-md-6">
                        <button id="btnCheck" type="submit" className="btn btn-success "> Lưu </button>
                    </div>

                </form>
                <div className="alert alert-danger" style={{textAlign:'center',display:'none'}}>
                    <span >Danger! Indicates a dangerous or potentially negative action.</span>
                </div>
            </div>

        );

    }

}


const mapStateToProps = state =>{
    return {
        tasks : state.tasks,
        editProduct : state.editProduct,
        displayForm:state.displayForm,
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct : (task) => {
            dispatch(actions.ADDPRODUCT(task))
    },
        closeForm : () =>{
            dispatch(actions.closeForm())
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (ThemSP);



