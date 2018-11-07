import React from "react";
import {connect} from "react-redux";


class ProductDetailItem extends React.Component {
    componentDidMount() {
        document.title = "product Detail"
    }

    render() {
        let {item, Store} = this.props;
        let img = item.hinhanh.slice(12);
        const store = Store.map((item, index) => {
            return (
                <span key={index}>{item.store}</span>
            );
        });
        return (
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img
                                        src={require("../../hinhanh/" + img)} alt={this.props.name}/></div>
                                    <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252"/>
                                    </div>
                                    <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252"/>
                                    </div>
                                    <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252"/>
                                    </div>
                                    <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252"/>
                                    </div>
                                </div>
                                <ul className="preview-thumbnail nav nav-tabs">
                                    <li className="active"><a data-target="#pic-1" data-toggle="tab"><img
                                        src={require("../../hinhanh/" + img)} alt={this.props.name}/></a></li>
                                    <li><a data-target="#pic-2" data-toggle="tab"><img
                                        src="http://placekitten.com/200/126"/></a></li>
                                    <li><a data-target="#pic-3" data-toggle="tab"><img
                                        src="http://placekitten.com/200/126"/></a></li>
                                    <li><a data-target="#pic-4" data-toggle="tab"><img
                                        src="http://placekitten.com/200/126"/></a></li>
                                    <li><a data-target="#pic-5" data-toggle="tab"><img
                                        src="http://placekitten.com/200/126"/></a></li>
                                </ul>
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{this.props.brand} : {this.props.name}</h3>

                                <p className="product-description">{this.props.mota}</p>
                                <h4 className="price">Giá: <span>{this.props.price}$</span></h4>

                                <h5 className="sizes">sizes:
                                    <span className="size" data-toggle="tooltip" title="small">{this.props.size}</span>
                                </h5>
                                <h5 className="colors">Cửa Hàng: {store}
                                </h5>
                                <div className="action">
                                    <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const listProducts = state => {
    return {
        tasks: state.tasks,
        Version: state.Version,
        Store: state.Store,
    }
};
export default connect(listProducts, null)(ProductDetailItem);
