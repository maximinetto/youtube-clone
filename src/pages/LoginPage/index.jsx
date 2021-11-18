import React from "react";
import classNames from "classnames";
import YoutubeIcon from "../../components/Icons/YoutubeIcon";
import styles from "./_index.module.scss";
import useAuth from "@/hooks/useAuth";

function LoginPage() {
  const { login } = useAuth();

  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <YoutubeIcon
          width={130}
          height={130}
          className={classNames(styles.headerLogo)}
        />
        <button onClick={login}>Login With Google</button>
        <p>This Project is made using YOUTUBE DATA API</p>
      </div>
    </div>
  );
}

export default LoginPage;
