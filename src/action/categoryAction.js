import { constant } from '../constant';
import { categoryService } from '../service/categoryService';

function getListCategory() {
    return (dispatch) => {
        categoryService.getListCategory().then((res) => {
            if (res.status === constant.SUCCESS) {
                dispatch(getCategorySuccess(res.data)); // bien dispatch -> nhan loi goi tu action -> lay data tu action -> tra ve store ~ reducer
            } else {
                dispatch(getCategoryFailure(res.msg));
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