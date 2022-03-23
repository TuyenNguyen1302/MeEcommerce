export default function ProductCard(property) {
    let {id, name, images, before_discount_price, after_discount_price} = property;
    return (
        <div className="card-detail border">
            <a href="" className="card-detail-img">
                <img src={images} alt="" />
            </a>
            <div className="card-detail-sale">
                <span>-30%</span>
            </div>
            <div className="card-detail-info">
                {/* <div className="card-detail-info-category">
                    <a href=""><small>{categories}</small></a>
                </div> */}
                <h5 className="card-detail-info-name">{name}</h5>
                <div className="card-detail-info-price middle">
                    <del className="old">{before_discount_price} ₫</del>
                    <span className="new"><big>{after_discount_price} ₫</big></span>
                </div>
            </div>
            <div className="card-detail-link middle">
                <a href="" className="middle border"><i className="fa-solid fa-heart"></i></a>
                <a href="" className="middle border"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>

    );
}