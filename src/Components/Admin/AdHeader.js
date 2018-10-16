import React from "react";
import img from "../../hinhanh/logo.png";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
class AdHeader extends React.Component {

    render() {
        // let {user} = this.props;
        // const listSP = user.map((item, index) => {
        //     return(<a key={index}>Welcome, {item.username} </a>)
        //
        //
        // });
        return (
            <nav className="admin navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <Link to="/" className="navbar-brand ">
                            <img src={img} style={{width: 30, height: 30, float: 'left'}} alt="logo" />
                            <span style={{marginLeft: 5}}>FootCare.com</span>
                        </Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right collapse">
                            <li><a>Welcome, username </a></li>
                            <li ><a >Logout</a></li>

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
