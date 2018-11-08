import React from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            tensp : '',
            brand : '',
            mota : '',

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
            tensp : '',
            name : '',
            gia : '',
            size : '',
            mota : '',
            image : '',
            Sale:'',
            isHot:false,
            isSale:false,

            brandId : '',
            description :'',
            price : '',

        });
    };

    closeForm = () =>{
      this.props.closeForm();
    };
    onSubmit = (event) =>{
        event.preventDefault();
        // let products = {
        //     name : this.state.name,
        //     image: this.state.image,
        //
        // };
        let products = {
            name : this.state.tensp,
            brandId : this.state.brand,
            description : this.state.mota,
            price : this.state.price
        };

         this.props.onAddProducts(products);
        //console.log(products)
        // //this.props.addProduct(this.state);
        // //xoa data
        this.onClear();
        this.closeForm();
    };

    componentWillMount(){
        if(this.props.editProduct && this.props.editProduct.id !== null){
            this.setState({
                id: this.props.editProduct.id,
                tensp : this.props.editProduct.tensp,
                brand : this.props.editProduct.brand,
               // gia : this.props.editProduct.gia,
               // size : this.props.editProduct.size,
                 mota : this.props.editProduct.mota,
                //hinhanh : this.props.editProduct.hinhanh.getTime(),
                //isHot:this.props.editProduct.isHot ,
                //isSale:this.props.editProduct.isSale ,
               // Sale:this.props.editProduct.Sale,

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
                //gia : nextProps.editProduct.gia,
               //size : nextProps.editProduct.size,
                mota : nextProps.editProduct.mota,
                //hinhanh : nextProps.editProduct.hinhanh.getTime(),
                //Sale:nextProps.editProduct.Sale,
                //isHot:nextProps.editProduct.isHot,
                //isSale:nextProps.editProduct.isSale,
            });
        }
        else {
            this.onClear();
        }
    }
    render() {

        return (
            <div className={!this.state.id ? 'panel panel-success' : 'panel panel-danger'}>
                <div className="panel-heading">
                    <h2 className="panel-title">
                        { !this.state.id ? 'Thêm Sản Phẩm' : 'Cập Nhật Sản Phẩm'}
                    </h2>
                </div>

                <form className="panel-body" onSubmit={this.onSubmit}>
                    <div className="form-group col-md-6">
                        <label>Brand:</label>
                        <input type="text"
                               className="form-control"
                               id="input1"
                               required
                               name="tensp"
                               value={this.state.tensp}
                               onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Brand:</label>
                        <select
                            className="form-control"
                            name="brandId"
                            required
                            value={this.state.brandId}
                            onChange={this.onChange}
                        >
                            <option defaultValue="0" >Chọn Brand:</option>
                            <option value="1">Jordan</option>
                            <option value="Yeezy">Yeezy</option>
                            <option value="Nike">Nike</option>
                            <option value="Adidas">Adidas</option>
                            <option value="Rick Owens">Rick Owens</option>
                            <option value="Phụ Kiện">Phụ Kiện</option>
                        </select>
                    </div>
                    {/*<div className="form-group col-md-6">*/}
                        {/*<label>Brand:</label>*/}
                        {/*<select*/}
                            {/*className="form-control"*/}
                            {/*name="brand"*/}
                            {/*required*/}
                            {/*value={this.state.brand}*/}
                            {/*onChange={this.onChange}*/}
                        {/*>*/}
                            {/*<option defaultValue="0" >Chọn Brand:</option>*/}
                            {/*<option value="Jordan">Jordan</option>*/}
                            {/*<option value="Yeezy">Yeezy</option>*/}
                            {/*<option value="Nike">Nike</option>*/}
                            {/*<option value="Adidas">Adidas</option>*/}
                            {/*<option value="Rick Owens">Rick Owens</option>*/}
                            {/*<option value="Phụ Kiện">Phụ Kiện</option>*/}
                        {/*</select>*/}
                    {/*</div>*/}
                    <div className="form-group col-md-6">
                        <label>Hình Ảnh:</label>
                        <input type="file"
                               className="form-control"
                               id="input6"
                            //required
                               name="image"
                               value={this.state.image}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Mô Tả:</label>
                        <textarea
                                  className="form-control"
                                  name="mota"
                                  id="input5"
                                  required
                                  value={this.state.mota}
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

    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct : (task) => {
            dispatch(actions.addProduct(task))
        },
        closeForm : () =>{
            dispatch(actions.closeForm())
        },
        onAddProducts : (task) =>{
            dispatch(actions.addProductRequest(task))
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (AddProduct);



