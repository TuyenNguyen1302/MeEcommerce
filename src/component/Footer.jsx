export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-signup middle">
                <h4 className="middle">
                    <i className="fa-solid fa-paper-plane"></i>
                    <div>
                        <p>Đăng ký nhận thông tin từ ME</p>
                        <p>Thông tin ưu đãi hấp dẫn</p>
                    </div>
                </h4>
                <div className="footer-signup-input middle border">
                    <input type="mail" placeholder="Mời bạn điền mail..." />
                    <button className="signup-btn">Gửi</button>
                </div>
                <div className="footer-signup-icon middle">
                    <a href="#" className="icon face">
                        <i className="fa-brands fa-facebook"></i>
                        <span className="tooltip border">Facebook</span>
                    </a>
                    <a href="#" className="icon ins">
                        <i className="fa-brands fa-instagram"></i>
                        <span className="tooltip border">Instagram</span>
                    </a>
                    <a href="#" className="icon tiktok">
                        <i className="fa-brands fa-tiktok"></i>
                        <span className="tooltip border">Tiktok</span>
                    </a>
                    <a href="#" className="icon ytb">
                        <i className="fa-brands fa-youtube"></i>
                        <span className="tooltip border">Youtube</span>
                    </a>
                </div>
            </div>
            <div className="footer-link middle">
                <div className="footer-link-item">
                    <div className="footer-link-item-logo middle">
                        <img src="/image/logo-footer.png" alt="" />
                    </div>
                    <div className="footer-link-item-address">
                        <span>Địa chỉ: <b>KP 6, P. Linh Trung, Q. Thủ Đức, Tp. HCM</b></span>
                    </div>
                </div>
                <div className="footer-link-item">
                    <h4>Về chúng tôi</h4>
                    <a href="#">Giới thiệu</a>
                    <a href="#">Điều khoản sử dụng</a>
                    <a href="#">Chính sách bảo mật</a>
                </div>
                <div className="footer-link-item">
                    <h4>Hỗ trợ khách hàng</h4>
                    <a href="">Tra cứu đơn hàng</a>
                    <a href="">Câu hỏi thường gặp</a>
                    <a href="">Hướng dẫn đặt hàng</a>
                </div>
                <div className="footer-link-item">
                    <h4>Liên hệ</h4>
                    <a href="">Mua hàng: <b>1900.9990.65 (7:30-22h00)</b></a>
                    <a href="">CSKH: <b>1900.9991.66 (8h00-21h30)</b></a>
                    <a href="">Email: <b>me@gmail.com</b></a>
                </div>
            </div>
        </div>
    );
}