import React from "react";
import SearchInfo from "./SearchInfo";
import  {Link} from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <nav  className="fixme container-fluid active" style={{fontFamily: 'sans-serif', width: '100%',zIndex:'100'}}>
                <div className=" navbar-collapse" id="myNavbar">
                    <ul id="jordan3" className="nav navbar-nav active " role="navigation">
                        <li><Link to="/Jordan">Jordan</Link></li>
                        <li><Link to="/Yeezy">Yeezy</Link></li>
                        <li><Link to="/Adidas">Adidas</Link></li>
                        <li><Link to="/Nike">Nike</Link></li>
                        <li><Link to="/Ro">Rick Owens</Link></li>
                        <li><Link to="/PhuKien">Phụ Kiện</Link></li>
                    </ul>
                    <span id="search2"><SearchInfo/></span>
                </div>

            </nav>
        );
    }

}

export default Navbar;