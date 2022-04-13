import Footer from '../../component/Footer';
import Header from '../../component/Header';
import DescInfo from './child/DescInfo';
import DetailInfo from './child/DetailInfo';
import MainInfo from './child/MainInfo';
import SimilarInfo from './child/SimilarInfo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { constant } from '../../constant';
import { productAction } from '../../action/productAction';
import { useParams } from 'react-router-dom';

export default function ProductInfoPage() {
    let param = useParams();
    console.log(param.id);

    const dispatch = useDispatch();
    const infoProduct = useSelector(store => store.productReducer.infoProduct);
    const similarProduct = useSelector(store => store.productReducer.similarProduct);

    useEffect(() => {
        if (infoProduct.status === constant.LOADING) {
            dispatch(productAction.getInfoProduct(param.id));
        }
        if (similarProduct.status === constant.LOADING) {
            dispatch(productAction.getSimilarProduct(param.id));
        }
    })
    return (
        (!infoProduct.data ? <div></div> :
            <div>
                <Header></Header>
                <MainInfo
                    image={infoProduct.data.images}
                    name={infoProduct.data.name}
                    before_discount_price={infoProduct.data.before_discount_price}
                    after_discount_price={infoProduct.data.after_discount_price}
                    sold={infoProduct.data.sold}
                    quantity={infoProduct.data.quantity}>
                </MainInfo>
                <DetailInfo
                    attributes={infoProduct.data.attributes}>
                </DetailInfo>
                <DescInfo
                    description={infoProduct.data.description}></DescInfo>
                {!similarProduct.data ? <div></div> :
                    <div>
                        <SimilarInfo
                            similarProduct={similarProduct.data}></SimilarInfo>
                    </div>}
                <Footer></Footer>
            </div>
        )
    );
}