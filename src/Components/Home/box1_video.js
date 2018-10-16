import React from "react";


class Box1 extends React.Component {


    render() {
        return (
            <div id="box1">
                <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsInline
                       autoPlay muted loop>
                    <source
                        src="https://player.vimeo.com/external/284704078.hd.mp4?s=380d4f3fc6e0229b913d99275a0d75d6505c2887&profile_id=175"
                        type="video/mp4"/>
                </video>
            </div>
        );
    }
}
export default Box1;
