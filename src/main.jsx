import React from "react";
import { render } from "react-dom";
import App from "./App";
import 'normalize.css'

import './_base.scss'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
