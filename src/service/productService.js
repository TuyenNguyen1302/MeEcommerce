import { constant } from '../constant';

function getListProduct() {
    const requestObj = {
        method: 'GET',
    };
    return fetch(constant.API_URL + '/product', requestObj)
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
}