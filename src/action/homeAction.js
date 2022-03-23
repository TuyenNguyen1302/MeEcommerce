import { constant } from '../constant';
import { homeService } from '../service/homeService';

function getHomeInfo() {
    return (dispatch) => {
        homeService.getHomeInfo().then((response) => {
            if (response.status === constant.SUCCESS) {
                dispatch(getHomeSucccess(response.data));
            } else {
                dispatch(getHomeFailure(response.msg));
            }
        });
    };

    function getHomeSucccess(data) {
        return { type: constant.GET_HOME_SUCCESS, data };
    }
    function getHomeFailure(msg) {
        return { type: constant.GET_HOME_FAILURE, msg };
    }
}
export const homeAction = {
    getHomeInfo,
}