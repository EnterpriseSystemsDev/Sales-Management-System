import React from "react";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
class Note extends React.Component {

    onChange = (event) =>{
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    };
    onClick = () =>{
        this.props.onChangeTheme();
    };
    render() {
        let {ChangeTheme} = this.props;
        return (
            <section id="breadcrumb" >
                <div className="container">
                    <ol className={ChangeTheme===true ? 'breadcrumb main-color-bg':'breadcrumb main-color-bg1' }>
                        <li> //Ghi Chú Các Cập Nhật</li>
                        <div className="material-switch pull-right ">
                            <span className="fa fa-gears" style={{marginRight:'10px'}}/>
                            <input
                                id="mytheme"
                                name="theme"
                                type="checkbox"
                                value="theme"
                                onChange={this.onChange}
                                onClick={this.onClick}
                            />
                            <label htmlFor="mytheme" className="label-default" />
                        </div>
                    </ol>
                </div>
            </section>
        );
    }
}

const listProducts = state =>{
    return {
        displayForm: state.displayForm,
        ChangeTheme : state.ChangeTheme,
    }

};
const mapDispatchToProps = (dispatch, props) => {
    return{
        onChangeTheme : () => {
            dispatch(actions.changeTheme());
        },
    };

};
export default connect(listProducts,mapDispatchToProps)(Note) ;



