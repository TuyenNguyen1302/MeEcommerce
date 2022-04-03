import Slider from 'react-slick/lib/slider';
import LeftButton from '../../../component/LeftButton';
import ProductCard from '../../../component/ProductCard';
import RightButton from '../../../component/RightButton';

export default function ProductSection(property) {
    let { title, listProduct } = property;
    var setting = {
        slidesToShow: 5, // ptu show ra
        slidesToScroll: 1, // scroll 1 lần 1 ảnh
        nextArrow: <RightButton/>,
        prevArrow: <LeftButton/>,
    }
    function createProductCard(data) {
        return data.map((item) => (
            <ProductCard
                key={item._id}
                name={item.name}
                images={item.images}
                before_discount_price={item.before_discount_price}
                after_discount_price={item.after_discount_price}
                id={item._id}>
            </ProductCard>
        ))
    }
    return (
        <div className="product-section container border">
            <h1>{title}</h1>
            <Slider {...setting}>
                {createProductCard(listProduct)}
            </Slider>
        </div>
    );
}