import React from "react";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";


class SanPham extends React.Component {
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
    onEdit = () =>{
        this.props.onUpDateForm();
        this.props.onEditProduct(this.props.task);
        this.onClear();


    };
    onDelete = () =>{
      this.props.onDeleteProduct(this.props.task.id);
    };

    render() {
        let {task , index} = this.props;
            return (
                <tr key ={index}>
                    <td>{index + 1}</td>
                    <td>{task.tensp}</td>
                    <td>{task.brand}</td>
                    <td>{task.gia}</td>
                    <td>{task.size}</td>
                    <td>{task.mota}</td>
                    <td>{task.hinhanh}</td>
                    <td>
                        <button onClick={this.onEdit } type="button" className="btn btn-warning">
                            Sửa
                        </button>
                        <button onClick={this.onDelete } type="button" className="btn btn-danger" style={{marginLeft: 10}}>
                            Xóa
                        </button>
                    </td>
                </tr>
            );


}
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        onDeleteProduct : (id) => {
            dispatch(actions.deleteProduct(id));
        },
        onUpDateForm : () => {
            dispatch(actions.updateForm());
        },

        onEditProduct: (task) =>{
            dispatch(actions.editProDuct(task));
        },
        closeForm : () =>{
            dispatch(actions.closeForm())
        },


    };

};

export default connect(null,mapDispatchToProps) (SanPham);



