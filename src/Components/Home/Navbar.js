import React from "react";
import SearchInfo from "./SearchInfo";
import {Link, Route} from 'react-router-dom';


const menus = [
    {
        brand: 'Jordan',
        to: '/product/Jordan',
        exact: true
    },
    {
        brand: 'Yeezy',
        to: '/product/Yeezy',
        exact: true
    },
    {
        brand: 'Nike',
        to: '/product/Nike',
        exact: true
    },
    {
        brand: 'Adidas',
        to: '/product/Adidas',
        exact: true
    },
    {
        brand: 'RickOwens',
        to: '/product/RickOwens',
        exact: true
    },
    {
        brand: 'Phụ Kiện',
        to: '/product/phukien',
        exact: true
    },

];

const MenuLink = ({label, to, exact}) => {
    return (
        <Route
            path={to}
            exact={exact}
            children={({match}) => {
                let active = match ? 'custom' : '';
                return (
                    <li className={active}>
                        <Link to={to}>{label}</Link>
                    </li>
                )
            }}
        />
    )
};

class Navbar extends React.Component {


    render() {
        return (
            <nav className="fixme container-fluid active"
                 style={{fontFamily: 'sans-serif', width: '100%', zIndex: '100'}}>
                <div className=" navbar-collapse" id="myNavbar">
                    <ul id="jordan3" className="nav navbar-nav active " role="navigation">
                        {/*<li><Link to="/Jordan">Jordan</Link></li>*/}
                        {/*<li><Link to="/Yeezy">Yeezy</Link></li>*/}
                        {/*<li><Link to="/Adidas">Adidas</Link></li>*/}
                        {/*<li><Link to="/Nike">Nike</Link></li>*/}
                        {/*<li><Link to="/Ro">Rick Owens</Link></li>*/}
                        {/*<li><Link to="/PhuKien">Phụ Kiện</Link></li>*/}

                        {/*<MenuLink label = "Jordan" to = "/product/Jordan" exact={true}/>*/}
                        {/*<MenuLink label = "Yeezy" to = "/product/Yeezy" exact={true}/>*/}
                        {/*<MenuLink label = "Nike" to = "/product/Nike" exact={true}/>*/}
                        {/*<MenuLink label = "Adidas" to = "/product/Adidas" exact={true}/>*/}
                        {/*<MenuLink label = "RickOwens" to = "/product/RickOwens" exact={true}/>*/}
                        {/*<MenuLink label = "Phụ Kiện" to = "/product/phukien" exact={true}/>*/}
                        {this.showMenu(menus)}
                    </ul>
                    <span id="search2"><SearchInfo/></span>
                </div>

            </nav>
        );
    }

    showMenu = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.brand}
                        to={menu.to}
                        exact={menu.exact}
                    />
                )
            });
        }
        return result;

    };

}

export default Navbar;