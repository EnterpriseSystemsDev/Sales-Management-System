import React from "react";
import {connect} from 'react-redux';

class RecruitmentDetails extends React.Component {

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
export default connect(mapStateToProps,null) (RecruitmentDetails);
