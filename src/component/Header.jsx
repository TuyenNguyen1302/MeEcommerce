export default function Header() {
    return (
        <div className="header middle">
            <div className="header-above middle">
                <div className="header-above-logo middle">
                    <img src="/image/logo.png" alt="" />
                </div>
                <div className="header-above-search middle border">
                    <input type="text" placeholder="Bạn muốn mua gì?" />
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className="header-above-link middle">
                    <a href="#" className="header-above-link-item middle">
                        <i className="fa-solid fa-heart"></i>
                        <div>
                            <div className="number">0</div>
                            <div className="title">Yêu thích</div>
                        </div>
                    </a>
                    <a href="#" className="header-above-link-item middle">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div>
                            <div className="number">0</div>
                            <div className="title">Giỏ hàng</div>
                        </div>
                    </a>
                    <div className="header-above-link-item middle">
                        <i className="fa-solid fa-user"></i>
                        <div className="account-link middle">
                            <a href="#">Đăng ký</a>
                            <a href="#">Đăng nhập</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-nav middle">
                <a href="" className="header-nav-type middle">
                    Danh mục sản phẩm
                    <i className="fa-solid fa-bars"></i>
                </a>
                <div className="header-nav-dropdown">
                    <a href="#">Trang chủ</a>
                    <a href="#">Sản phẩm</a>
                    <a href="#">Tin tức</a>
                    <a href="#">Khuyến mãi</a>
                </div>
            </div>
        </div>
    );
}