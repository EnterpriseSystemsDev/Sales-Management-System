import React from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
class AddStore extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            store: '',
            nameProduct:'',
            version:'',
            soluong:'',
            size:'',

        }
    }

    onChange = (event) =>{
        let target = event.target;
        let name = target.name;
        let value;
        if(target.type === 'checkbox'){
            value = target.checked;
        }
        else if (target.type === 'file' && event.target.files[0]){
            value  = target.value;
        }
        else {
            value = target.value;
        }
        this.setState({
            [name] : value,
        });
    };

    onClear = () =>{
        this.setState({
            id: '',
            store: '',
            brand:'',
            version:'',
            soluong:'',
            size:''

        });
    };

    closeForm = () =>{
        this.props.closeForm();
    };
    onSubmit = (event) =>{
        event.preventDefault();
        let store = {
            id : this.state.id,
            nameProduct : this.state.nameProduct,
            size : this.state.size,
            soluong : this.state.soluong,
            store : this.state.store,
            version: this.state.version,
        };
        this.props.addProductInStore(store);
        //xoa data
        this.onClear();
        this.closeForm();
    };

    componentDidMount() {
        this.props.listProductAllStore();
    }

    render() {
        let {tasks} = this.props;
        const option = tasks.map((task, index) => {
            return (
                <option key={index} value={task.tensp}> {task.tensp}</option>
            );
        });

        let {Version} = this.props;
        //console.log(Version);
        const store = Version.map((task, index) => {
            return (
                <option key={index} value={task.version}>
                    {task.version}
                    </option>
            );
        });
        return (
            <div className={!this.state.id ? 'panel panel-success' : 'panel panel-danger'}>
                <div className="panel-heading">
                    <h2 className="panel-title">
                        { !this.state.id ? 'Thêm Sản Phẩm Vào Store' : 'Cập Nhật Sản Phẩm'}
                    </h2>
                </div>

                <form className="panel-body" onSubmit={this.onSubmit}>
                    <div className="form-group col-md-6">
                        <label>Store:</label>
                        <select
                            className="form-control"
                            name="store"
                            required
                            value={this.state.store}
                            onChange={this.onChange}
                        >
                            <option defaultValue="0" >Chọn Store:</option>
                            <option value="Hồ Chí Minh">Tp. Hồ Chí Minh</option>
                            <option value="Hà Nội">Hà Nội</option>
                        </select>
                    </div>

                    <div className="form-group col-md-6">
                        <label>Sản Phẩm:</label>
                        <select
                            className="form-control"
                            name="nameProduct"
                            required
                            value={this.state.nameProduct}
                            onChange={this.onChange}
                        >
                            <option defaultValue="0" >Chọn Sản Phẩm:</option>
                            {option}
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Version:</label>
                        <select
                            className="form-control"
                            name="version"
                            required
                            value={this.state.version}
                            onChange={this.onChange}
                        >
                            <option defaultValue="0" >Chọn Version:</option>
                            {store}
                        </select>
                    </div>


                    <div className="form-group col-md-6">
                        <label>Size:</label>
                            <select
                                className="form-control"
                                name="size"
                                required
                                value={this.state.size}
                                onChange={this.onChange}
                            >
                                <option defaultValue="0" >Chọn Size:</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                            </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Số lượng:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="soluong"
                            id="input5"
                            required
                            value={this.state.soluong}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <button id="btnCheck" type="submit" className="btn btn-success "> Lưu </button>
                    </div>

                </form>
            </div>

        );

    }

}


const mapStateToProps = state =>{
    return {
        tasks : state.tasks,
        editProduct : state.editProduct,
        displayForm:state.displayForm,
        Version: state.Version,
        Store : state.Store
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        addProductInStore : (store) => {
            dispatch(actions.addProductsInStoreRequest(store))
        },
        closeForm : () =>{
            dispatch(actions.closeForm())
        },
        listProductAllStore : () =>{
            dispatch(actions.listAllProductRequest());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (AddStore);



