import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { homeReducer } from './homeReducer';

const rootReducer = combineReducers({
    categoryReducer,
    homeReducer,
})
export default rootReducer;