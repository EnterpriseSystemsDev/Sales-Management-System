import React from "react";
import Logo from "./Logo";
import SearchInfo from "./SearchInfo";
import IconLogin from "./IconLogin";
import IconCart from "./IconCart";

class Header  extends  React.Component{
    render(){
        return (
            <div className="container-fluid ">
                <nav className="navbar navbar-inverse navbar-fixed-top active">
                    <Logo/>
                    <span id="search1"><SearchInfo /></span>
                    <ul id="jordan1" className="nav navbar-nav navbar-right" style={{marginRight: '2%'}}>
                        <IconLogin/>
                        <IconCart/>
                    </ul>
                </nav>
            </div>
        );

    }
}


export default Header;