import ProductCard from '../../../component/ProductCard';

export default function ProductSection(property) {
    let { title, listProduct } = property;
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
            <div className="list-card middle">
                {createProductCard(listProduct)}
            </div>
        </div>
    );
}