import React from "react";
import img from "../../hinhanh/logo.png"

class CartItems extends React.Component {

    render() {
        return (
            <div>
                <div className="product">
                    <div className="product-image">
                        <img src={img} alt="aaS" />
                    </div>
                    <div className="product-details">
                        <div className="product-title">{this.props.name}</div>
                        <p className="product-description"> {this.props.desc}</p>
                    </div>
                    <div className="product-price">{this.props.price}</div>
                    <div className="product-quantity">
                        <input type="number" defaultValue={1} min={1} />
                    </div>
                    <div className="product-removal">
                        <button className="remove-product ">
                            <span className="glyphicon glyphicon-trash" > Xóa</span>
                        </button>
                    </div>
                    <div className="product-line-price">{this.props.price}</div>
                </div>
            </div>
        );
    }
}

export default  CartItems;
