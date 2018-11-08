import React from "react";
import './Register.css'
import Header from "../Home/Header";
import $ from "jquery";
import axios  from "axios"
import callApi from "../../utils/apiCall";
class Register extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            email : '',
            name : '',
            address : '',
            phoneNumber:'',
            password:'',

        }
    }

    componentDidMount(){
        document.title = "Đăng Ký";
        // $(document).ready(function () {
        //     $("#register").click(function () {
        //         var name = $("#name").val();
        //         var email = $("#email").val();
        //         var password = $("#pwd").val();
        //         var cpassword = $("#pwd1").val();
        //         if (name === '' || email === '' || password === '' || cpassword === '') {
        //             alert("Xin Nhập Đủ Thông Tin");
        //         } else if ((password.length) <= 5) {
        //             alert("Password Phải dài hơn 6 kí tự");
        //         } else if (!(password).match(cpassword)) {
        //             alert("Nhập Lại Password Không đúng");
        //         } else {
        //             $.post("url đang kí", {
        //                 name1: name,
        //                 email1: email,
        //                 password1: password
        //             }, function (data) {
        //                 if (data === 'Đăng ký thành công') {
        //                     $("form")[0].reset();
        //                 }
        //                 alert(data);
        //             });
        //         }
        //     });
        // });
    }
    onChange = (event) =>{
        let target = event.target;
        let name = target.name;
        let value;
        if(target.type === 'checkbox'){
            value = target.checked;
        }
        else if (target.type === 'file' && event.target.files[0]){
            value  = target.value;
        }
        else {
            value = target.value;
        }
        this.setState({
            [name] : value,
        });
    };


    onSubmit = (event) =>{
        event.preventDefault();
        let register = {
            username: this.state.username,
            email : this.state.email,
            name : this.state.name,
            address : this.state.address,
            phoneNumber: this.state.phoneNumber,
            password:this.state.password,

        };
                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Account-Role": "ROLE_CUSTOMER",
                    }
                };
                // callApi('auth/register','POST', register).then(res =>{
                //     console.log(res);
                // })
                axios.post('http://localhost:8080/footcare/api/auth/register', register , axiosConfig).then(res =>{
                    alert("đăng ký thành công",res);
                }).catch(err => {
                    alert('Không được rồi tiếc ghê' , err);
                });
    };
    render() {
        return (
            <div className="body">
            <Header/>
            <div className="container register">
                <h2>Đăng ký</h2>
                <br />
                <form className="form-horizontal" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="control-label col-sm-3" htmlFor="text">Tên Đăng Nhập<span className="notnull">*</span>:</label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Tên Đăng Nhập"
                                   name="name"
                                   value={this.state.name}
                                   onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3" htmlFor="email">Email<span className="notnull">*</span>:</label>
                        <div className="col-sm-6">
                            <input type="email"
                                   className="form-control"
                                   placeholder="Nhập email"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3" htmlFor="pwd">Password<span className="notnull">*</span>:</label>
                        <div className="col-sm-6">
                            <input type="password"
                                   className="form-control"
                                   placeholder="Nhập password"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3" htmlFor="pwd">Tên<span className="notnull">*</span>:</label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Nhập tên"
                                   name="username"
                                   value={this.state.username}
                                   onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">Địa chỉ:</label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Nhập Địa chỉ"
                                   name="address"
                                   value={this.state.address}
                                   onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">Số Điện Thoại:</label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Nhập Số Điện Thoại"
                                   name="phoneNumber"
                                   value={this.state.phoneNumber}
                                   onChange={this.onChange}
                            />
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
