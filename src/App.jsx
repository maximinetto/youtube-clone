import classNames from "classnames";
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import styles from "./_app.module.scss";

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => setSidebar((value) => !value);

  return (
    <div>
      <Header sidebar={sidebar} onToggleSidebar={handleToggleSidebar}/>
      <div className={classNames(styles.appContainer)}>
        <Sidebar show={sidebar}/>
        <div className={classNames(styles.appMain)}>
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default App;
