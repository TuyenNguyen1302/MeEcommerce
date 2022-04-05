export default function ProductCard(property) {
    let { id, name, images, before_discount_price, after_discount_price } = property;
    function formatNumber(num) {
        return num.toLocaleString("vi");
    };
    function salePercent(before, after) {
        return (Math.floor((after - before) / before * 100));
    };
    function moveInfoProduct(id){
        // doi duong dan = lay ten mien
        window.location.href = window.location.origin + '/product/' + id;
    }
    return (
        // arrow funct => tranh chay vo han vs func co bien
        <div className="card-detail border" onClick={() => moveInfoProduct(id)}> 
            <div className="card-detail-img">
                <img src={images} alt="" />
            </div>
            {before_discount_price !== after_discount_price ?
                <div className="card-detail-sale">
                    <span>{salePercent(before_discount_price, after_discount_price)} %</span>
                </div>
                : <div />}
            <div className="card-detail-info">
                <h4 className="card-detail-info-name">{name}</h4>
                <div className="card-detail-info-price middle">
                    {before_discount_price !== after_discount_price ?
                        <del className="old">{formatNumber(before_discount_price)} ₫</del>
                        : <div></div>}
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