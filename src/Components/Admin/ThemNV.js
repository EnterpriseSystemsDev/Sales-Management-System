import React from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
class ThemNV extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            hoTen:'',
            gioiTinh: '',
            namSinh: '',
            queQuan:  '',
            viTri:'',
            luong:'',
            userName:'',
            passWord: ''
        }
    }
    onChange = (event) =>{
        //ep true false tại đây
        this.setState({
            [event.target.name] : event.target.value
        });
    };
    closeForm = () =>{
        this.props.closeForm();
    };
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.addemployee(this.state);
        //xoa data
        this.onClear();
        this.closeForm();
    };
    onClear = () =>{
        this.setState({
            hoTen:'',
            gioiTinh: '',
            namSinh: '',
            queQuan:  '',
            viTri:'',
            luong:'',
            userName:'',
            passWord: ''
        });
    };
    componentWillMount(){
        if(this.props.EditEmployee && this.props.EditEmployee.id !== null){
            this.setState({
                id: this.props.EditEmployee.id,
                hoTen: this.props.EditEmployee.hoTen,
                gioiTinh: this.props.EditEmployee.gioiTinh,
                namSinh:  this.props.EditEmployee.namSinh,
                queQuan:  this.props.EditEmployee.queQuan,
                viTri: this.props.EditEmployee.viTri,
                luong:  this.props.EditEmployee.luong,
                userName:  this.props.EditEmployee.userName,
                passWord:  this.props.EditEmployee.passWord,
            });
        }
        else {
            this.onClear();
        }
    };

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.EditEmployee){
            this.setState({
                id: nextProps.EditEmployee.id,
                hoTen: nextProps.EditEmployee.hoTen,
                gioiTinh: nextProps.EditEmployee.gioiTinh,
                namSinh:  nextProps.EditEmployee.namSinh,
                queQuan:  nextProps.EditEmployee.queQuan,
                viTri: nextProps.EditEmployee.viTri,
                luong:  nextProps.EditEmployee.luong,
                userName:  nextProps.EditEmployee.userName,
                passWord:  nextProps.EditEmployee.passWord,
            });
        }
        else {
            this.onClear();
        }
    }
    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h2 className="panel-title">Thêm Nhân Viên</h2>
                </div>

                <form className="panel-body" onSubmit={this.onSubmit}>
                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Họ Tên:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="hoTen"
                            required
                            value={this.state.hoTen}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="sel1">Giới Tính:</label>
                        <select
                            className="form-control"
                            name="gioiTinh"
                            required
                            value={this.state.gioiTinh}
                            onChange={this.onChange}
                        >
                            <option value="">Chọn Giới Tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Năm Sinh:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="namSinh"
                            required
                            value={this.state.namSinh}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Quê Quán:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="queQuan"
                            required
                            value={this.state.queQuan}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Vị Trí:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="viTri"
                            required
                            value={this.state.viTri}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Lương:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="luong"
                            required
                            value={this.state.luong}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="usr">UserName:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            required
                            value={this.state.userName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="pwd">PassWord:</label>
                        <input
                            type="password"
                            className="form-control"
                            name="passWord"
                            required
                            value={this.state.passWord}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <button type="submit" className="btn btn-success">Thêm</button>
                    </div>
                </form>
            </div>

        );
    }
}

const mapStateToProps = state =>{
    return {
        Employee : state.Employee,
        EditEmployee: state.EditEmployee,

    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        addemployee : (task) => {
            dispatch(actions.addEmployee(task))
        },
        closeForm : () =>{
            dispatch(actions.closeForm())
        },
    }
};
export default connect (mapStateToProps,mapDispatchToProps)(ThemNV);



