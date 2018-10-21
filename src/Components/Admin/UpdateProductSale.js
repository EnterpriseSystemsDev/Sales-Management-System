import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';

class UpdateProductSale extends React.Component {
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
    onChange = (event) =>{
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(value);
        this.setState({
            [name] : value
        });
    };
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.addProduct(this.state);
        console.log(this.state);

    };
    onEdit = () =>{
        this.props.onEditProduct(this.props.task);
        console.log(this.props.task);
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
                isHot:this.props.editProduct.isHot ,
                isSale:this.props.editProduct.isSale ,
                Sale:this.props.editProduct.Sale,

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
    UpdateSP = () =>{
        this.props.onUpdateStatusSale(this.props.task.id);
    };

    render() {
        let {task , index} = this.props;
        return (
            <tr key ={index}>
                <td>{index + 1}</td>
                <td>{task.tensp}</td>
                <td>{task.gia}$</td>
                <td>{task.brand}</td>
                <td>{task.size}</td>
                <td>
                    <div className="material-switch pull-left ">
                        <input
                            className="aaa"
                            onClick={this.UpdateSP}
                            id={task.id}
                            name="isSale"
                            type="checkbox"
                           // onChange={this.onChange}
                            checked={task.isSale}
                        />
                    <label htmlFor={task.id} className="label-warning" />
                    </div>
                </td>

                <td>
                    <input type="text"
                           className="form-control"
                           id="hidden_field"
                           name="Sale"
                           value={this.state.Sale}
                           onChange={this.onChange}
                           placeholder={task.Sale}
                    />
                </td>

                <td>
                    <button onClick={this.onEdit} type="submit" className="btn btn-success">
                        Cập nhật
                    </button>
                </td>

            </tr>

        );


    }
}
const listProducts = state =>{
    return {
        tasks : state.tasks,
        editProduct : state.editProduct
    }

};
const mapDispatchToProps = (dispatch, props) => {
    return{
        addProduct : (task) => {
            dispatch(actions.ADDPRODUCT(task))
        },
        onEditProduct: (task) =>{
            dispatch(actions.editProDuct(task));
        },
        onUpdateStatusSale: (id) =>{
            dispatch(actions.updateStatusSale(id));
        },
    };

};

export default connect(listProducts,mapDispatchToProps) (UpdateProductSale);



