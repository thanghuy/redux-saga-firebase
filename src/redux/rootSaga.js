import {all} from 'redux-saga/effects';
import ProductSaga from '../features/products/productSaga';
import AuthSaga from '../features/auth/authSaga';
export default function* RootSaga(){
    yield all([
       ProductSaga(),
       AuthSaga()
    ]);
}
