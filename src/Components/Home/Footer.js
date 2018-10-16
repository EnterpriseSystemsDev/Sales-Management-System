import React from 'react';
import logo from "../../hinhanh/logo.png"
class Footer extends  React.Component{

    render(){
        return (
            <footer className="footer-distributed ">
                <div className="container-fluid col-sm-12">
                    <div className="text-center">
                        <img src={logo} alt="logo" style={{width: 100, height: 100}} />
                        <h3 style={{color: 'aliceblue', fontFamily: 'sans-serif'}}>"UY TÍN QÚY HƠN BẠCH KIM"</h3>
                    </div>
                </div>
                <div className="row" style={{fontFamily: 'sans-serif', color: '#D0D0D0'}}>
                    <div className="col-md-6 col-sm-12">
                        <div>
                            <p style={{marginBottom: 0}}>
                                <span style={{fontSize: 18}}>Chất lượng</span>
                            </p>
                            <p style={{fontSize: 14}}>ShoesShop cam kết chất lượng cho tất cả sản phẩm bán tại cửa hàng ShoesShop đều là hàng chính hãng, hoàn trả 100% tiền nếu phát hiện sản phẩm là Fake.</p>
                            <br />
                            <p style={{marginBottom: 0}}>
                                <span style={{fontSize: 18}}>Phục vụ</span><br />
                            </p>
                            <p style={{fontSize: 14}}>ShoesShop cam kết chất lượng phục vụ tốt nhất, chuyên nghiệp nhất cho mọi khách hàng bằng chính sách hoàn tiền và tặng quà nếu nhân viên phục vụ quí khách không chu đáo.</p>
                            <br />
                            <p style={{marginBottom: 0}}>
                                <span style={{fontSize: 18}}>Hỗ trợ</span>
                            </p>
                            <p style={{fontSize: 14}}>
                                Nếu bạn gặp rắc rối về sản phẩm hay chất lượng dịch vụ của ShoesShop, hãy gọi ngay đến số 0909080704 hoặc inbox ở fanpage <a href="//facebook.com/ShoesShop">facebook.com/www.ShoesShop.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-6">
                                <p>&nbsp;</p>
                                <div className="left-aligned">
                                    <p style={{marginBottom: 0}}>Đặt hàng và thu tiền tận nơi toàn quốc</p>
                                    <h5 className="boxed-content-title">
                                        <i className="fa fa-phone" /> 0909080704
                                    </h5>
                                </div>
                                <br />
                                <h4>Thông tin</h4>
                                <ul>
                                    <li><a href="/page/gioi-thieu-ve-yame">Giới thiệu về ShoesShop.com</a></li>
                                    <li><a href="/page/tuyen-dung">Tuyển dụng</a></li>
                                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeH7mfQMmLLV_dlGKrf-X5Y8CRlxr4shJ_un7JWsG_qaLmcSg/viewform">Gửi góp ý/Than phiền</a></li>
                                    <li><a href="/page/quy-che-hoat-dong">Quy chế hoạt động</a></li>
                                    <li><a href="/page/dieu-khoan-mua-ban-hang-hoa">Điều khoản mua bán</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <p>&nbsp;</p>
                                <div className="left-aligned">
                                    <h5>CSKH</h5>
                                    <p style={{marginBottom: 0}}>
                                        <a style={{color: '#337ab7'}} href="https://docs.google.com/forms/d/e/1FAIpQLSeH7mfQMmLLV_dlGKrf-X5Y8CRlxr4shJ_un7JWsG_qaLmcSg/viewform" >Than phiền/Chăm sóc khách hàng</a>
                                    </p>
                                </div>
                                <br />
                                <h4>FAQ</h4>
                                <ul>
                                    <li><a href="/page/van-chuyen">Vận chuyển</a></li>
                                    <li><a href="/page/chinh-sach-doi-tra">Chính sách đổi trả</a></li>
                                    <li><a href="/page/chinh-sach-bao-hanh">Chính sách bảo hành</a></li>
                                    <li><a href="/page/khach-hang-vip">Khách hàng VIP</a></li>
                                    <li><a href="/page/doi-tac-cung-cap">Đối tác cung cấp</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container-fluid">
                    <h3 style={{color: '#fff', textAlign: 'center', marginBottom: '3%', fontFamily: 'sans-serif'}}>Liên Hệ</h3>
                    <div className="footer-left">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d313.1316745826296!2d106.70428083307314!3d10.771936743027254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4137df72b7%3A0x1351d358bc2fe73!2zQklURVhDTywgTmfDtCDEkOG7qWMgS-G6vywgQuG6v24gTmdow6ksIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1535455132345" width="auto" height="250px" frameBorder={0} style={{border: 0}} allowFullScreen title="location" />
                    </div>
                    <div className="footer-center">
                        <div>
                            <i className="fa fa-map-marker" />
                            <p><span>42 Hải Triều </span> Quận 1, Hồ Chí Minh</p>
                        </div>
                        <div>
                            <i className="fa fa-phone" />
                            <p>0909080704</p>
                        </div>
                        <div>
                            <i className="fa fa-envelope" />
                            <p><a href="mailto:support@company.com">footcare@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <p className="footer-company-about">
                            <span>About the company</span>
                            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                        </p>
                        <div className="footer-icons">
                            <a href="#a"><i className="fa fa-facebook" /></a>
                            <a href="#b"><i className="fa fa-twitter" /></a>
                            <a href="#c"><i className="fa fa-linkedin" /></a>
                            <a href="#d"><i className="fa fa-github" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        );

    }
}

export default Footer;
