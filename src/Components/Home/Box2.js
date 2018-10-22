import React from "react";
import MySlides from "./MySlides";
import '../../Style.css';
import ItemsHot from "./ItemsHot";
import ItemsSale from "./ItemsSale";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";




class Box2 extends React.Component {

    render() {
        // let {keyword,tasks,FilterTable} = this.props;
        // if(keyword){
        //     tasks = tasks.filter((task) =>{
        //         return (task.tensp.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
        //             task.brand.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
        //             task.gia.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
        //             task.mota.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
        //             task.size.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
        //     });
        // }
        // tasks = tasks.filter((task) =>{
        //    return task.tensp.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        // });
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
const mapStateToProps = state =>{
    return {
        keyword: state.SearchProduct,
        tasks: state.tasks,
        FilterTable : state.FilterTable,
    }

};
const mapDispatchToProps = (dispatch, props) => {
    return{
        onFilterTable: (filter) =>{
            dispatch(actions.filterTable(filter));
        },
        onSearchProduct : (keyword) =>{
            dispatch(actions.searchProduct(keyword));
        }
    };

};

export default connect(mapStateToProps,mapDispatchToProps)(Box2) ;
