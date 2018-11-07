import React from "react";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class AddRecruitment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            tieuDe: '',
            viTriTD: '',
            luongTD: '',
            soLuong: '',
            thoiGian: '',
            deadLine: '',
            moTaTD: '',
        }
    }

    onChange = (event) => {
        //ep true false tại đây
        this.setState({
            [event.target.name]: event.target.value
        });
    };

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
    onSubmit = (event) => {
        event.preventDefault();
        this.props.ADDRecruitment(this.state);
        //xoa data
        this.onClear();
        this.props.closeFormRecruitment();
    };

    componentWillMount() {
        if (this.props.EditRecruitment && this.props.EditRecruitment.id !== null) {
            this.setState({
                id: this.props.EditRecruitment.id,
                tieuDe: this.props.EditRecruitment.tieuDe,
                viTriTD: this.props.EditRecruitment.viTriTD,
                luongTD: this.props.EditRecruitment.luongTD,
                soLuong: this.props.EditRecruitment.soLuong,
                thoiGian: this.props.EditRecruitment.thoiGian,
                deadLine: this.props.EditRecruitment.deadLine,
                moTaTD: this.props.EditRecruitment.moTaTD,

            });
        }
        else {
            this.onClear();
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.EditRecruitment) {
            this.setState({
                id: nextProps.EditRecruitment.id,
                tieuDe: nextProps.EditRecruitment.tieuDe,
                viTriTD: nextProps.EditRecruitment.viTriTD,
                luongTD: nextProps.EditRecruitment.luongTD,
                soLuong: nextProps.EditRecruitment.soLuong,
                thoiGian: nextProps.EditRecruitment.thoiGian,
                deadLine: nextProps.EditRecruitment.deadLine,
                moTaTD: nextProps.EditRecruitment.moTaTD,
            });
        }
        else {
            this.onClear();
        }
    }

    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h2 className="panel-title">Tuyển Nhân Viên</h2>
                </div>

                <form className="panel-body" onSubmit={this.onSubmit}>
                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Tiêu Đề:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tieuDe"
                            required
                            value={this.state.tieuDe}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Vị Trí Tuyển Dụng:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="viTriTD"
                            required
                            value={this.state.viTriTD}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Lương:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="luongTD"
                            required
                            value={this.state.luongTD}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Số Lượng:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="soLuong"
                            required
                            value={this.state.soLuong}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="sel1">Hình Thức:</label>
                        <select
                            className="form-control"
                            name="thoiGian"
                            required
                            value={this.state.thoiGian}
                            onChange={this.onChange}
                        >
                            <option value="null">Chọn Hình Thức</option>
                            <option value="FullTime">Full Time</option>
                            <option value="FartTime">Fart Time</option>
                            <option value="Freelance">Freelance</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="usr">Deadline:</label>
                        <input
                            type="date"
                            className="form-control"
                            name="deadLine"
                            required
                            value={this.state.deadLine}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Mô Tả:</label>
                        <textarea
                            className="form-control"
                            name="moTaTD"
                            required
                            value={this.state.moTaTD}
                            onChange={this.onChange}
                        />
                    </div>


                    <div className="form-group col-md-6">
                        <br/>
                        <button type="submit" className="btn btn-info">Thêm</button>
                    </div>
                </form>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        Recruitment: state.Recruitment,
        EditRecruitment: state.EditRecruitment,

    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        ADDRecruitment: (task) => {
            dispatch(actions.addRecruitment(task))
        },
        closeForm: () => {
            dispatch(actions.closeForm())
        },
        closeFormRecruitment: () => {
            dispatch(actions.closeFormRecruitment())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecruitment);



