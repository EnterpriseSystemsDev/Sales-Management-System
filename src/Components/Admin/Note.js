import React from "react";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import $ from "jquery";

class Note extends React.Component {

    componentWillMount() {
        $(document).ready(function () {
            var long;
            var lat;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    long = position.coords.longitude;
                    lat = position.coords.latitude;
                    //var timstp = position.timestamp;
                    //var myDate = new Date(timstp).toLocaleString();
                    var api = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric&appid=7cc72055cf03c02e9bf988f2a7b7b7e2';
                    $.getJSON(api, function (data) {
                        $.each(data.weather, function (index, val) {
                            if (data.name === 'Thanh pho Ho Chi Minh') {
                                data.name = 'TP.Hồ Chí Minh';
                            }
                            else if (data.name === 'Ha Noi') {
                                data.name = 'Hà Nội';
                            } else {
                                data.name = data.name;
                            }
                            //console.log(data);
                            //console.log(val.icon);<img src={require("../../hinhanh/" + this.props.image + ".png")} alt="imageProduct"/>
                            //console.log(data.main.temp);<img src ={require('../../hinhanh/weather" + val.icon +".png')}/>" + "<br/>
                            //console.log(val.main); <img src ={require('../../hinhanh/weather/01n.png')}/>
                            // +"<img src ={require('../../hinhanh/weather/" + val.icon +".png')}/>" + "<br/>"
                            //     + val.main                    +"<img src =require('../../hinhanh/weather/" + val.icon +".png')/>" + "<br/>"
                            //                         +  "<img src ={require('../../hinhanh/weather/01n.png')}/>"
                            $("#data").html(
                                data.name + " "
                                + data.main.temp + '&deg;C'
                                + " "
                            );
                        });
                    });
                });
            }
        });
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    };
    onClick = () => {
        this.props.onChangeTheme();
    };

    render() {
        let {ChangeTheme} = this.props;

        return (
            <section id="breadcrumb">
                <div className="container">
                    <ol className={ChangeTheme === true ? 'breadcrumb main-color-bg' : 'breadcrumb main-color-bg1'}>
                        <li>Một Ngày Làm Việc Vui Vẻ</li>
                        <span id="data" style={{marginLeft: '30%'}}> </span>
                        <div className="material-switch pull-right ">
                            <span className="fa fa-gears" style={{marginRight: '10px'}}/>
                            <input
                                id="mytheme"
                                name="theme"
                                type="checkbox"
                                value="theme"
                                onChange={this.onChange}
                                onClick={this.onClick}
                                checked={this.props.ChangeTheme}
                            />
                            <label htmlFor="mytheme" className="label-default"/>
                        </div>
                    </ol>
                </div>
            </section>
        );
    }
}

const listProducts = state => {
    return {
        displayForm: state.displayForm,
        ChangeTheme: state.ChangeTheme,
    }

};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeTheme: () => {
            dispatch(actions.changeTheme());
        },
    };

};
export default connect(listProducts, mapDispatchToProps)(Note);



