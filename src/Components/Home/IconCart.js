import React from "react";
import  { Link} from 'react-router-dom';
class IconCart extends React.Component {
   /* constructor(props) {
        super(props);

    }*/

    render() {
        return (
            <li><Link to="/Cart"><span className="glyphicon glyphicon-shopping-cart" />  Cart</Link></li>
        );
    }
}
export default IconCart;
