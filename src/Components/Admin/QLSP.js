import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import ThemSP from "./ThemSP";
import DanhSachSP from "./DanhSachSP";
import StatusSP from "./Status";


class QLSP extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayStatus: false
        }
    };

    Status = () =>{
        this.setState({
            displayStatus: !this.state.displayStatus
        });
    };
    themSP = () => {
        let {editProduct} = this.props;
        if(editProduct && editProduct.id !== ''){
            this.props.openFormWhenEdit();
        }else {
            this.props.openForm();

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
        let {displayStatus} = this.state;
        let {displayForm} = this.props;
        let themSP = displayForm === true ? <ThemSP /> : '';
        let ThayDoiSP = displayStatus === true ? <StatusSP  /> : '';
        return (
            <div>
                <div className="btn-group">
                    <button className="btn btn-success"  style={{marginBottom: '15px',borderRadius: '10px'}} onClick={this.themSP}>Thêm Sản Phẩm</button>
                    <button className="btn btn-danger"  style={{marginBottom: '15px',marginLeft:'10px',borderRadius: '10px'}} onClick={this.Status}>Thay Đổi Trạng Thái</button>
                </div>
                <br/>
                {themSP}
                {ThayDoiSP}
                <DanhSachSP  />
            </div>
        );
    }
}


const mapStateToProps = state =>{
  return{
      displayForm: state.displayForm,
      editProduct: state.editProduct,
  }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        openForm : () =>{
            dispatch(actions.openForm())
        },
        clearForm : (task) =>{
          dispatch(actions.editProDuct(task))
        },
        openFormWhenEdit : () =>{
          dispatch(actions.openFormWhenEdit())
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (QLSP);



