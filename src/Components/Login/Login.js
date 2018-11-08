import React from "react";
import {Redirect} from "react-router-dom"
import Header from "../Home/Header";
import {Link} from "react-router-dom";
import callApi from "../../utils/apiCall";
import $ from "jquery";
import axios from 'axios';
import {connect} from "react-redux"
import * as actions from "../../actions";


class Login extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             usernameOrEmail : '',
             password: '',
         };

     }
     onChange = (e) =>{
         let target = e.target;
         let name = target.name;
         let value = target.type === 'checkbox' ? target.checked : target.value;
         this.setState({
            [name] : value
         });
     };

     onLogin = (e) =>{
         e.preventDefault();
         // if(txtUserName === this.state.username && txtPassWord === this.state.password){
         //     localStorage.setItem('user', JSON.stringify({
         //         username : txtUserName,
         //         password : txtPassWord
         //     }));
         // }
         let login = {
             usernameOrEmail: this.state.usernameOrEmail,
             password : this.state.password,

         };
         // let axiosConfig = {
         //     headers: {
         //         'Content-Type': 'application/json;charset=UTF-8',
         //         "Account-Role": "ROLE_CUSTOMER",
         //     }
         // };
         // callApi('auth/register','POST', register).then(res =>{
         //     console.log(res);
         // })
         axios.post('http://localhost:8080/footcare/api/auth/login', login).then(res =>{
             console.log("đăng nhập thành công",res);
             //var user = res.data.accessToken;
             this.props.getAllUser(res.data);
         }).catch(err => {
            console.log(err);
            //alert('Sai Tài Khoảng Hoặc Mật Khẩu');
             $('#error').css({"display": "block"})
         });
     };

    componentDidMount() {
        document.title = "Đăng Nhập";
        // callApi('users', 'GET', null).then(res => {
        //     const test = res.data;
        //     const listSP = test.map((task, index) => {
        //            return(
        //                this.setState ({
        //                    username :task.username,
        //                    password: task.password
        //                })
        //            )
        //     });
        // })
        axios.get('http://5bdc5e5b433b4f0013e6e0c4.mockapi.io/api/users').then(res =>{
            const users = res.data.map((user, index) =>{
                 this.setState({
                         username: user.username,
                         password: user.password
                })
            })

        })
    }

    render() {
       // console.log(this.state);
        let {location,history,users} = this.props;
         if(users.accessToken){
             localStorage.setItem('user', JSON.stringify({
                user :   users.accessToken
             }));
         }
         // else if(users.accessToken === true){
         //
         // }
        let loggedInUser = localStorage.getItem('user');
        if(loggedInUser !== null){
            history.push('/Admin');
        }
        return (

            <div>
                <Header/>
                <div className="container-fluid lg">
                    <div className="box">
                        <h2>Sign In</h2>
                        <form onSubmit={this.onLogin}>
                            <div className="inputBox">
                                <input type="text"
                                       required
                                       autoComplete="off"
                                       name="usernameOrEmail"
                                       value={this.state.usernameOrEmail}
                                       onChange={this.onChange}
                                />
                                <label>UserName</label>
                            </div>
                            <div className="inputBox">
                                <input type="password"
                                       required
                                       name="password"
                                       value={this.state.password}
                                       onChange={this.onChange}
                                />
                                <label>Password</label>
                            </div>
                            <input type="submit" name="btnSubMit" defaultValue="Login" />

                        </form>
                        <p id="error" style={{color:'red', display:'none'}}>Sai tài Khoản hoặc mật khẩu</p>
                        <Link to="/dangky">
                            <span  className="pagenot" >Sign Up</span>
                        </Link>
                    </div>

                 </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        tasks : state.tasks,
        editProduct : state.editProduct,
        displayForm:state.displayForm,
        users: state.users,

    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllUser: (users) =>{
          dispatch(actions.getAllUsers(users))
        },
        closeForm : () =>{
            dispatch(actions.closeForm())
        },
        onAddProducts : (task) =>{
            dispatch(actions.addProductRequest(task))
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (Login);
