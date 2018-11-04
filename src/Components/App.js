import React, { Component } from 'react';
import '../Style.css';
import  {BrowserRouter,Route,Switch} from 'react-router-dom';
import routes from "./Routers";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Switch>
                    {this.showContent(routes)}
                </Switch>
            </div>
            </BrowserRouter>
        );
    }

showContent = (routes) =>{
    let result =null;
    if(routes.length > 0){
        result=routes.map((route,index)  => {
            return (
                <Route key={index} path={route.path} exact = {route.exact} component={route.main}/>
            );
        });
    }
    return result;
}

}
export default App;
