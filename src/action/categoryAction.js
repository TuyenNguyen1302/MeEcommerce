import { constant } from '../constant';
import { categoryService } from '../service/categoryService';

function getListCategory() {
    return (dispatch) => {
        categoryService.getListCategory().then((response) => {
            if (response.status === constant.SUCCESS) {
                dispatch(getCategorySuccess(response.data)); // bien dispatch -> nhan loi goi tu action -> lay data tu action -> tra ve store ~ reducer
            } else {
                dispatch(getCategoryFailure(response.msg));
            }
        });
    };

    function getCategorySuccess(data) {
        return { type: constant.GET_CATEGORY_SUCCESS, data };
    }
    function getCategoryFailure(msg) {
        return { type: constant.GET_CATEGORY_FAILURE, msg };
    }
}
export const categoryAction = {
    getListCategory,
};