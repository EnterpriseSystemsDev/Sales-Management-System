import React from "react";
import  { Link} from 'react-router-dom';

class IconLogin extends React.Component {
    /*constructor(props) {
        super(props);

    }*/

    render() {
        return (
            <li><Link to="/Login"><span className="glyphicon glyphicon-user" />  Login</Link></li>
        );
    }
}
export default IconLogin;
