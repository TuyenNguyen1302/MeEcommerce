import { useSelector } from 'react-redux';
import CategoryCard from './CategoryCard';

export default function ListCategory() {
    const listCategory = useSelector(store => store.categoryReducer.listCategory);
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