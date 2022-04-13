import { constant } from '../constant';

function getListProduct(queryString) {
    const requestObj = {
        method: 'GET',
    };
    return fetch(constant.API_URL + '/product?' + queryString, requestObj)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.error(err);
            return {};
        });
}

function getInfoProduct(id) {
    const requestObj = {
        method: 'GET',
    };
    return fetch(constant.API_URL + '/product/' + id, requestObj)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.error(err);
            return {};
        });
}

function getSimilarProduct(id) {
    const requestObj = {
        method: 'GET',
    };
    return fetch(constant.API_URL + '/product/similar/' + id, requestObj)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.error(err);
            return {};
        });
}
export const productService = {
    getListProduct,
    getInfoProduct,
    getSimilarProduct,
}