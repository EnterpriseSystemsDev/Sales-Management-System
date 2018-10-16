import React from "react";
import $ from "jquery"
import img from "../../hinhanh/logo.png"
import Header from "./Header";
import Nav from "./Nav";
class Cart extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <br/><br/><br/>
                <Nav/>
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
                    <div className="product">
                        <div className="product-image">
                            <img src={img} />
                        </div>
                        <div className="product-details">
                            <div className="product-title">Nike Flex Form TR Women's Sneaker</div>
                            <p className="product-description"> It has a lightweight, breathable mesh upper with forefoot cables for a locked-down fit.</p>
                        </div>
                        <div className="product-price">12.99</div>
                        <div className="product-quantity">
                            <input type="number" defaultValue={2} min={1} />
                        </div>
                        <div className="product-removal">
                            <button className="remove-product ">
                                <span className="glyphicon glyphicon-trash" > Xóa</span>
                            </button>
                        </div>
                        <div className="product-line-price">25.98</div>
                    </div>
                    <div className="product">
                        <div className="product-image">
                            <img src={img} />
                        </div>
                        <div className="product-details">
                            <div className="product-title">ULTRABOOST UNCAGED SHOES</div>
                            <p className="product-description">Born from running culture, these men's shoes deliver the freedom of a cage-free design</p>
                        </div>
                        <div className="product-price">45.99</div>
                        <div className="product-quantity">
                            <input type="number" defaultValue={1} min={1} />
                        </div>
                        <div className="product-removal">
                            <button className="remove-product ">
                                <span className="glyphicon glyphicon-trash" > Xóa</span>
                            </button>
                        </div>
                        <div className="product-line-price">45.99</div>
                    </div>
                    <div className="totals">
                        <div className="totals-item">
                            <label>Tổng </label>
                            <div className="totals-value" id="cart-subtotal">71.97</div>
                        </div>
                        <div className="totals-item">
                            <label>Thuế (5%)</label>
                            <div className="totals-value" id="cart-tax">3.60</div>
                        </div>
                       {/* <div className="totals-item">
                            <label>Shipping</label>
                            <div className="totals-value" id="cart-shipping">15.00</div>
                        </div>*/}
                        <div className="totals-item totals-item-total">
                            <label>Tổng Tiền</label>
                            <div className="totals-value" id="cart-total">90.57</div>
                        </div>
                    </div>
                    <button className="checkout ">Thanh Toán</button>
                </div>
            </div>
                <br/><br/>
            </div>
        );
    }
}
$(document).ready(function () {

    /* Set rates + misc */
    var taxRate = 0.05;
    var shippingRate = 0.0;
    var fadeTime = 300;


    /* Assign actions */
    $('.product-quantity input').change(function () {
        updateQuantity(this);
    });

    $('.product-removal button').click(function () {
        removeItem(this);
    });


    /* Recalculate cart */
    function recalculateCart() {
        var subtotal = 0;

        /* Sum up row totals */
        $('.product').each(function () {
            subtotal += parseFloat($(this).children('.product-line-price').text());
        });

        /* Calculate totals */
        var tax = subtotal * taxRate;
        var shipping = (subtotal > 0 ? shippingRate : 0);
        var total = subtotal + tax + shipping;

        /* Update totals display */
        $('.totals-value').fadeOut(fadeTime, function () {
            $('#cart-subtotal').html(subtotal.toFixed(2));
            $('#cart-tax').html(tax.toFixed(2));
            $('#cart-shipping').html(shipping.toFixed(2));
            $('#cart-total').html(total.toFixed(2));
            if (total == 0) {
                $('.checkout').fadeOut(fadeTime);
            } else {
                $('.checkout').fadeIn(fadeTime);
            }
            $('.totals-value').fadeIn(fadeTime);
        });
    }


    /* Update quantity */
    function updateQuantity(quantityInput) {
        /* Calculate line price */
        var productRow = $(quantityInput).parent().parent();
        var price = parseFloat(productRow.children('.product-price').text());
        var quantity = $(quantityInput).val();
        var linePrice = price * quantity;

        /* Update line price display and recalc cart totals */
        productRow.children('.product-line-price').each(function () {
            $(this).fadeOut(fadeTime, function () {
                $(this).text(linePrice.toFixed(2));
                recalculateCart();
                $(this).fadeIn(fadeTime);
            });
        });
    }


    /* Remove item from cart */
    function removeItem(removeButton) {
        /* Remove row from DOM and recalc cart total */
        var productRow = $(removeButton).parent().parent();
        productRow.slideUp(fadeTime, function () {
            productRow.remove();
            recalculateCart();
        });
    }

});

export default Cart;
