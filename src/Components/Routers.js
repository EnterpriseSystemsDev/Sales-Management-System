import React from "react";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Jordan from "./Products/Jordan";
import NotFound from "./NotFound";
import Yeezy from "./Products/Yeezy";
import Admin from "./Admin/Admin";
import ThongKe from "./Admin/Statistical";
import Cart from "./Home/Cart";
import ChiTietTuyenDung from "./Home/RecruitmentDetails";
import Register from "./Login/Register";
import Products from "./Products/Products";


const routes = [
    {
        path: '/',
        exact: true,
        main : () => <Home/>
    },
    {
        path: '/Login',
        exact: true,
        main : () => <Login/>
    },
    {
        path: '/dangky',
        exact: true,
        main : () => <Register/>
    },
    {
        path: '/Cart',
        exact: true,
        main : () => <Cart/>
    },

    {
        path: '/product/Jordan',
        exact: true,
        main : ({match}) => <Jordan match = {match}/>
    },
    {
        path: '/product/Yeezy',
        exact: true,
        main : () => <Yeezy/>
    },
    {
        path: '/Admin',
        exact: true,
        main : () => <Admin/>
    },
    {
        path: '/QLNV',
        exact: true,
        main : () => <ThongKe/>
    },
    {
        path: '/ChiTietTuyenDung',
        exact: true,
        main : () => <ChiTietTuyenDung/>
    },
    {
        path: '/product',
        exact: true,
        main : ({match}) => <Products match ={match}/>
    },
    {
        path: '',
        exact: false,
        main : () => <NotFound/>
    },

];
export default routes;