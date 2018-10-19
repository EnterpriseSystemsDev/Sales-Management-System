import React from "react";
import MySlides from "./MySlides";
import '../../Style.css';
import ItemsHot from "./ItemsHot";
import ItemsSale from "./ItemsSale";




class Box2 extends React.Component {

    render() {
        return (
            <div id="box2" className=" container-fluid">

                <MySlides />
                <hr/>
                <div className="container">

                    <ItemsHot />
                    <br/>
                    <ItemsSale />
                </div>
                <br/>
            </div>

        );
    }
}
export default Box2;
