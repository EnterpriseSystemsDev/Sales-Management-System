import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import ThemSP from "./AddProduct";
import DanhSachSP from "./ListProduct";
import Version from "./Version"
import StatusSP from "./Status";
import AddStore from "./AddStore";
import ListProductsInStore from "./ListProductsInStore";


class ManagementProduct extends React.Component {
    onClear = () =>{
        this.setState({
            id: '',
            version:'',
            nameProduct : '',
            gia : '',
            size : '',
            mota : '',
            hinhanh : '',
            Sale:'',
            isHot:false,
            isSale:false,
        });
    };

    Status = () =>{
        this.props.openFormHot();
        this.props.closeFromVersion();
        this.props.closeForm();
        this.props.closeFromStore();
    };
    Version = () =>{
        let {displayForm} = this.props;
        this.props.openFormVersion();
        if(displayForm && displayForm === true){
            this.props.openForm();
        }
        this.props.closeFormHot();
        this.props.closeFromStore();
    };
    Store = () =>{
       this.props.openFormStore();
        this.props.closeFromVersion();
        this.props.closeForm();
        this.props.closeFormHot();
    };


    themSP = () => {
        let {editProduct} = this.props;
        if(editProduct && editProduct.id !== ''){
            this.props.openFormWhenEdit();
        }else {
            this.props.openForm();
            this.props.closeFromVersion();
            this.props.closeFormHot();
            this.props.closeFromStore();
        }
        this.props.clearForm({
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



    render() {
        let {displayForm,DisplayFormVersion,DisplayFormHot,DisplayFormStore} = this.props;
        let themSP = displayForm === true ? <ThemSP /> : '';
        let ThayDoiSP = DisplayFormHot === true ? <StatusSP  /> : '';
        let themVersion = DisplayFormVersion === true ? <Version/> : '';
        let themStore = DisplayFormStore === true ? <AddStore/> : '';
        let ShowListStore = DisplayFormStore === true ? <ListProductsInStore/> : '';
        return (
            <div>
                <div className="btn-group">
                    <button className="btn btn-success"  style={{marginBottom: '15px',borderRadius: '10px'}} onClick={this.themSP}>Thêm Sản Phẩm</button>
                    <button className="btn btn-info"  style={{marginBottom: '15px',marginLeft:'10px',borderRadius: '10px'}} onClick={this.Version}>Thêm Version</button>
                    <button className="btn btn-danger"  style={{marginBottom: '15px',marginLeft:'10px',borderRadius: '10px'}} onClick={this.Status}>Thay Đổi Trạng Thái</button>
                    <button className="btn btn-dark"  style={{marginBottom: '15px',marginLeft:'10px',borderRadius: '10px'}} onClick={this.Store}>Thêm Vào Store</button>
                </div>
                <br/>
                {themSP}
                {themVersion}
                {ThayDoiSP}
                {themStore}
                {ShowListStore}
                <DanhSachSP  />

            </div>
        );
    }
}


const mapStateToProps = state =>{
  return{
      displayForm: state.displayForm,
      editProduct: state.editProduct,
      DisplayFormVersion: state.DisplayFormVersion,
      DisplayFormHot : state.DisplayFormHot,
      DisplayFormStore: state.DisplayFormStore,
  }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        openForm : () =>{
            dispatch(actions.openForm())
        },
        closeForm : () =>{
            dispatch(actions.closeForm())
        },
        openFormHot : () =>{
            dispatch(actions.openFormHot())
        },
        closeFormHot : () =>{
            dispatch(actions.closeFormHot())
        },
        closeFromVersion : () =>{
            dispatch(actions.closeFormVersion())
        },
        clearForm : (task) =>{
          dispatch(actions.editProDuct(task))
        },
        openFormWhenEdit : () =>{
          dispatch(actions.openFormWhenEdit())
        },
        openFormVersion : () =>{
            dispatch(actions.openFormVersion())
        },
        openFormStore : () =>{
            dispatch(actions.openFormStore())
        },
        closeFromStore : () =>{
            dispatch(actions.closeFormStore())
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (ManagementProduct);



