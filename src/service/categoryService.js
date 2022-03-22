import { constant } from '../constant';

function getListCategory() {
    const requestObj = {
        method: 'GET',
    };
    return fetch(constant.API_URL + '/category', requestObj)
        .then((res) => res.json()) //response read url chua mang json nhieu obj
        .then((data) => {   //get muc "data" trong mang obj json
            return data;
        })
        .catch((err) => {
            console.error(err);
            return {};
        });
}
export const categoryService = {
    getListCategory,
}