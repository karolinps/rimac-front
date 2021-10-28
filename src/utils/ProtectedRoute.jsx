import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "@components/layouts/Layout";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  if (!Component) {
    return null;
  }
  const token = 123;
  return (
    <Route
      {...rest}
      path={rest.path}
      render={(props) =>
        token ? (
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
