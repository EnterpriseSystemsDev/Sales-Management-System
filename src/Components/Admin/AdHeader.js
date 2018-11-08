import React from "react";
import img from "../../hinhanh/logo.png";
import {Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from "../../actions";
class AdHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history: ''
        }
    }
    logOut = (e) =>{
        ///e.preventDefault();
        // this.setState({
        //     history : this.props.history
        // });
        localStorage.removeItem('user');
        this.props.removeUser();
        //return <Redirect to ="/"/>

       this.props.history.push('/');
    };

    render() {
        let {ChangeTheme,history} = this.props;
       // console.log(history.push);
        return (
            <nav className={ChangeTheme ? 'admin navbar navbar-inverse' : 'admin navbar navbar-default'}>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle " data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <Link to="/" className="navbar-brand ">
                            <img src={img} style={{width: 30, height: 30, float: 'left'}} alt="logo" />
                            <span className="text-brand" style={{marginLeft: 5}}>FootCare.com</span>
                        </Link>
                    </div>
                    <div  className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right ">
                                <li><a>Welcome, username </a></li>
                                <li onClick={this.logOut}><a >Logout <span className="glyphicon glyphicon-log-out"/></a></li>
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
        ChangeTheme: state.ChangeTheme,
        // task : state.task,
        // editProduct : state.editProduct
    }

};
const mapDispatchToProps = (dispatch, props) => {
    return {
        removeUser : () =>{
            dispatch(actions.removeUser());
        }
    }
};
export default connect(listProducts,mapDispatchToProps)(AdHeader);
