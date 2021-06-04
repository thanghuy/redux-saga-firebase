import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name : 'authRD',
    initialState : {
        isLogin : false,
        userName : "",
        isLoading : false
    },
    reducers : {
        setIsLogin : (state, action) =>{
            state.isLogin = action.payload.isLogin;
            state.userName = action.payload.userName;
        },
        setLogout : (state,action) =>{
            state.isLogin = action.payload;
        },
        setLoading : (state,action) =>{
            state.isLoading = action.payload;
        }
    }
})
export const { setIsLogin,setLogout,setLoading } = authSlice.actions;
export default authSlice.reducer;