import {setIsLogin,setLoading,setLogout} from './authSlice';

export const authAction = {
    FETCH_LOGIN_USER_AUTH : "FETCH_LOGIN_USER_AUTH",
    FETCH_LOGOUT_USER_AUTH : "FETCH_LOGOUT_USER_AUTH",
    setIsLogin : setIsLogin,
    setLogout : setLogout,
    setLoading : setLoading
}