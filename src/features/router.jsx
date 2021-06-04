import React from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import Product from "./products/productMain";
import Header from './layouts/header/headerMain';
import Footer from './layouts/footer/footerMain';
import Login from "./auth/pages/login";
import SignIn from "./auth/pages/SignIn";
import HomeMain from "./home/homeMain";
import ProductMain from "./products/productMain";
const Router = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={HomeMain} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/sign-in" component={SignIn} exact />
        <Route path="/product" component={Product} exact />
      </Switch>
      <Footer/>
    </Fragment>
  );
};

export default Router;
