import React, { useEffect, useState } from "react";
import firebase from "firebase";
import ConfigFirebase from "../../config/firebase";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./authAction";
if (firebase.apps.length === 0) {
  firebase.initializeApp(ConfigFirebase);
}
const AuthMain = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  useEffect(() => {
    dispatch({ type: authAction.FETCH_LOGIN_USER_AUTH }); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <Fragment>
      {isLoading ? "Loading" : children}
    </Fragment>
  );
};

export default AuthMain;
