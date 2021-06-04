import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Button,
} from "reactstrap";
import { authAction } from "../../auth/authAction";

const HeaderMain = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isLogout = ()=>{
    dispatch({type : authAction.FETCH_LOGOUT_USER_AUTH});
  }
  return (
    <Navbar color="info" light expand="md">
      <Container>
        <Link className="navbar-brand" to="/">
          Store Demo
        </Link>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/product">
                List Product
              </Link>
            </NavItem>
            <NavItem>
              <Link to="cart" className="nav-link">
                Cart
              </Link>
            </NavItem>
          </Nav>
          {user.isLogin ? (
            <Nav>
              <NavItem>
                <Link className="nav-link" to="/login">
                  {user.userName}
                </Link>
              </NavItem>
              <NavItem>
                <Button className="nav-link" onClick={() => isLogout()}>Sign out</Button>
              </NavItem>
            </Nav>
          ) : (
            <Nav>
              <NavItem>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/sign-in">
                  Sigin
                </Link>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMain;
