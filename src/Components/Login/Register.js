import React from "react";
import './Register.css'
import Header from "../Home/Header";
import $ from "jquery"
class Register extends React.Component {

    componentDidMount(){
        document.title = "Đăng Ký";
        $(document).ready(function () {
            $("#register").click(function () {
                var name = $("#name").val();
                var email = $("#email").val();
                var password = $("#pwd").val();
                var cpassword = $("#pwd1").val();
                if (name === '' || email === '' || password === '' || cpassword === '') {
                    alert("Xin Nhập Đủ Thông Tin");
                } else if ((password.length) < 6) {
                    alert("Password Phải dài hơn 6 kí tự");
                } else if (!(password).match(cpassword)) {
                    alert("Nhập Lại Password Không đúng");
                } else {
                    $.post("url đang kí", {
                        name1: name,
                        email1: email,
                        password1: password
                    }, function (data) {
                        if (data === 'Đăng ký thành công') {
                            $("form")[0].reset();
                        }
                        alert(data);
                    });
                }
            });
        });
    }

    render() {
        return (
            <div className="body">
            <Header/>
            <div className="container register">
                <h2>Đăng ký</h2>
                <br />
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-3" htmlFor="text">Tên Đăng Nhập<span className="notnull">*</span>:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Tên Đăng Nhập" id="name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3" htmlFor="email">Email<span className="notnull">*</span>:</label>
                        <div className="col-sm-6">
                            <input type="email" className="form-control" placeholder="Nhập email" id="email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3" htmlFor="pwd">Password<span className="notnull">*</span>:</label>
                        <div className="col-sm-6">
                            <input type="password" className="form-control" placeholder="Nhập password" id="pwd" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3" htmlFor="pwd">Nhập lại Password<span className="notnull">*</span>:</label>
                        <div className="col-sm-6">
                            <input type="password" className="form-control" placeholder="Nhập lại password" id="pwd1" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">Địa chỉ:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Nhập Địa chỉ" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">Số Điện Thoại:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Nhập Số Điện Thoại" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">Giới Tính:</label>
                        <div className="col-sm-6">
                            <select className="form-control">
                                <option>Chọn Giới Tính</option>
                                <option>Nam</option>
                                <option>Nữ</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-7 col-sm-8">
                            <button id="register" type="submit" className="btn btn-default" style={{marginBottom: '5%'}}>Đăng Ký</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default Register;
