import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import ListCategory from '../../component/ListCategory';
import ProductCard from '../../component/ProductCard';
import { constant } from '../../constant';
import { productAction } from '../../action/productAction';
import NumberPage from './child/NumberPage';
import { useSearchParams } from 'react-router-dom';

export default function ListProductPage() {
    const dispatch = useDispatch();
    const listProduct = useSelector(store => store.productReducer.listProduct);
    const [searchParams] = useSearchParams(1);
    useEffect(() => {
        if (listProduct.status === constant.LOADING) {
            dispatch(productAction.getListProduct(searchParams.toString()));
        }
    })
    function ListProduct() {
        function createProduct(data) {
            console.log(data);
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
        return (!listProduct.data ? <div></div> :
            <div className="products">
                {createProduct(listProduct.data)}
            </div>
        );
    }
    function onToggleClick() {
        document.querySelector('.sort-by-option-item').classList.toggle('show');
    };
    return (
        <div>
            <Header></Header>
            <div className="list-product-section container">
                <div className="section-category border">
                    <h3>Lọc theo danh mục sản phẩm</h3>
                    <ListCategory></ListCategory>
                </div>
                <div className="section-product">
                    <div className="sort-by middle">
                        <div className="sort-by-select middle border"
                            onClick={onToggleClick}>
                            <h3>Sắp xếp</h3>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <div className="sort-by-option">
                            <div className="sort-by-option-item border">
                                <div>
                                    Giá tăng dần
                                </div>
                                <div>
                                    Giá giảm dần
                                </div>
                            </div>
                        </div>
                    </div>
                    {ListProduct()}
                    <NumberPage totalPage={listProduct.total_page}></NumberPage>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}