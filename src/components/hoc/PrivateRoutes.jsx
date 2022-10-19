import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProvateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        const owner = JSON.parse(localStorage.getItem("owner"));
        if (owner) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/admin/auth"} />;
        }
      }}
    />
  );
};

export default ProvateRoute;
