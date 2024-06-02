import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productReducer'
import cardReducer from './cardReducer';
import categoryReducer from './categoryReducer';
import productByIdReducer from './productByIdReducer';


const rootReducer = combineReducers({
    product: productReducer,
    card: cardReducer ,
    category: categoryReducer,
    productById:productByIdReducer
});
export default rootReducer;
