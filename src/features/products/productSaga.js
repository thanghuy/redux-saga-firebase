import { call, put, all, takeLatest, } from '@redux-saga/core/effects';
import ProductAPI from '../../services/product.services/ProductApi';
import { getProductList } from './productSlice';
import { sagaActions } from './actionSaga';

function* workerGetProductList(){
    try {
        const resp = yield call(ProductAPI.getProduct);
        yield put(getProductList(resp.data));
    } catch (error) {
        console.log(error);
    }
}

export default function* productSaga(){
    yield all([
        takeLatest(sagaActions.FETCH_DATA_PRODUCT, workerGetProductList)
    ]);
}