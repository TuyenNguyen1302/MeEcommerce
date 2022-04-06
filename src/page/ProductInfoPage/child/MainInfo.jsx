export default function MainInfo(property) {
    let { image, name, before_discount_price, after_discount_price, sold } = property;
    function formatNumber(num) {
        return num.toLocaleString("vi");
    };
    function salePercent(before, after) {
        return (Math.floor((after - before) / before * 100));
    };
    return (
        <div className="main-info container border">
            <div className="main-info-image">
                <img src={image} alt="" />
            </div>
            <div className="main-info-product">
                <h1>{name}</h1>
                <div className="main-info-product-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span> (0 đánh giá)</span>
                    <span> | Đã bán {sold}</span>
                </div>
                <div className="line"></div>
                <div className="main-info-product-price">
                    <big>{formatNumber(after_discount_price)} ₫</big><br />
                    {before_discount_price !== after_discount_price ?
                        <del>{formatNumber(before_discount_price)} ₫</del>
                        : <div></div>}
                    {before_discount_price !== after_discount_price ?
                        <span className="sale">{salePercent(before_discount_price, after_discount_price)} %</span>
                        : <div />}
                </div>
                <div className="main-info-product-quality">
                    <h3>Số lượng</h3>
                    <div className="middle border">
                        <button>-</button>
                        <input type="number" value="1" />
                        <button>+</button>
                    </div>
                </div>
                <div className="main-info-product-action middle">
                    <button className="border">Thêm vào yêu thích</button>
                    <button className="border">Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>
    );
}