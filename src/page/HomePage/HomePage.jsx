import Header from "../../component/Header";
import Category from "../../component/Category";
import Banner from "../../component/Banner";
import Feature from "./child/Feature";
import ProductSection from "./child/ProductSection";
import Footer from "../../component/Footer";

export default function HomePage() {
    return (
        <div>
            <Header></Header>
            <div className="home-page">
                <div className="category-banner-section container">
                    <div className="category-list">
                        <Category></Category>
                        <Category></Category>
                        <Category></Category>
                        <Category></Category>
                        <Category></Category>
                        <Category></Category>
                        <Category></Category>
                        <Category></Category>
                        <Category></Category>
                        <Category></Category>
                        <Category></Category>
                        <Category></Category>
                        <Category></Category>
                    </div>
                    <div className="banner-slider">
                        <Banner></Banner>
                    </div>
                </div>
                <Feature></Feature>
                <ProductSection title="Sản phẩm nổi bật" ></ProductSection>
                <ProductSection title="Sản phẩm mới ra mắt"></ProductSection>
            </div>
            <Footer></Footer>
        </div>
    );
}