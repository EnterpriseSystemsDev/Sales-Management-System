import React from 'react';
import '../../Style.css';
import Header from "./Header";
import Box1 from "./box1_video";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Footer from "./Footer";
import Nav from "./Nav";
import TuyenDung from "./TuyenDung";
import Box4 from "./Box4";


class Home extends  React.Component{

    render(){
        return (
            <div>
                <Header/>
                <br /><br /><br />
                <Box1/>
                <Nav/>
                <Box2/>
                <Box3/>
                <Box4/>
                <TuyenDung/>
                <Footer/>
            </div>
        );

    }
}

export default Home;
