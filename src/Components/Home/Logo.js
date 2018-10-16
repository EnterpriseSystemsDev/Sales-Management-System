import React from "react";
import Logo1 from '../../hinhanh/logo.png';
import  { Link} from 'react-router-dom';
class Logo extends React.Component {
   /* constructor(props) {
        super(props);

    }*/

    ShowToggle () {

        var x = document.getElementById("jordan");
        var y = document.getElementById("jordan1");
        var z = document.getElementById("jordan3");
        if (x.style.display === "none" || y.style.display === "none" || z.style.display === "none") {
            x.style.display = "block";
            y.style.display = "block";
            z.style.display = "block";
        }
        else {
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";
        }

    }

    render() {
        return (
            <div className="navbar-header">
                <Link to="/" className="navbar-brand ">
                    <img src={Logo1} alt="logo" style={{width: 30, height: 30, float: 'left'}} />
                    <span style={{marginLeft: 5}}>FootCare.com</span>
                </Link>
                <div onClick={this.ShowToggle} className="toggle"><i  className="fa fa-bars" aria-hidden="true" /></div>
            </div>
        );
    }
}
export default Logo;