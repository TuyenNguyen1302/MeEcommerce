import { constant } from '../constant';

const initialState = {
    listProduct: {
        status: 'LOADING',
    },
    infoProduct:{
        status: 'LOADING',
    },
    similarProduct:{
        status: 'LOADING',
    }
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
        
        case constant.GET_INFO_PRODUCT_SUCCESS: {
            return {
                ...state,
                infoProduct: {
                    status: constant.SUCCESS,
                    data: action.data,
                },
            };
        }

        case constant.GET_INFO_PRODUCT_FAILURE: {
            return {
                ...state,
                infoProduct: {
                    status: constant.FAILURE,
                    data: [],
                }
            }
        }
        
        case constant.GET_SIMILAR_PRODUCT_SUCCESS: {
            return {
                ...state,
                similarProduct: {
                    status: constant.SUCCESS,
                    data: action.data,
                },
            };
        }

        case constant.GET_SIMILAR_PRODUCT_FAILURE: {
            return {
                ...state,
                similarProduct: {
                    status: constant.FAILURE,
                    data: [],
                }
            }
        }
        default:
            return state;
    }
}