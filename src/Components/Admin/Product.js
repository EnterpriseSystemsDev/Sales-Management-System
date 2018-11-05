import React from "react";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";


class Product extends React.Component {
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
        this.props.openFormEditVersion();
        //console.log(this.props.task.id);
        this.props.onEditVersion(this.props.task);
        //console.log(task.id);
        ///this.props.onUpdateVersion(version);
        this.onClear();


    };

    onDelete = (id) =>{
        if(confirm('Bạn Muốn Xóa sản phẩm ?')){  //eslint-disable-line
            this.props.onDeleteVersion(id);
        }

        //console.log(this.props.onDeleteVersion(id));
        //console.log(id);
    };

    render() {
        let {task , index} = this.props;
        let img = task.hinhanh.slice(12);
            return (
                <tr key ={index}>
                    <td>{index + 1}</td>
                    <td>{task.nameProduct}</td>
                    <td>{task.version}</td>
                    <td>{task.gia}$</td>
                    <td>{task.size}</td>
                    <td>{img}</td>
                    <td>
                        <button onClick={() => this.onEdit(task.id)} type="button" className="btn btn-warning">
                            Sửa
                        </button>
                        <button onClick={() =>this.onDelete(task.id) } type="button" className="btn btn-danger" style={{marginLeft: 10}}>
                            Xóa
                        </button>
                    </td>
                </tr>
            );


}
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        onDeleteVersion : (id) => {
            dispatch(actions.deleteVersionRequest(id));
        },
        onUpDateForm : () => {
            dispatch(actions.updateForm());
        },

        onEditVersion: (version) =>{
            dispatch(actions.editVersion(version));
        },
        closeForm : () =>{
            dispatch(actions.closeForm())
        },
        openFormEditVersion : () => {
            dispatch(actions.openFormEditVersion());
        },


    };

};

export default connect(null,mapDispatchToProps) (Product);



