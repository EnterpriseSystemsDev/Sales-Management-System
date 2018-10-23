import React from "react";
import Header from "../Home/Header";
import Navbar from "../Home/Navbar";
import Products from "./Products";
import Footer from "../Home/Footer";
import {connect} from "react-redux";
import {Route} from "react-router-dom"


class Jordan extends React.Component {
    componentDidMount(){
        document.title = "Jordan"
    }
    render() {
        let {tasks} = this.props;
        // let {match} = this.props;
        // let url = match.url;
        // //console.log(url);
        const listProducts = tasks.map((item, index) => {
            if(item.brand === 'Jordan')
            return (

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
                        isSale ={item.isSale}
                        isHot ={item.isHot}

                    />
            // {/*<NavLink to={'${url}/${item.brand}'}>*/}
            //     // </NavLink>
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
                <div className="row">
                   <Route path="products/Jordan:name" component={Products}/>
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
export default connect(listProducts,null) (Jordan);
