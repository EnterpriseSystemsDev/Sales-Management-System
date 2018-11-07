import React from "react";
import img from "../../hinhanh/logo.png";
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';

class AdHeader extends React.Component {

    logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        return <Redirect to="/"/>
    };

    render() {
        let {ChangeTheme} = this.props;
        //console.log(match);
        return (
            <nav className={ChangeTheme ? 'admin navbar navbar-inverse' : 'admin navbar navbar-default'}>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle " data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <Link to="/" className="navbar-brand ">
                            <img src={img} style={{width: 30, height: 30, float: 'left'}} alt="logo"/>
                            <span className="text-brand" style={{marginLeft: 5}}>FootCare.com</span>
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right ">
                            <li><a>Welcome, username </a></li>
                            <li onClick={this.logOut}><a>Logout <span className="glyphicon glyphicon-log-out"/></a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

const listProducts = state => {
    return {
        user: state.user,
        ChangeTheme: state.ChangeTheme,
        // task : state.task,
        // editProduct : state.editProduct
    }

};
export default connect(listProducts, null)(AdHeader);
