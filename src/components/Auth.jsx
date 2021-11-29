import * as React from "react";
import { useDispatch } from "react-redux";
import { loadProfile } from "../redux/actions/auth.action";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import useAuth from "../hooks/useAuth";

function Auth({ children }) {
  const dispatch = useDispatch();
  const { loading } = useAuth();

  React.useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return children;
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
