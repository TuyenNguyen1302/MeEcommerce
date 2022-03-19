export default function ProductCard() {
    return (
        <div className="card-detail border">
            <a href="" className="card-detail-img">
                <img src="/image/1.jpeg" alt="" />
            </a>
            <div className="card-detail-sale">
                <span>-30%</span>
            </div>
            <div className="card-detail-info">
                <div className="card-detail-info-category">
                    <a href=""><small>Loai san pham</small></a>
                </div>
                <h3 className="card-detail-info-name">Ten san pham</h3>
                <div className="card-detail-info-price middle">
                    <del className="old">3.000.000 ₫</del>
                    <span className="new"><big>2.199.000 ₫</big></span>
                </div>
            </div>
        </div>

    );
}