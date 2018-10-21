import React from "react";
import img from "../../hinhanh/tuyendung.jpg"
import {connect} from 'react-redux';
import  {Link} from 'react-router-dom';


class Recruitment extends React.Component {

    render() {
        let {Recruitment} = this.props;
        const tinTD = Recruitment.map((item, index) => {
            return (

                    <div className="thumbnail col-md-4"  key={index}>
                        <div className="tuyendung">
                            <img src={img} alt="recruimentImage"/>
                            <div className="box-content">
                                <h4 style={{color:'white',textAlign:'right',marginTop:'0',
                                    padding:'12px',backgroundColor:'rgba(0, 0, 0, 0.4)',
                                    fontStyle:'italic',
                                }}>
                                    {item.thoiGian}
                                </h4>
                                <div className="inner-content">
                                    <h3 className="title">{item.viTriTD}</h3>
                                    <span className="post">
                                    <Link to="ChiTietTuyenDung"
                                          className=" btn btn-dark btn-md"
                                          style={{textAlign: 'center'}}
                                    >Xem Chi Tiết
                                    </Link>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
            );
        });
        return (
            <div id="box4" className="container">
                <div className="panel-body" style={{fontFamily: 'sans-serif'}}>
                    <h1 className="w3-text">FootCare Tuyển Dụng</h1>
                    <hr/>
                </div>
                <div className=" container">
                    {tinTD}

                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        Recruitment : state.Recruitment,

    }
};
export default connect(mapStateToProps,null) (Recruitment);
