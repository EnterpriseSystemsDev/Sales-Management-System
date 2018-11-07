import React from "react";
import {connect} from 'react-redux'

class Item extends React.Component {
    render() {
        let {tasks} = this.props;
        const listItems = tasks.map((item, index) => {
            return (
                <div key={index}>


                </div>
            );
        });

        return (
            <div>
                {listItems}
            </div>
        );
    }
}

const listProducts = state => {
    return {
        tasks: state.tasks,
    }

};


export default connect(listProducts, null)(Item);
