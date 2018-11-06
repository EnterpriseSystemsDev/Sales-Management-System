import React from "react";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";


class SearchInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            keyword: '',
        }
    }
    onChange = (event) =>{
      this.setState({
         keyword : event.target.value
      });
    };
    SearchInfo = () =>{
        this.props.onSearchProduct(this.state.keyword);
    };
    render() {
        return (
            <div id="jordan" className="navbar-left col-md-7 ">
                <form className="navbar-form " role="search">
                    <div className="input-group">
                        <input type="text"
                               className="form-control"
                               name="keyword"
                               placeholder="Search..."
                               value={this.state.keyword}
                               onChange={this.onChange}
                        />

                        <div className="input-group-btn">
                            <button className="btn btn-defaul"
                                    type="button"
                                    onClick={this.SearchInfo}>
                                <i className="glyphicon glyphicon-search"/>
                            </button>
                        </div>


                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {}

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

export default connect(mapStateToProps,mapDispatchToProps)(SearchInfo);