import { useDispatch, useSelector } from 'react-redux';
import CategoryCard from './CategoryCard';
import { categoryAction } from '../action/categoryAction';
import React, { useEffect } from 'react';
import { constant } from '../constant/index';

export default function ListCategory() {
    const dispatch = useDispatch();
    const listCategory = useSelector(store => store.categoryReducer.listCategory);
    useEffect(() => {
        if (listCategory.status === constant.LOADING) {
            dispatch(categoryAction.getListCategory());
        }
    })
    function createCategoryCard(data) {
        return data.map((item) => (
            <CategoryCard key={item._id} image={item.image} name={item.name} id={item._id}></CategoryCard>
        ))
    }
    return (!listCategory.data ? <div></div> :
        <div className="list-category">
            {createCategoryCard(listCategory.data)}
        </div>
    );
}