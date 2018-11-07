import React from "react";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";


class Recruitment extends React.Component {
    onClear = () => {
        this.setState({
            id: '',
            tieuDe: '',
            viTriTD: '',
            luongTD: '',
            soLuong: '',
            thoiGian: '',
            deadLine: '',
            moTaTD: '',

        });
    };
    closeForm = () => {
        this.props.closeForm();
    };
    onEdit = () => {
        this.props.upDateFormRecruitment();
        this.props.onEditRecruitment(this.props.item);
        this.onClear();
    };
    onDelete = () => {
        this.props.onDeleteRecruitment(this.props.item.id);
    };

    render() {
        let {item, index} = this.props;
        return (
            <tr key={index}>

                <td>{item.tieuDe}</td>
                <td>{item.viTriTD}</td>
                <td>{item.luongTD}</td>
                <td>{item.soLuong}</td>
                <td>{item.thoiGian}</td>
                <td>{item.deadLine}</td>
                <td>{item.moTaTD}</td>
                <td>
                    <button onClick={this.onEdit} type="button" className="btn btn-warning">
                        Sửa
                    </button>
                    <button onClick={this.onDelete} type="button" className="btn btn-danger" style={{marginLeft: 10}}>
                        Xóa
                    </button>
                </td>
            </tr>
        );


    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onEditRecruitment: (task) => {
            dispatch(actions.editRecruitment(task));
        },
        onUpDateForm: () => {
            dispatch(actions.updateForm());
        },

        onDeleteRecruitment: (id) => {
            dispatch(actions.deleteRecruitment(id));
        },
        closeForm: () => {
            dispatch(actions.closeForm())
        },
        upDateFormRecruitment: () => {
            dispatch(actions.updateFormRecruitment());
        },


    };

};

export default connect(null, mapDispatchToProps)(Recruitment);



