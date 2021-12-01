import classNames from "classnames";
import React, { useState } from "react";
import PropTypes from "prop-types";
import useActiveCategory from "@/hooks/useActiveCategory";
import useVideosByCategory from "@/hooks/useVideosByCategory";
import styles from "@/components/CategoriesBar/_index.module.scss";

const keyboards = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Mars Songs",
  "Coding",
  "Cricket",
  "Football",
  "Barcelona",
  "Gatsby",
  "Poor Coder",
  "Microservices",
];

function CategoriesBar({ refetchVideos }) {
  const category = useActiveCategory();
  const [activeElement, setActiveElement] = useState(category);
  const fetchVideosByCategory = useVideosByCategory();

  const handleKeyboard = (keyboard) => () => {
    setActiveElement(keyboard);
    keyboard === "All" ? refetchVideos() : fetchVideosByCategory(keyboard);
  };

  return (
    <div className={styles.categoriesBar}>
      {keyboards.map((value, i) => (
        <span
          key={i}
          onClick={handleKeyboard(value)}
          className={classNames({
            [styles.active]: activeElement === value,
          })}
        >
          {value}
        </span>
      ))}
    </div>
  );
}

CategoriesBar.propTypes = {
  refetchVideos: PropTypes.func.isRequired,
};

export default CategoriesBar;
