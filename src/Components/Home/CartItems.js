import React from "react";
import img from "../../hinhanh/logo.png"

class CartItems extends React.Component {
    componentDidMount() {
        if (this.props.item  !== null) {
            this.setState({
                id: this.props.item.id,
                tensp: this.props.item.tensp,
                brand: this.props.item.brand,
                gia: this.props.item.gia,
                size: this.props.item.size,
                mota: this.props.item.mota,
                hinhanh: this.props.item.hinhanh,
                isHot: this.props.item.isHot,
                isSale: this.props.item.isSale,
                Sale: this.props.item.Sale,

            });
        }
    };
    render() {
        let {item} = this.props;
        console.log(this.props.item.name);
        return (
            <div>
                <div className="product">
                    <div className="product-image">
                        <img src={img} alt="image" />
                    </div>
                    <div className="product-details">
                        <div className="product-title">{this.tensp}</div>
                        <p className="product-description"> {this.props.mota}</p>
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
