import React from "react";
import MySlides from "./MySlides";
import '../../Style.css';
import ItemsHot from "./items_hot";
import ItemsSale from "./Items_Sale";




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
