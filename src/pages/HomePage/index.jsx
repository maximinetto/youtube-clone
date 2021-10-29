import React from "react";
import CategoriesBar from "../../components/CategoriesBar";
import Video from "../../components/Video";

import "./_index.scss"

function HomePage() {
  return (
    <div className="home-container">
      <CategoriesBar />
      <div className="home__grid">
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
