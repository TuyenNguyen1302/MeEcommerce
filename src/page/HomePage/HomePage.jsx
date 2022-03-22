import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../component/Header';
import Banner from '../../component/Banner';
import ListCategory from '../../component/ListCategory';
import ProductSection from './child/ProductSection';
import Footer from '../../component/Footer';
import { constant } from '../../constant';
import { categoryAction } from '../../action/categoryAction';

export default function HomePage() {
    const dispatch = useDispatch();
    const listCategory = useSelector(store => store.categoryReducer.listCategory);
    // console.log(listCategory);
    useEffect(() => {
        if(listCategory.status === constant.LOADING){
            dispatch(categoryAction.getListCategory());
        }
    })
    return (
        <div>
            <Header></Header>
            <div className="home-page">
                <div className="category-banner-section container">
                    <div className="category-list border">
                        <ListCategory></ListCategory>
                    </div>
                    <div className="banner-slider">
                        <Banner></Banner>
                    </div>
                </div>
                <ProductSection title="Sản phẩm nổi bật" ></ProductSection>
                <ProductSection title="Sản phẩm mới ra mắt"></ProductSection>
            </div>
            <Footer></Footer>
        </div>
    );
}