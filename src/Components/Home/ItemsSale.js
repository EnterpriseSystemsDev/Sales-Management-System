import React from "react";
import {connect} from 'react-redux'
import Products from "../Products/Products";

class ItemsSale extends React.Component {

    render() {
        let {Version} =this.props;
        const listItemsSALE = Version.map((item, index)  => {
            if (item.isSale === true ) {
                return (
                    <div key={index}>
                        <Products
                            key ={index}
                            id ={item.id}
                            name ={item.version}
                            image ={item.hinhanh}
                            price = {item.gia}
                            brand = {item.nameProduct}
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
        for (let i = 0 ; i < Version.length; i ++){
            if(Version[i].isSale > 0){
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
            else {
                return ''
            }
        }

    }
}
const listProducts = state =>{
    return {
        Version : state.Version,
    }

};


export default connect(listProducts,null)  (ItemsSale);
