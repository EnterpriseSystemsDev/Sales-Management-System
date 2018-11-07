import React from 'react';
import '../../Style.css';
import $ from "jquery";

class ScrollToTop extends React.Component {
    componentDidMount() {
        $(document).ready(function () {

            $("#back-top").hide();

            $(function () {
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 200) {
                        $('#back-top').fadeIn();
                    } else {
                        $('#back-top').fadeOut();
                    }
                });

                $('#back-top a').click(function () {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 900);
                    return false;
                });
            });

        });
    }

    render() {
        return (
            <div>
                <p id="back-top"><a href="#" title="Back to top" className="scrollup"><span></span></a></p>
            </div>
        );

    }
}

export default ScrollToTop;
