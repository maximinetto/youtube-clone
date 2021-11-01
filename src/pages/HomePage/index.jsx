import classNames from "classnames";
import React from "react";
import CategoriesBar from "../../components/CategoriesBar";
import Video from "../../components/Video";
import styles from "./_index.module.scss";

function HomePage() {
  return (
    <div className={classNames(styles.homeContainer)}>
      <CategoriesBar />
      <div className={classNames(styles.homeGrid)}>
        {
          <>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
          </>
        }
      </div>
    </div>
  );
}

export default HomePage;
