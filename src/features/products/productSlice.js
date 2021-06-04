import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name : 'ProductRD',
    initialState : {
        setLoading : true,
        productList : []
    },
    reducers : {
        getProductList : (state, action) =>{
            state.productList = action.payload;
        },
        setLoading : (state,action) =>{
            state.setLoading = action.payload;
        }
    }
})
export const { getProductList,setLoading } = productSlice.actions;
export default productSlice.reducer;