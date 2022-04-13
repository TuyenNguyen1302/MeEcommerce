import { useState } from 'react';

export default function MainInfo(property) {
    let { image, name, before_discount_price, after_discount_price, sold, quantity } = property;
    function formatNumber(num) {
        return num.toLocaleString("vi");
    };
    function salePercent(before, after) {
        return (Math.floor((after - before) / before * 100));
    };

    const [number, setNumber] = useState(1);
    function setIncrease() {
        if ((number + 1) <= quantity) {
            return (setNumber(number + 1));
        }
    }
    function setDecrease() {
        if ((number - 1) > 0) {
            return (setNumber(number - 1));
        }
    }
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
                <div className="main-info-product-price middle">
                    <big>{formatNumber(after_discount_price)} ₫</big><br />
                    <div className="middle">
                        {before_discount_price !== after_discount_price ?
                            <span className="sale">{salePercent(before_discount_price, after_discount_price)} %</span>
                            : <div />}
                        {before_discount_price !== after_discount_price ?
                            <del>{formatNumber(before_discount_price)} ₫</del>
                            : <div></div>}
                    </div>
                </div>
                <div className="main-info-product-quality">
                    <h3>Số lượng</h3>
                    <div className="middle border">
                        {(number > 1) ? <button onClick={setDecrease}>-</button> :
                            <button onClick={setDecrease} disabled>-</button>}
                        <input type="number" value={number} />
                        {(number < quantity) ? <button onClick={setIncrease}>+</button> :
                            <button onClick={setIncrease} disabled>+</button>}
                    </div>
                </div>
                <div className="main-info-product-action middle">
                    <button className="border">Thêm vào giỏ hàng</button>
                    <button className="add-heart"><i className="far fa-heart"></i> <span>Thêm vào yêu thích</span></button>
                </div>
            </div>
        </div>
    );
}