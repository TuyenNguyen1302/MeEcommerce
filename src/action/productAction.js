import { constant } from '../constant';
import { productService } from '../service/productService';

function getListProduct(page) {
    return (dispatch) => {
        productService.getListProduct(page).then((response) => {
            if (response.status === constant.SUCCESS) {
                dispatch(getProductSuccess(response.data, response.total_page));
            } else {
                dispatch(getProductFailure(response.msg));
            }
        });
    };

    function getProductSuccess(data, total_page) {
        return { type: constant.GET_PRODUCT_SUCCESS, data, total_page };
    }
    function getProductFailure(msg) {
        return { type: constant.GET_PRODUCT_FAILURE, msg };
    }
}

function getInfoProduct(id) {
    return (dispatch) => {
        productService.getInfoProduct(id).then((response) => {
            if (response.status === constant.SUCCESS) {
                dispatch(getInfoProductSuccess(response.data));
            } else {
                dispatch(getInfoProductFailure(response.msg));
            }
        });
    };

    function getInfoProductSuccess(data) {
        return { type: constant.GET_INFO_PRODUCT_SUCCESS, data };
    }
    function getInfoProductFailure(msg) {
        return { type: constant.GET_INFO_PRODUCT_FAILURE, msg };
    }
}

function getSimilarProduct(id) {
    return (dispatch) => {
        productService.getSimilarProduct(id).then((response) => {
            if (response.status === constant.SUCCESS) {
                dispatch(getSimilarProductSuccess(response.data));
            } else {
                dispatch(getSimilarProductFailure(response.msg));
            }
        });
    };

    function getSimilarProductSuccess(data) {
        return { type: constant.GET_SIMILAR_PRODUCT_SUCCESS, data };
    }
    function getSimilarProductFailure(msg) {
        return { type: constant.GET_SIMILAR_PRODUCT_FAILURE, msg };
    }
}
export const productAction = {
    getListProduct,
    getInfoProduct,
    getSimilarProduct,
}