import React from "react";
import Header from "../Home/Header";
import Navbar from "../Home/Navbar";
import Products from "./Products";
import Footer from "../Home/Footer";
import {connect} from "react-redux";
import {Route} from "react-router-dom"
import * as actions from "../../actions";


class Jordan extends React.Component {

    componentDidMount(){
        document.title = "Jordan";
        this.props.listAllVersion();
    }
    render() {
        let {Version} = this.props;
        console.log(Version);
        const listProducts = Version.map((item, index) => {
            if(item.nameProduct === 'Jordan ')
            return (
                    <Products
                        key ={index}
                        id ={item.id}
                        name ={item.version}
                        image ={item.hinhanh}
                        price = {item.gia}
                        brand = {item.nameProduct}
                        mota ={item.mota}
                        size = {item.size}
                        sale ={item.Sale}
                        isSale ={item.isSale}
                        isHot ={item.isHot}
                        item ={item}
                    />
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
        tasks : state.tasks,
        Version : state.Version,
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return{
        listAllVersion : () =>{
            dispatch(actions.listAllVersionRequest());
        },
    };

};
export default connect(listProducts,mapDispatchToProps) (Jordan);
