import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from '../context/authContext/authContext'

const PrivateRoute = ({ component: Component, ...rest }) =>
{
    const { userInfo } = useContext(AuthContext)
  const isLogin = () => userInfo ? true : false

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

export default PrivateRoute