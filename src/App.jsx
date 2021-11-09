import React, { useState } from "react";
import { Redirect, Route, Switch } from "wouter";
import classNames from "classnames";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import styles from "./_app.module.scss";
import LoginPage from "./pages/LoginPage";

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => setSidebar((value) => !value);

  return (
    <>
      <Header onToggleSidebar={handleToggleSidebar} />
      <div className={classNames(styles.appContainer)}>
        <Sidebar show={sidebar} onToggleSidebar={handleToggleSidebar} />
        <div className={classNames(styles.appMain)}>{children}</div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <Switch>
      <Route path="/">
        <Layout>
          <HomePage />
        </Layout>
      </Route>
      <Route path="/auth">
        <LoginPage />;
      </Route>
      <Route path="/search">
        <Layout>
          <h1>Search Results</h1>
        </Layout>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
