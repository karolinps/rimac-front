import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "@components/layouts/Layout";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { plate } = useSelector((state) => state.auth.user);

  if (!Component) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        plate && restricted ? (
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
