import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions/index';

class UpdateProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            version : '',
            nameProduct : '',
            gia : '',
            size : '',
            mota : '',
            hinhanh : '',
            Sale:'',
            isHot:false,
            isSale:false,
        }
    }
    onChange = (event) =>{
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });

    };

    UpdateSP = () =>{
        this.props.onUpdateStatusVersionHot(this.props.task);
        console.log(this.props.task.isHot);
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

    }


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
                            onClick={this.UpdateSP}
                            id={task.id}
                            name="isHOT"
                            type="checkbox"
                            value={task.isHot}
                            onChange={this.onChange}
                            checked={task.isHot}
                        />
                        <label htmlFor={task.id} className="label-danger" />
                    </div>
                </td>
            </tr>
        );


    }
}
const listProducts = state =>{
    return {
        tasks : state.tasks,
        displayForm: state.displayForm,
        editProduct : state.editProduct,
        Version: state.Version,
    }

};
const mapDispatchToProps = (dispatch, props) => {
    return{
        delete_PRODUCT : (id) => {
            dispatch(actions.deleteProduct(id));
        },
        onUpDateForm : () => {
            dispatch(actions.updateForm());
        },

        onEditProduct: (task) =>{
            dispatch(actions.editProDuct(task));
        },
        // onUpdateStatusVersionHot: (id) =>{
        //     dispatch(actions.updateStatusVersionHot(id));
        // },
        onUpdateStatusVersionHot: (task) =>{
            dispatch(actions.updateStatusVersionHotRequest(task));
        },

    };

};

export default connect(listProducts,mapDispatchToProps) (UpdateProduct);



