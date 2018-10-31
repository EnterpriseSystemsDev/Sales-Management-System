import React from "react";
import Header from "../Home/Header";
import Navbar from "../Home/Navbar";
import Products from "./Products";
import Footer from "../Home/Footer";
import {connect} from "react-redux"


class Yeezy extends React.Component {

    componentDidMount(){
        document.title = "Yeezy"
    }
    render() {


        var {tasks} = this.props;
        const listProducts = tasks.map((item, index) => {
            if(item.brand === 'Yeezy')
            return (
                <div key ={index}>
                    <Products
                        key ={index}
                        id ={item.id}
                        name ={item.tensp}
                        image ={item.hinhanh}
                        price = {item.gia}
                        brand = {item.brand}
                        mota ={item.mota}
                        size = {item.size}
                        sale ={item.Sale}
                        isSale = {item.isSale}
                        isHot = {item.isHot}
                        item ={item}
                    />
                </div>
            );
        });
        return (
            <div>
                <Header/>
                <br/><br/><br/>
                <Navbar/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="row">

                            {listProducts}

                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        );
    }
}

const listProducts = state =>{
    return {
        tasks : state.tasks
    }
};
export default connect(listProducts,null)(Yeezy);
