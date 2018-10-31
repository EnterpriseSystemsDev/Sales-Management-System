import React from "react";
import  {Link} from 'react-router-dom';
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
class Products extends React.Component {
    ShowProductList = () =>{
        let giaSale = parseInt(this.props.price - (this.props.price * this.props.sale)/100, 10);
        if(this.props.isSale === true){
            return (<div>
                <span className="post" style={{fontSize:'13px'}}><strike>{this.props.price}$</strike></span>
                <span className="post" style={{color:'red'}}>{giaSale}$</span>
            </div>);
        }
        else {
            return <span className="post">{this.props.price}$</span>
        }
    };

    ShowSPriceSale = () =>{
        if (this.props.isHot === true && this.props.isSale === true){
            return <p style={{padding:'10px',color:'red'}}><span className="glyphicon glyphicon-fire"></span> -{this.props.sale}%</p>
        }

        else if (this.props.isHot === true){
            return <p style={{padding:'10px',color:'red'}}><span className="glyphicon glyphicon-fire"></span></p>
        }
        else  if(this.props.isSale === true){
            return (<div>
                <p style={{padding:'10px',color:'red'}}> -{this.props.sale}%</p>
            </div>);
        }
        else {
            return <p style={{padding:'10px',color:'red'}}>  Xem chi tiết</p>
        }
    };
    onAddToCart = (item) =>{
        this.props.onAddToCart(item);
    };
    render() {
        let {Cart,item} = this.props;
        //console.log(Cart);
        return (
                <div  className=" col-md-4 col-sm-6 animatedParent animateOnce">
                        <div className="box6 animated bounceInUp slowest ">
                            {this.ShowSPriceSale()}
                            <img src={require("../../hinhanh/" + this.props.image + ".png")} alt="imageProduct"/>
                            <div className="box-content">
                                <h3 className="title">{this.props.name}</h3>
                                {this.ShowProductList()}
                                <ul className="icon">
                                    <li><a  className="fa fa-search" data-toggle="modal" data-target="#product_view"/> </li>
                                    <li><Link to="/Cart" onClick={() => this.onAddToCart(item)} className="glyphicon glyphicon-shopping-cart"/></li>
                                </ul>
                            </div>
                        </div>
                    <div className="modal fade product_view " id="product_view">
                        <div className="modal-dialog">
                            <div className="modal-content ">
                                <div className="modal-header">
                                    <a href="#" data-dismiss="modal" className="class pull-right"><span className="glyphicon glyphicon-remove" /></a>
                                    <h3 className="modal-title">{this.props.brand} : {this.props.name}</h3>
                                    {/*<p>ID: {this.props.id} </p>*/}
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-9 product_img thumbnail">
                                            <img src={require("../../hinhanh/"+ this.props.image +".png")} alt={this.props.name} />
                                        </div>
                                        <div className="col-md-6 product_content">
                                            <h2>{this.props.name}</h2>
                                            <p><b>Mô tả:</b> {this.props.mota}</p>
                                            <h3 className="cost"><span className="glyphicon glyphicon-usd" /> {this.props.price}</h3>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-6 col-xs-12">
                                                    <label>Size: </label>
                                                    <select className="form-control" name="select">
                                                        <option value="39" selected>39</option>
                                                        <option value="40">40</option>
                                                        <option value="41">41</option>
                                                        <option value="42">42</option>
                                                        <option value="43">43</option>
                                                    </select>
                                                </div>
                                                <div style={{textAlign: 'center'}} className="col-md-4 col-sm-6 col-xs-12">
                                                    <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-shopping-cart" /> Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
         </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        Cart : state.Cart,
    }

};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (item) =>{
            dispatch(actions.addToCart(item));
        }
    }

};
export default connect(mapStateToProps,mapDispatchToProps)(Products);
