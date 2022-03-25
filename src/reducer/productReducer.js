import { constant } from '../constant';

const initialState = {
    listProduct: {
        status: 'LOADING',
    },
};
export function productReducer(state = initialState, action) {
    switch (action.type) {
        case constant.GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                listProduct: {
                    status: constant.SUCCESS,
                    data: action.data,
                },
            };
        }

        case constant.GET_PRODUCT_FAILURE: {
            return {
                ...state,
                listProduct: {
                    status: constant.FAILURE,
                    data: [],
                }
            }
        }
        default:
            return state;
    }
}