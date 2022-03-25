import { constant } from '../constant';
import { productService } from '../service/productService';

function getListProduct() {
    return (dispatch) => {
        productService.getListProduct().then((response) => {
            if (response.status === constant.SUCCESS) {
                dispatch(getProductSuccess(response.data));
            } else {
                dispatch(getProductFailure(response.msg));
            }
        });
    };

    function getProductSuccess(data) {
        return { type: constant.GET_PRODUCT_SUCCESS, data };
    }
    function getProductFailure(msg) {
        return { type: constant.GET_PRODUCT_FAILURE, msg };
    }
}
export const productAction = {
    getListProduct,
}