import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

class ItemsSale extends React.Component {

    render() {
        let {tasks} =this.props;
        const listItemsSALE = tasks.map((item, index)  => {
            if (item.isSale === true ) {
                let giaSale = parseInt(item.gia - (item.gia * item.Sale)/100);
                return (
                    <div key={index}>
                        <div className="col-md-4 col-sm-6" >
                            <div className="box6 ">
                                <p style={{padding:'10px',color:'red'}}> -{item.Sale}%</p>
                                <img src={require("../../hinhanh/" + item.hinhanh + ".png")} alt="imageProduct"/>

                                <div className="box-content">
                                    <h3 className="title">{item.tensp}</h3>
                                    <span className="post" style={{fontSize:'13px'}}><strike>{item.gia}$</strike></span>
                                    <span className="post" style={{color:'red'}}>{giaSale}$</span>
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
                    <h1 className="w3-text">Sản Phẩm Sale</h1>
                    <hr/>
                </div>
                {listItemsSALE}
            </div>
        );
    }
}
const listProducts = state =>{
    return {
        tasks : state.tasks,
    }

};


export default connect(listProducts,null)  (ItemsSale);
