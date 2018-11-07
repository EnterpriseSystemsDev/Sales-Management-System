import React from "react";
import {connect} from 'react-redux'
import HoaDon from "./Bill";

class ManagementBill extends React.Component {
    render() {
        let {Bill} = this.props;
        const listHD = Bill.map((item, index) => {
            return (

                <HoaDon
                    key={item.id}
                    index={index}
                    item={item}
                />

            );
        });
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Hóa Đơn</h3>
                </div>
                <div className="table-responsive">
                    <table className="table  table-hover ">
                        <tbody>
                        <tr className="warning">
                            <th>Tên Khách Hàng</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Size</th>
                            <th>Địa Chỉ</th>
                            <th>Ngày Mua</th>
                            <th>Mã Tích Điểm</th>
                            <th>Hành Động</th>
                        </tr>
                        {listHD}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

const ListEmployees = state => {
    return {
        Bill: state.Bill,
    }

};
export default connect(ListEmployees, null)(ManagementBill);



