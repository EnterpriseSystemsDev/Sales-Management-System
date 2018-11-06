import React from "react";
import {Redirect} from "react-router-dom"
import Header from "../Home/Header";
import {Link} from "react-router-dom";
import callApi from "../../utils/apiCall";
import SanPham from "../Admin/Product";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassWord: '',
            username: [],
            password: [],
        };

    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    };

    onLogin = (e) => {
        e.preventDefault();
        let {txtUserName, txtPassWord} = this.state;
        if (txtUserName === this.state.username && txtPassWord === this.state.password) {
            localStorage.setItem('user', JSON.stringify({
                username: txtUserName,
                password: txtPassWord
            }));
        }
    };

    componentDidMount() {
        document.title = "Đăng Nhập";
        callApi('users', 'GET', null).then(res => {
            const test = res.data;
            const listSP = test.map((task, index) => {
                return (
                    this.setState({
                        username: task.username,
                        password: task.password
                    })
                )
            });
        })
    }

    render() {
        console.log(this.state);
        let {location} = this.props;
        console.log(location);
        let {txtUserName, txtPassWord} = this.state;
        let loggedInUser = localStorage.getItem('user');
        if (loggedInUser !== null) {

            // return <Redirect to ='/Admin'/>
            return <Redirect from="/Login" to={{
                pathname: '/Admin',
                state: {
                    from: location
                }
            }
            }/>
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
                                       onChange={this.onChange}
                                />
                                <label>UserName</label>
                            </div>
                            <div className="inputBox">
                                <input type="password"
                                       required
                                       name="txtPassWord"
                                       value={txtPassWord}
                                       onChange={this.onChange}
                                />
                                <label>Password</label>
                            </div>
                            <input type="submit" name="btnSubMit" defaultValue="Login"/>

                        </form>
                        <Link to="/dangky">
                            <span className="pagenot">Sign Up</span>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;
