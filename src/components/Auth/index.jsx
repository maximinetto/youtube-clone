import * as React from "react";
import { useDispatch } from "react-redux";
import { loadProfile } from "@/redux/actions/auth.action";
import PropTypes from "prop-types";
import Spinner from "@/components/Spinner";
import useAuth from "@/hooks/useAuth";

import styles from "./_index.module.scss";

function Auth({ children }) {
  const dispatch = useDispatch();
  const { loading } = useAuth();

  React.useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  return children;
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
