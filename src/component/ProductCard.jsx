export default function ProductCard(property) {
    let { id, name, images, before_discount_price, after_discount_price } = property;
    function formatNumber(num) {
        return num.toLocaleString("vi");
    };
    function salePercent(before, after) {
        return (Math.round((after - before) / before * 100));
    };
    return (
        <div className="card-detail border">
            <a href="" className="card-detail-img">
                <img src={images} alt="" />
            </a>
            <div className="card-detail-sale">
                <span>{salePercent(before_discount_price, after_discount_price)} %</span>
            </div>
            <div className="card-detail-info">
                <h4 className="card-detail-info-name">{name}</h4>
                <div className="card-detail-info-price middle">
                    <del className="old">{formatNumber(before_discount_price)} ₫</del>
                    <span className="new"><big>{formatNumber(after_discount_price)} ₫</big></span>
                </div>
            </div>
            <div className="card-detail-link middle">
                <a href="" className="middle border"><i className="fa-solid fa-heart"></i></a>
                <a href="" className="middle border"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>

    );
}