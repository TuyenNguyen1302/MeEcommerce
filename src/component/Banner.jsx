export default function Banner(property) {
    let {id, image } = property;
    return (
        <div className="banner">
            <div className="banner-img">
                <img src={image} alt="" />
            </div>
        </div>
    );
}