import React from "react";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";


class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            hoTen: '',
            gioiTinh: '',
            namSinh: '',
            queQuan: '',
            viTri: '',
            luong: '',
            userName: '',
            passWord: ''
        }
    }

    onClear = () => {
        this.setState({
            id: '',
            hoTen: '',
            gioiTinh: '',
            namSinh: '',
            queQuan: '',
            viTri: '',
            luong: '',
            userName: '',
            passWord: '',

        });
    };
    closeForm = () => {
        this.props.closeForm();
    };
    onEdit = () => {
        this.props.updateFormEmployee();
        this.props.editEmployees(this.props.item);
        this.onClear();
    };
    onDelete = () => {
        this.props.deleteEmployee(this.props.item.id);
    };

    render() {
        let {item, index} = this.props;
        return (
            <tr key={index}>
                <td>{item.hoTen}</td>
                <td>{item.gioiTinh}</td>
                <td>{item.namSinh}</td>
                {/*<td>{item.queQuan}</td>*/}
                <td>{item.viTri}</td>
                <td>{item.luong}</td>
                <td>{item.userName}</td>

                <td>
                    <button onClick={this.onEdit} type="button" className="btn btn-warning">
                        Sửa
                    </button>
                    <button onClick={this.onDelete} type="button" className="btn btn-danger" style={{marginLeft: 10}}>
                        Xóa
                    </button>
                </td>
            </tr>
        );


    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        editEmployees: (task) => {
            dispatch(actions.editEmployee(task))
        },
        closeForm: () => {
            dispatch(actions.closeForm())
        },
        updateFormEmployee: () => {
            dispatch(actions.updateFormEmployee())
        },
        deleteEmployee: (id) => {
            dispatch(actions.deleteEmployee(id))
        },
    };

};

export default connect(null, mapDispatchToProps)(Employee);



