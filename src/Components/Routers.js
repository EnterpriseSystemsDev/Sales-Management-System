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
        path: '/Cart',
        exact: true,
        main : () => <Cart/>
    },

    {
        path: '/Jordan',
        exact: true,
        main : () => <Jordan/>
    },
    {
        path: '/Yeezy',
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
        path: '',
        exact: false,
        main : () => <NotFound/>
    },

];
export default routes;