import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../component/Header';
import Banner from '../../component/Banner';
import ProductSection from './child/ProductSection';
import Footer from '../../component/Footer';
import { constant } from '../../constant';
import { homeAction } from '../../action/homeAction';
import CategoryCard from '../../component/CategoryCard';

export default function HomePage() {
    const dispatch = useDispatch();
    const homeInfo = useSelector(store => store.homeReducer.homeInfo);
    useEffect(() => {
        if (homeInfo.status === constant.LOADING) {
            dispatch(homeAction.getHomeInfo());
        }
    })
    function Categories() {
        function createCategoryCard(data) {
            return data.map((item) => (
                <CategoryCard key={item._id} image={item.image} name={item.name} id={item._id}></CategoryCard>
            ))
        }
        return (!homeInfo.data ? <div></div> :
            <div className="categories border">
                <div className="list-category">
                    {createCategoryCard(homeInfo.data.categories)}
                </div>
            </div>
        );
    }
    function Banners() {
        function createBanner(banners) {
            console.log(banners);
            return banners.map((item) => (
                <Banner key={item._id} image={item.image} id={item._id}></Banner>
            ));
        }
        return (!homeInfo.data ? <div></div> :
            <div className="banner-slider border middle">
                {createBanner(homeInfo.data.banners)}
            </div>
        );
    }
    return (
        <div>
            <Header></Header>
            <div className="home-page">
                <div className="category-banner-section container">
                    {Categories()}
                    {Banners()}
                </div>

                {(!homeInfo.data ? <div></div> :
                    <div className="hot-products">
                        <ProductSection title="Sản phẩm nổi bật"
                            listProduct={homeInfo.data.hot_products}></ProductSection>
                    </div>
                )}
                {(!homeInfo.data ? <div></div> :
                    <div>
                        <ProductSection title="Sản phẩm mới ra mắt"
                            listProduct={homeInfo.data.new_products}></ProductSection>
                    </div>
                )}



            </div>
            <Footer></Footer>
        </div>
    );
}