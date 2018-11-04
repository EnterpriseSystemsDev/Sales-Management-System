import React from "react";
import "./productDetail.css"
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import Header from "../Home/Header";
import Navbar from "../Home/Navbar";
import ProductDetailItem from "./ProductDetailItem";


class ProductDetail extends React.Component {
    render() {
        let {Version} = this.props;
        const listProducts = Version.map((item, index) => {
                return (
                    <ProductDetailItem
                        key ={index}
                        id ={item.id}
                        name ={item.version}
                        image ={item.hinhanh}
                        price = {item.gia}
                        brand = {item.nameProduct}
                        mota ={item.mota}
                        size = {item.size}
                        sale ={item.Sale}
                        isSale = {item.isSale}
                        isHot = {item.isHot}
                        item ={item}
                    />
                );
        });
        return (
            <div>
                <Header/>
                <br/><br/><br/>
                <Navbar/>
                {listProducts}
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        Cart : state.Cart,
        Version : state.Version
    }

};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (item) =>{
            dispatch(actions.addToCart(item));
        }
    }

};
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);
