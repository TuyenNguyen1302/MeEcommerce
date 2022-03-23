import { constant } from '../constant';

function getHomeInfo() {
    const requestObj = {
        method: 'GET',
    };
    return fetch(constant.API_URL + '/home', requestObj)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.error(err);
            return {};
        });
}
export const homeService = {
    getHomeInfo,
}