import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
class ItemsHot extends React.Component {

    render() {
        let {tasks} =this.props;
        const listItemsHOT = tasks.map((item, index)  => {
            if (item.isHot === true ) {
                return (
                    <div key={index}>
                        <div className="col-md-4 col-sm-6" >
                            <div className="box6 ">
                                <img src={require("../../hinhanh/" + item.hinhanh + ".png")} alt="imageProduct"/>
                                <div className="box-content">
                                    <h3 className="title">{item.tensp}</h3>
                                    <span className="post">{item.gia}</span>
                                    <ul className="icon">
                                        <li><a  className="fa fa-search" data-toggle="modal" data-target="#product_view"/> </li>
                                        <li><Link to="#b" className="glyphicon glyphicon-shopping-cart"/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }

        });
        return (
            <div className="row">
                <div className="panel-body" style={{fontFamily: 'sans-serif'}}>
                    <h1 className="w3-text">Sản Phẩm HOT</h1>
                    <hr/>
                </div>
                {listItemsHOT}
            </div>
        );
    }
}
const listProducts = state =>{
    return {
        tasks : state.tasks,
    }

};


export default connect(listProducts,null)  (ItemsHot);





