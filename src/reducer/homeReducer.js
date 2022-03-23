import { constant } from '../constant';

const initialState = {
    homeInfo: {
        status: 'LOADING',
    }
}
export function homeReducer (state = initialState, action) {
    switch (action.type) {
        case constant.GET_HOME_SUCCESS: {
            return {
                ...state,
                homeInfo: {
                    status: constant.SUCCESS,
                    data: action.data,
                },
            };
        }

        case constant.GET_HOME_FAILURE: {
            return {
                ...state,
                homeInfo: {
                    status: constant.FAILURE,
                    data: [],
                },
            };
        }
        default:
            return state;
    }
}