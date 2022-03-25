import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { homeReducer } from './homeReducer';
import { productReducer } from './productReducer';

const rootReducer = combineReducers({
    categoryReducer,
    homeReducer,
    productReducer,
})
export default rootReducer;