import { constant } from '../constant';

const initialState = {
    listCategory: {
        status: 'LOADING',
    },
};
export function categoryReducer (state = initialState, action) {
    switch (action.type){
        case constant.GET_CATEGORY_SUCCESS: {
            return {
                ...state,
                listCategory: {
                    status: constant.SUCCESS,
                    data: action.data,
                },
            };
        }

        case constant.GET_CATEGORY_FAILURE: {
            return {
                ...state,
                listCategory: {
                    status: constant.FAILURE,
                    data: [],
                },
            };
        }
        default:
            return state;
    }
}