import React from "react";
import $ from "jquery";
import Header from "./Header";
import Navbar from "./Navbar";
import connect from "react-redux/es/connect/connect";
import CartItems from "./CartItems";

class Cart extends React.Component {

    componentWillMount() {
        document.title = "Giỏ Hàng";
        $(document).ready(function () {
            var taxRate = 0.05;
            var shippingRate = 0.0;
            var fadeTime = 300;

            $('.product-quantity input').change(function () {
                updateQuantity(this);
            });

            $('.product-removal button').click(function () {
                removeItem(this);
            });

            function recalculateCart() {
                let subtotal = 0;

                $('.product').each(function () {
                    subtotal += parseFloat($(this).children('.product-line-price').text());
                });

                let tax = subtotal * taxRate;
                let shipping = (subtotal > 0 ? shippingRate : 0);
                let total = subtotal + tax + shipping;

                $('.totals-value').fadeOut(fadeTime, function () {
                    $('#cart-subtotal').html(subtotal.toFixed(2));
                    $('#cart-tax').html(tax.toFixed(2));
                    $('#cart-shipping').html(shipping.toFixed(2));
                    $('#cart-total').html(total.toFixed(2));
                    if (total === 0) {
                        $('.checkout').fadeOut(fadeTime);
                    } else {
                        $('.checkout').fadeIn(fadeTime);
                    }
                    $('.totals-value').fadeIn(fadeTime);
                });
            }

            function updateQuantity(quantityInput) {
                let productRow = $(quantityInput).parent().parent();
                let price = parseFloat(productRow.children('.product-price').text());
                let quantity = $(quantityInput).val();
                let linePrice = price * quantity;

                productRow.children('.product-line-price').each(function () {
                    $(this).fadeOut(fadeTime, function () {
                        $(this).text(linePrice.toFixed(2));
                        recalculateCart();
                        $(this).fadeIn(fadeTime);
                    });
                });
            }

            function removeItem(removeButton) {
                let productRow = $(removeButton).parent().parent();
                productRow.slideUp(fadeTime, function () {
                    productRow.remove();
                    recalculateCart();
                });
            }

        });
    };

    checkOut = () => {
        alert('Mua hàng thành công');
    };

    buttonCheckOut = () => {
        let {Cart} = this.props;
        if (Cart.length === 0) {
            return <h3>Chưa có Sản Phẩm Trong Giỏ Hàng</h3>
        }
        else {
            return <button className="checkout" onClick={this.checkOut}>Thanh Toán</button>
        }

    };

    render() {
        let {Cart} = this.props;
        const listCart = Cart.map((item, index) => {
            return (
                <div key={index}>
                    <CartItems
                        key={index}
                        id={item.id}
                        name={item.tensp}
                        image={item.hinhanh}
                        price={item.gia}
                        brand={item.brand}
                        mota={item.mota}
                        size={item.size}
                        sale={item.Sale}
                        isSale={item.isSale}
                        isHot={item.isHot}
                        item={item}
                    />
                </div>
            );
        });
        return (
            <div>
                <Header/>
                <br/><br/><br/>
                <Navbar/>
                <div className="container">
                    <div className="shopping-cart col-md-11">
                        <div className="column-labels">
                            <label className="product-image">Image</label>
                            <label className="product-details">Product</label>
                            <label className="product-price">Giá</label>
                            <label className="product-quantity">Số Lượng</label>
                            <label className="product-removal">Remove</label>
                            <label className="product-line-price">Tổng</label>
                        </div>
                        {listCart}
                        <div className="totals">
                            <div className="totals-item">
                                <label>Tổng </label>
                                <div className="totals-value" id="cart-subtotal"></div>
                            </div>
                            <div className="totals-item">
                                <label>Thuế (5%)</label>
                                <div className="totals-value" id="cart-tax"></div>
                            </div>
                            <div className="totals-item totals-item-total">
                                <label>Tổng Tiền</label>
                                <div className="totals-value" id="cart-total"></div>
                            </div>
                        </div>
                        {this.buttonCheckOut()}
                        <br/><br/>
                    </div>
                </div>
                <br/><br/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Cart: state.Cart,
    }
};
export default connect(mapStateToProps, null)(Cart);
