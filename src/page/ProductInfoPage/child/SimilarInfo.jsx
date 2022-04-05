import Slider from 'react-slick/lib/slider';
import LeftButton from '../../../component/LeftButton';
import ProductCard from '../../../component/ProductCard';
import RightButton from '../../../component/RightButton';

export default function SimilarInfo(property) {
    let { similarProduct } = property;
    var setting = {
        slidesToShow: 5, // ptu show ra
        slidesToScroll: 1, // scroll 1 lần 1 ảnh
        nextArrow: <RightButton />,
        prevArrow: <LeftButton />,
    }
    function createProductCard(data) {
        return data.map((item) => {
            return (
                <ProductCard
                    key={item._id}
                    name={item.name}
                    images={item.images}
                    before_discount_price={item.before_discount_price}
                    after_discount_price={item.after_discount_price}
                    id={item._id}>
                </ProductCard>
            )
        })
    }
    return (
        <div className="product-section container border">
            <h2 style={{ paddingLeft: "20px", marginBottom: "10px"}}>Sản phẩm tương tự</h2>
            <Slider {...setting}>
                {createProductCard(similarProduct)}
            </Slider>
        </div>
    );
}