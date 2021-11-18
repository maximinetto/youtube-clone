import * as React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "wouter";
import useAuth from "@/hooks/useAuth";

export const TypeOfGuard = {
  private: "private",
  public: "public",
};

function GuardRoute({
  component: Component = React.Fragment,
  layout: Layout = React.Fragment,
  children,
  type,
  ...rest
}) {
  const { logged } = useAuth();

  if (type === TypeOfGuard.private && !logged) {
    return <Redirect to="/auth" />;
  } else if (type === TypeOfGuard.public && logged) {
    return <Redirect to="/" />;
  }
  return children ? (
    <Route {...rest}>
      <Layout>{children}</Layout>
    </Route>
  ) : (
    <Route {...rest}>
      <Layout>{<Component {...rest} />}</Layout>
    </Route>
  );
}

GuardRoute.propTypes = {
  layout: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  children: PropTypes.node,
  type: PropTypes.oneOf([TypeOfGuard.private, TypeOfGuard.public]),
};

export default GuardRoute;
