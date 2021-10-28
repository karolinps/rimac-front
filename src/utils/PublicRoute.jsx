import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "@components/layouts/Layout";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  if (!Component) {
    return null;
  }
  const token = 123;

  return (
    <Route
      {...rest}
      render={(props) =>
        token && restricted ? (
          <Redirect to={"/your-plan"} />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );
};

export default PublicRoute;
