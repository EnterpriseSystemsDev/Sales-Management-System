import React from "react";
import img from "../../hinhanh/logo.png"

class CartItems extends React.Component {

    PriceProduct = () =>{
        let {item} = this.props;
        let giaSale = parseInt(item.item.gia - (item.item.gia * item.item.Sale)/100, 10);
        if(item.item.isSale === true){
            return <div className="product-price">{giaSale}</div>
        }
        else {
            return <div className="product-price">{item.item.gia}</div>
        }
    };
    total = () =>{
        let {item} = this.props;
        let giaSale = parseInt(item.item.gia - (item.item.gia * item.item.Sale)/100, 10);
        if(item.item.isSale === true){
            return  <div className="product-line-price">{giaSale}</div>
        }
        else {
            return <div className="product-line-price">{item.item.gia}</div>
        }
    };
    render() {
        let {item} = this.props;
        return (
            <div>
                <div className="product">
                    <div className="product-image">

                        <img src={require("../../hinhanh/" + item.item.hinhanh + ".png")} alt="imageProduct"/>
                    </div>
                    <div className="product-details">
                        <div className="product-title">{item.item.tensp}</div>
                        <p className="product-description"> {item.item.mota}</p>
                        <p className="product-description">Size :{item.item.size}</p>
                    </div>

                    {this.PriceProduct()}
                    <div className="product-quantity">
                        <input type="number" defaultValue={1} min={1} />
                    </div>
                    <div className="product-removal">
                        <button className="remove-product ">
                            <span className="glyphicon glyphicon-trash" > Xóa</span>
                        </button>
                    </div>
                    {this.total()}
                </div>
            </div>
        );
    }
}

export default  CartItems;
