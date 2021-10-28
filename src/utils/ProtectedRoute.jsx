import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "@components/layouts/Layout";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { plate } = useSelector((state) => state.auth.user);

  if (!Component) {
    return null;
  }
  console.log(plate);
  return (
    <Route
      {...rest}
      path={rest.path}
      render={(props) =>
        plate ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
