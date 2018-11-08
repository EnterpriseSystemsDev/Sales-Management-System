import React from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
class FormBill extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tensp: '',
            gia:'',
            size: '',
            tenkh: '',
            diaChi: '',
            ngayMua:  '',
            maTichDiem:  '',
        }
    }

    onChange = (event) =>{
        //ep true false tại đây
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    onClear = () =>{
        this.setState({
            tensp: '',
            gia:'',
            size: '',
            tenkh: '',
            diaChi: '',
            ngayMua:  '',
            maTichDiem:  '',

        });
    };

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.ADDFORMBILL(this.state);
        //xoa data
        this.onClear();
    };

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">Hóa Đơn</h2>
                </div>

                <form className="panel-body" onSubmit={this.onSubmit}>
                    {/*<div className="form-group col-md-6">*/}
                        {/*<label htmlFor="usr">Tên Khách Hàng:</label>*/}
                        {/*<input type="text"*/}
                               {/*required*/}
                               {/*className="form-control"*/}
                               {/*name="tenkh"*/}
                               {/*value={this.state.tenkh}*/}
                               {/*onChange={this.onChange}*/}
                        {/*/>*/}
                    {/*</div>*/}
                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Mã Sản Phẩm:</label>
                        <input type="text"
                               required
                               className="form-control"
                               name="tensp"
                               value={this.state.tensp}
                               onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Tiền Khách Hàng:</label>
                        <input type="text"
                               className="form-control"
                               name="gia"
                               required
                               value={this.state.gia}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Size:</label>
                        <select
                            className="form-control"
                            name="size"
                            required
                            value={this.state.size}
                            onChange={this.onChange}
                        >
                            <option defaultValue="0" >Chọn Size:</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                        </select>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Địa Chỉ:</label>
                        <input type="text"
                               className="form-control"
                               name="diaChi"
                               required
                               value={this.state.diaChi}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Ngày Mua:</label>
                        <input type="date"
                               className="form-control"
                               name="ngayMua"
                               required
                               value={this.state.ngayMua}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Mã Tích Điểm:</label>
                        <input type="text"
                               required
                               className="form-control"
                               name="maTichDiem"
                               value={this.state.maTichDiem}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-3">
                       <br/>
                        <button  type="submit" className="form-control btn btn-info" > Tạo</button>
                    </div>


                </form>
            </div>

        );
    }
}
const mapStateToProps = state =>{
    return {
        Bill : state.Bill,

    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        ADDFORMBILL : (task) => {
            dispatch(actions.addFormHD(task))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (FormBill);



