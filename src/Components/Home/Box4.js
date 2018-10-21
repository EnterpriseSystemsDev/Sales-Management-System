import React from 'react';
import img from "../../hinhanh/bia.jpg"
class Box4 extends  React.Component{

    render(){
        return (
            <div className="container-fluid" style={{ backgroundColor: '#ffffff'}}>
                <img src={img} alt="Jordan" style={{width: '100%'}} />
            </div>
        );

    }
}

export default Box4;
