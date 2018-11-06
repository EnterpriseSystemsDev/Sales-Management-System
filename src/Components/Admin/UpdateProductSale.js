import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';

class UpdateProductSale extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            gia : '',
            size : '',
            mota : '',
            hinhanh : '',
            Sale:'',
            version:'',
            nameProduct:'',
            isHot:false,
            isSale:false,
        }
    }
    onClear = () =>{
        this.setState({
            id: '',
            gia : '',
            size : '',
            mota : '',
            hinhanh : '',
            Sale:'',
            version:'',
            nameProduct:'',
            isHot:false,
            isSale:false,

        });
    };
    onChange = (event) =>{
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    };
    onSubmit = (event) =>{
        event.preventDefault();
        let sale = {
            id : this.state.id,
            version:this.state.version,
            nameProduct : this.state.nameProduct,
            Sale : this.state.Sale,
            gia : this.state.gia,
            size : this.state.size,
            mota : this.state.mota,
            hinhanh : this.state.hinhanh,
            isHot: this.state.isHot,
            isSale : this.state.isSale,
        };
       //console.log(this.state.id);
        if(this.state.id){
            this.props.onUpdateVersionSale(sale);
            //this.onClear();
            //this.closeForm();
        }
       // this.props.addVersion(this.state);
    };
    onEdit = () =>{
        this.props.onEditVersion(this.props.task);
        this.onClear();
    };

    componentWillMount(){
        if(this.props.EditVersion && this.props.EditVersion.id !== null){
            this.setState({
                id: this.props.EditVersion.id,
                 version : this.props.EditVersion.version,
                 nameProduct : this.props.EditVersion.nameProduct,
                 gia : this.props.EditVersion.gia,
                 size : this.props.EditVersion.size,
                 mota : this.props.EditVersion.mota,
                 hinhanh : this.props.EditVersion.hinhanh,
                isHot:this.props.EditVersion.isHot ,
                isSale:this.props.EditVersion.isSale ,
                Sale:this.props.EditVersion.Sale,

            });
        }
        else {
            this.onClear();
        }
    };

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.EditVersion){
            this.setState({
                id: nextProps.EditVersion.id,
                 version :nextProps.EditVersion.version,
                 nameProduct : nextProps.EditVersion.nameProduct,
                 gia : nextProps.EditVersion.gia,
                 size : nextProps.EditVersion.size,
                 mota : nextProps.EditVersion.mota,
                 hinhanh : nextProps.EditVersion.hinhanh,
                Sale:nextProps.EditVersion.Sale,
                isHot:nextProps.EditVersion.isHot,
                isSale:nextProps.EditVersion.isSale,
            });
        }
        else {
            this.onClear();
        }
    }
    UpdateSP = () =>{
        this.props.onUpdateStatusVersionSale(this.props.task);
        let sale = {
            id : this.state.id,
            version:this.state.version,
            nameProduct : this.state.nameProduct,
            Sale : this.state.Sale,
            gia : this.state.gia,
            size : this.state.size,
            mota : this.state.mota,
            hinhanh : this.state.hinhanh,
            isHot: this.state.isHot,
            isSale : this.state.isSale,
        };


        //console.log(this.state.id);
        if(this.state.id){
            this.props.onUpdateVersionSale(sale);
            //this.onClear();
            //this.closeForm();
        }
    };

    render() {
        let {task , index} = this.props;
        return (

            <tr key ={index}>
                <td>{index + 1}</td>
                <td>{task.version}</td>
                <td>{task.gia}$</td>
                <td>{task.nameProduct}</td>
                <td>{task.size}</td>
                <td>

                    <div className="material-switch pull-left ">
                        <input
                            className="aaa"
                            onClick={this.UpdateSP}
                            id={task.id}
                            name="isSale"
                            type="checkbox"
                            onChange={this.onChange}
                            checked={task.isSale}
                        />
                    <label htmlFor={task.id} className="label-warning" />
                    </div>
                </td>

                <td>
                    <form onSubmit={this.onSubmit}>
                        <input type="text"
                               className="form-control"
                               id={task.id}
                               name="Sale"
                               value={this.state.Sale}
                               onChange={this.onChange}
                               placeholder={task.Sale}
                        />

                        <button onClick={() => this.onEdit(task) } type="button" className="btn btn-warning">
                            Sửa
                        </button>
                        <button type="submit" className="btn btn-success">
                            Cập nhật
                        </button>
                    </form>
                </td>

            </tr>

        );


    }
}
const listProducts = state =>{
    return {
        tasks : state.tasks,
        editProduct : state.editProduct,
        EditVersion : state.EditVersion,
    }

};
const mapDispatchToProps = (dispatch, props) => {
    return{
        addProduct : (task) => {
            dispatch(actions.addProduct(task))
        },
        onEditProduct: (task) =>{
            dispatch(actions.editProDuct(task));
        },
        onUpdateStatusVersionSale: (id) =>{
            dispatch(actions.updateStatusVersionSale(id));
        },
        addVersion : (version) =>{
            dispatch(actions.addVersion(version))
        },
        onEditVersion: (version) =>{
            dispatch(actions.editVersion(version));
        },
        onUpdateVersionSale : (version) =>{
            dispatch(actions.updateStatusVersionSaleRequest(version))
        }
    };

};

export default connect(listProducts,mapDispatchToProps) (UpdateProductSale);



