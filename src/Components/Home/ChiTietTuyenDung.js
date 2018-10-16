import React from "react";
import img from "../../hinhanh/tuyendung.jpg"
import {connect} from 'react-redux';
import  {Link} from 'react-router-dom';

class ChiTietTuyenDung extends React.Component {

    render() {
        let {item,index} = this.props;

            return (
                <div key={index}>
                    {item.luongTD}
                    {item.viTriTD}
                </div>
            );


    }
}

const mapStateToProps = state =>{
    return {
        Recruitment : state.Recruitment,

    }
};
export default connect(mapStateToProps,null) (ChiTietTuyenDung);
