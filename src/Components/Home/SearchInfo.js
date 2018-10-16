import React from "react";


class SearchInfo extends React.Component {
    constructor(props) {
        super(props);
        this.SearchInfo = this.SearchInfo.bind(this);
    }
    SearchInfo (){
        console.log(this.refs.info.value);
    }
    render() {
        return (
            <div id="jordan" className="navbar-left col-md-7 ">
                <form className="navbar-form " role="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search..."  ref="info"/>
                        <div className="input-group-btn">
                            <button onClick={this.SearchInfo} className="btn btn-defaul" type="button"><i
                                className="glyphicon glyphicon-search"/></button>
                        </div>


                    </div>
                </form>
            </div>
        );
    }
}
export default SearchInfo;