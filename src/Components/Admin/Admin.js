import React from "react";
import './admincss.css'
import AdHeader from "./AdHeader";
import Note from "./Note";

import ThongKe from "./Statistical";
import {Link} from "react-router-dom";
import QLNV from "./ManagementEmployee";
import QLSP from "./ManagementProduct";
import FormHoaDon from "./FormBill";
import QLHD from "./ManagementBill";
import ListSale from "./ListSale";




class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayTK : true,
            displayQLNV: false,
            displayQLSP: false,
            displayFromHoadon: false,
            displayQLDH: false,
            displaySale: false,
        }
    }
    showTK = () => {
        this.setState({
            displayTK : true,
            displayQLNV : false,
            displayQLSP: false,
            displayFromHoadon: false,
            displayQLDH: false,
            displaySale: false,
        });
    };

    showQLNV = () => {
        this.setState({
            displayQLNV : true,
            displayTK : false,
            displayQLSP: false,
            displayFromHoadon: false,
            displayQLDH: false,
            displaySale: false,
        });
    };

    showQLSP = () => {
        this.setState({
            displayQLNV : false,
            displayTK : false,
            displayQLSP: true,
            displayFromHoadon: false,
            displayQLDH: false,
            displaySale: false,
        });
    };
    showFormHD = () => {
        this.setState({
            displayQLNV : false,
            displayTK : false,
            displayQLSP: false,
            displayFromHoadon: true,
            displayQLDH: false,
            displaySale: false,
        });
    };
    showQLHD = () => {
        this.setState({
            displayQLNV : false,
            displayTK : false,
            displayQLSP: false,
            displayFromHoadon: false,
            displayQLDH: true,
            displaySale: false,
        });
    };
    showProductSale = () => {
        this.setState({
            displayQLNV : false,
            displayTK : false,
            displayQLSP: false,
            displayFromHoadon: false,
            displayQLDH: false,
            displaySale: true,
        });
    };


    render() {
        let {displayTK,displayQLNV,displayQLSP,displayFromHoadon,displayQLDH, displaySale} = this.state;
        let ShowThongKe = displayTK ? <ThongKe /> : '';
        let ShowQLNV = displayQLNV ? <QLNV/> : '';
        let ShowQLSP = displayQLSP ? <QLSP  /> : '';
        let ShowFormHD = displayFromHoadon ? <FormHoaDon/> : '';
        let ShowQLHD = displayQLDH ? <QLHD/> : '';
        let ShowProductSale = displaySale ? <ListSale/> : '';
        return (
            <div>
            <div>
                <AdHeader/>
                <Note/>
                <section id="main">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-3 col-md-5 col-sm-6 col-xs-12">
                                <div className="list-group btn-group" style={{width: '100%'}}>

                                    <Link  to ="/#" className="list-group-item breadcrumb main-color-bg">
                                        <span className="fa fa-home " /> Role
                                    </Link>
                                    <button onClick={this.showTK} className={displayTK ? 'list-group-item active ' : 'list-group-item' }> <span className="fa fa-edit" />   Thống Kê </button>
                                    <button onClick={this.showQLSP} className={displayQLSP ? 'list-group-item active' : 'list-group-item' }><span className="fa fa-cart-plus" /> Quản Lý Bán Hàng </button>
                                    <button onClick={this.showQLNV} className={displayQLNV ? 'list-group-item  active' : 'list-group-item' }><span className="fa fa-users" /> Quản Lý Nhân Viên </button>
                                    <button onClick={this.showFormHD} className={displayFromHoadon ? 'list-group-item  active' : 'list-group-item' }><span className="fa fa-table"  /> Tạo Hóa Đơn </button>
                                    <button onClick={this.showQLHD} className={displayQLDH ? 'list-group-item  active' : 'list-group-item' }><span className="glyphicon glyphicon-list-alt"  /> Quản Lý Đơn Hàng </button>
                                    <button onClick={this.showProductSale} className={displaySale ? 'list-group-item  active' : 'list-group-item' }><span className="glyphicon glyphicon-tag"  /> Tạo Đợt Sale</button>

                                </div>
                            </div>
                            <div className="col-lg-9 col-md-7 col-sm-6 col-xs-12">
                                {ShowThongKe}
                                {ShowQLNV}
                                {ShowQLSP}
                                {ShowFormHD}
                                {ShowQLHD}
                                {ShowProductSale}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
                <br/><br/><br/>
                <footer id="footer">
                    <p> FooterCare Marketplace </p>

                </footer>
            </div>
        );
    }
}
export default Admin;
