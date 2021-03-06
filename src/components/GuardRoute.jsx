import * as React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "wouter";
import useAuth from "@/hooks/useAuth";

export const TypeOfGuard = {
  private: "private",
  public: "public",
};

const GuardRoute = ({
  component: Component = React.Fragment,
  layout: Layout = React.Fragment,
  sidebarAlwaysVisible = true,
  sidebarContainerFixed = false,
  children,
  type,
  ...rest
}) => {
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
      <Layout
        alwaysVisible={sidebarAlwaysVisible}
        sidebarContainerFixed={sidebarContainerFixed}
      >
        {<Component {...rest} />}
      </Layout>
    </Route>
  );
};

GuardRoute.propTypes = {
  layout: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  children: PropTypes.node,
  type: PropTypes.oneOf([TypeOfGuard.private, TypeOfGuard.public]),
  sidebarAlwaysVisible: PropTypes.bool,
  sidebarContainerFixed: PropTypes.bool,
};

export default GuardRoute;
