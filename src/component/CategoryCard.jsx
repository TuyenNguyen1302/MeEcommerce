import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';

export default function CategoryCard(property) {
    let { id, name, image } = property;
    let [searchParams] = useSearchParams(1);
    let objString = queryString.parse(searchParams.toString());
    let obj = {...objString, categories:id, page:1};
    let href = window.location.origin + "/product?" + queryString.stringify(obj);
    
    return (
        <a href={href} className="middle">
            <div className="category-img">
                <img src={image} alt="" />
            </div>
            <div className="category-name">
                {name}
            </div>
        </a>
    );
}