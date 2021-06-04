import { call, put, all, takeLatest,takeEvery } from "@redux-saga/core/effects";
import { authAction } from "./authAction";
import firebase from "firebase";

function onAuthStateChanged() {
  return new Promise((reslove, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        reslove(user);
      } else {
        reject(null);
      }
    });
  });
}
function getIdTokenHandle() {
  return new Promise((reslove, reject) => {
    const token = firebase.auth().currentUser.getIdToken();
    if (token) {
      reslove(token);
    } else {
      reject(null);
    }
  });
}

function userLogout(){
  return new Promise((reslove,reject) => {
    const user = firebase.auth().signOut();
    if(!user){
      reslove(true);
    }
    else{
      reject(false);
    }
  })
}
//login with redux saga
function* workerSetLogin() {
  console.log("login");
  let result = {};
  yield put(authAction.setLoading(true));
  try {
    const user = yield call(onAuthStateChanged);
    const token = yield call(getIdTokenHandle);
      localStorage.setItem("accessToken", token);
      localStorage.setItem("username", user.displayName);
      result = {
        isLogin: true,
        userName: user.displayName,
      };
  } catch (error) {
    result = {
        isLogin: false,
        userName: null,
      };
  }
  yield put(authAction.setIsLogin(result));
  yield put(authAction.setLoading(false));
}
//logout with reudx saga
function* workerLogout(){
  try {
    firebase.auth().signOut();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    yield put(authAction.setIsLogin({isLogin : false, userName : null}));
  } catch (error) {
    console.log(error);
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(authAction.FETCH_LOGIN_USER_AUTH, workerSetLogin),
    takeLatest(authAction.FETCH_LOGOUT_USER_AUTH, workerLogout)
  ]);
}
