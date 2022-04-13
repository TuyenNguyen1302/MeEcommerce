import { useSearchParams } from "react-router-dom";
import queryString from "query-string";

export default function NumberPage(property) {
    let { totalPage } = property;
    let currentPage = 1;
    let objString;
    const [searchParams] = useSearchParams(1);
    if (searchParams.get('page') != null) {
        currentPage = parseInt(searchParams.get('page'));
        objString = queryString.parse(searchParams.toString());
    }

    function handlePage(page) {
        let obj = {...objString, page:page};
        window.location.href = window.location.origin + window.location.pathname + '?' + queryString.stringify(obj);
    }

    function createNumberDinamic(currentPage, totalPage) {
        let arr = [];
        if (totalPage <= 3) {
            // tạo ngẫu nhiên mảng có số lượng phần tử bằng totalPage có giá trị là 0
            arr = Array.from(new Array(totalPage), () => 0);
            return arr.map((v, i) => {
                return currentPage === i + 1 ? <button className="active">{i + 1}</button> :
                    <button className="border" onClick={() => handlePage(i + 1)}>{i + 1}</button>;
            })
        } else {
            if (currentPage < totalPage - 2) {
                for (let i = currentPage; i <= currentPage + 2; i++) {
                    arr.push(i);
                }
            } else {
                for (let i = totalPage - 2; i <= totalPage; i++) {
                    arr.push(i);
                }
            }
            return arr.map((v, i) => {
                return v === currentPage ? <button>{v}</button> : <button className="border" onClick={() => handlePage(v)}>{v}</button>;
            })
        }
    }

    return (
        (totalPage < 2) ? <div></div> :
            <div className="section-product-page middle">
                {currentPage - 1 < 1 ? <button disabled><i className="fa-solid fa-angle-left"></i></button> :
                    <button style={{background:'#e8cbc0'}} className="border" onClick={() => handlePage(currentPage - 1)}><i className="fa-solid fa-angle-left"></i></button>}

                {createNumberDinamic(currentPage, totalPage)}

                {currentPage + 1 > totalPage ? <button disabled><i className="fa-solid fa-angle-right"></i></button> :
                    <button style={{background:'#e8cbc0'}} className="border" onClick={() => handlePage(currentPage + 1)}><i className="fa-solid fa-angle-right"></i></button>}
            </div>
    );
}