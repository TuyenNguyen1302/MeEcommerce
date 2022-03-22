export default function CategoryCard(property) {
    let { id, name, image } = property;
    return (
        <a href="" className="middle">
            <div className="category-img">
                <img src={image} alt="" />
            </div>
            <div className="category-name">
                {name}
            </div>
        </a>
    );
}