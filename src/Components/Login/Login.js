import React from "react";
import {Redirect} from "react-router-dom"
import Header from "../Home/Header";
import {Link} from "react-router-dom";


class Login extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             txtUserName : '',
             txtPassWord: '',
         };

     }
     onChage = (e) =>{
         let target = e.target;
         let name = target.name;
         let value = target.type === 'checkbox' ? target.checked : target.value;
         this.setState({
            [name] : value
         });
     };
     onLogin = (e) =>{
         e.preventDefault();
         let {txtUserName,txtPassWord} = this.state;
         if(txtUserName === 'admin' && txtPassWord ==='admin'){
             localStorage.setItem('user', JSON.stringify({
                 username : txtUserName,
                 password : txtPassWord
             }));
         }
     };

    componentDidMount(){
        document.title = "Đăng Nhập"
    }
    render() {
        let {txtUserName,txtPassWord} = this.state;
        let loggedInUser = localStorage.getItem('user');
        if(loggedInUser !== null){
            return <Redirect to='/Admin'/>
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
                                       name="txtUserName"
                                       value={txtUserName}
                                       onChange={this.onChage}
                                />
                                <label>UserName</label>
                            </div>
                            <div className="inputBox">
                                <input type="password"
                                       required
                                       name="txtPassWord"
                                       value={txtPassWord}
                                       onChange={this.onChage}
                                />
                                <label>Password</label>
                            </div>
                            <input type="submit" name="btnSubMit" defaultValue="Login" />

                        </form>
                        <Link to="/dangky">
                            <span  className="pagenot" >Sign Up</span>
                        </Link>
                    </div>

                 </div>
            </div>
        );
    }
}

export default Login;
