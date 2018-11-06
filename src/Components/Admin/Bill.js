import React from "react";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";

class Bill extends React.Component {

    onDelete = () =>{
        this.props.deleteBill(this.props.item.id);
    };

    render() {
        let {item , index} = this.props;
        return (
            <tr key ={index}>
                <td>{item.tenkh}</td>
                <td>{item.tensp}</td>
                <td>{item.gia}</td>
                <td>{item.size}</td>
                <td>{item.diaChi}</td>
                <td>{item.ngayMua}</td>
                <td>{item.maTichDiem}</td>
                <td>
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

        deleteBill : (id) =>{
            dispatch(actions.deleteBill(id))
        },
    };

};

export default connect(null,mapDispatchToProps)  (Bill);



