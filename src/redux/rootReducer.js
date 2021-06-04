import { combineReducers } from 'redux';
import ProductSlice from '../features/products/productSlice';
import AuthSlice from '../features/auth/authSlice';

const RootReducer = combineReducers({
    productList : ProductSlice,
    user : AuthSlice
});

export default RootReducer;