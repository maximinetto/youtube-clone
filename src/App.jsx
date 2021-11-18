import React from "react";
import { Redirect, Switch } from "wouter";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import GuardRoute, { TypeOfGuard } from "./components/GuardRoute";
import Auth from "./components/Auth";

const App = () => {
  return (
    <Auth>
      <Switch>
        <GuardRoute
          type={TypeOfGuard.public}
          path="/auth"
          component={LoginPage}
        />
        <GuardRoute
          type={TypeOfGuard.private}
          path="/"
          component={HomePage}
          layout={Layout}
        />
        <GuardRoute
          type={TypeOfGuard.private}
          path="/search"
          component={<h1>Search Results</h1>}
          layout={Layout}
        />
        <Redirect path="/" />
      </Switch>
    </Auth>
  );
};

export default App;
