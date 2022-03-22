import ProductCard from '../../../component/ProductCard';

export default function ProductSection(property) {
    let {title} = property;
    return (
        <div className="product-section container border">
            <h1>{title}</h1>
            <div className="list-card middle">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
}