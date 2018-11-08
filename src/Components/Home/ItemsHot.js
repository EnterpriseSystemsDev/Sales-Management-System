import React from "react";
import {connect} from 'react-redux'
import Products from "../Products/Products";
import * as actions from "../../actions";
class ItemsHot extends React.Component {

    componentDidMount(){
        this.props.listAllVersion();
    }
    render() {
        let {Version} = this.props;

        const listItemsHOT = Version.map((item, index)  => {
            if (item.isHot === true ) {
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
            if(Version[i].isHot >= 0){
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
            else {
                return ''
            }
        }
        return '';
    }

}
const listProducts = state =>{
    return {
        tasks : state.tasks,
        keyword: state.keyword,
        Version: state.Version,
    }

};
const mapDispatchToProps = (dispatch, props) => {
    return{
        listAllVersion : () =>{
            dispatch(actions.listAllVersionRequest());
        },
    };

};

export default connect(listProducts,mapDispatchToProps)  (ItemsHot);





