import React from "react";

import myslide from "../../hinhanh/cover1s.jpg";
import myslide1 from "../../hinhanh/cover2s.jpg";
import myslide2 from "../../hinhanh/cover3s.jpg";

class MySlides extends React.Component {

    render() {

        return (

            <div>
                <div className="container">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to={0} className="active"/>
                            <li data-target="#myCarousel" data-slide-to={1}/>
                            <li data-target="#myCarousel" data-slide-to={2}/>
                        </ol>

                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={myslide} alt="Los Angeles" style={{width: '100%'}}/>
                                <div className="carousel-caption">
                                    <h3>Los Angeles</h3>
                                    <p>LA is always so much fun!</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src={myslide1} alt="Chicago" style={{width: '100%'}}/>
                            </div>
                            <div className="item">
                                <img src={myslide2} alt="New york" style={{width: '100%'}}/>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default MySlides;



