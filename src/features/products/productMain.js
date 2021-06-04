import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { sagaActions } from './actionSaga';
const ProductMain = () => {
    const productList = useSelector(state => state.productList);
    console.log(productList);
    const dispatch = useDispatch();
    const getProduct = () => {
        dispatch({type : sagaActions.FETCH_DATA_PRODUCT});
    }
    
    return (
        <div>
            <button type='button' onClick={getProduct}>Get Product</button>
        </div>
    );
};

export default ProductMain;