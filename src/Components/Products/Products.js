import React from "react";
import  {Link} from 'react-router-dom'
import ItemDetails from "../Home/ItemDetails";


class Products extends React.Component {
    render() {
        return (
        <div>
                <div  className=" col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
                    <div className="box7">
                        <img src={require("../../hinhanh/"+ this.props.image +".png")} alt={this.props.name} />
                        <ul className="icon1">
                             <li><a  className="fa fa-search" data-toggle="modal" data-target="#product_view"/> </li>
                            <li><Link to="/" className="glyphicon glyphicon-shopping-cart" /></li>
                        </ul>
                    </div>
                    <div className="box-content1">
                        <h3 className="title1">{this.props.name}</h3>
                        <span className="post1">{this.props.price}$</span>
                    </div>
                    <div className="modal fade product_view " id="product_view">
                        <div className="modal-dialog">
                            <div className="modal-content ">
                                <div className="modal-header">
                                    <a href="#" data-dismiss="modal" className="class pull-right"><span className="glyphicon glyphicon-remove" /></a>
                                    <h3 className="modal-title">Brand : {this.props.brand}</h3>
                                    <p>ID: {this.props.id} </p>
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
                                                        <option value selected>39</option>
                                                        <option value="black">40</option>
                                                        <option value="white">41</option>
                                                        <option value="gold">42</option>
                                                        <option value="rose gold">43</option>
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
        </div>
        );
    }
}
export default Products;
