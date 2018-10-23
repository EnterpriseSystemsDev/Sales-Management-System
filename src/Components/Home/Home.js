import React from 'react';
import '../../Style.css';
import Header from "./Header";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TuyenDung from "./Recruitment";
import Box4 from "./Box4";

class Home extends  React.Component{
    componentDidMount(){
        document.title = "FootCare"
    }
    render(){
        return (
            <div>
                <Header/>
                <br /><br /><br />
                <Box1/>
                <Navbar/>
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
