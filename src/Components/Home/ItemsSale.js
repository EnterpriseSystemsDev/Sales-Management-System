import React from "react";
import {connect} from 'react-redux'
import Products from "../Products/Products";

class ItemsSale extends React.Component {

    render() {
        let {tasks} =this.props;
        const listItemsSALE = tasks.map((item, index)  => {
            if (item.isSale === true ) {
                return (
                    <div key={index}>
                        <Products
                            key ={index}
                            id ={item.id}
                            name ={item.tensp}
                            image ={item.hinhanh}
                            price = {item.gia}
                            brand = {item.brand}
                            mota ={item.mota}
                            size = {item.size}
                            sale ={item.Sale}
                            isSale={item.isSale}
                            isHot = {item.isHot}
                            item ={item}
                        />
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
