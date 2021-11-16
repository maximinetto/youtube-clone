import React from "react";
import { Redirect, Route, Switch } from "wouter";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import useAuth from "./hooks/useAuth";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";

const App = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  return (
    <Switch>
      <Route path="/auth" component={LoginPage} />

      <Layout>
        <Route path="/" component={HomePage} />
        <Route path="/search" component={<h1>Search Results</h1>} />
      </Layout>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
