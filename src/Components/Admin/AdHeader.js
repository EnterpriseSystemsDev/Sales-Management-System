import React from "react";
import img from "../../hinhanh/logo.png";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
class AdHeader extends React.Component {

    render() {
        return (
            <nav className="admin navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle " data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <Link to="/" className="navbar-brand ">
                            <img src={img} style={{width: 30, height: 30, float: 'left'}} alt="logo" />
                            <span style={{marginLeft: 5}}>FootCare.com</span>
                        </Link>
                    </div>
                    <div  className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right ">
                                <li><a>Welcome, username </a></li>
                                <li><a >Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}
const listProducts = state =>{
    return {
        user : state.user,
        // task : state.task,
        // editProduct : state.editProduct
    }

};
export default connect(listProducts,null)(AdHeader);
