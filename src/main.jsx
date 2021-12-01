import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "@/App";
import store from "@/redux/store";
import "normalize.css";
import "@/_base.module.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
