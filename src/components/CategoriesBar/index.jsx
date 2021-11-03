import classNames from "classnames";
import React, { useState } from "react";
import styles from "./_index.module.scss";

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

function CategoriesBar() {
  const [activeElement, setActiveElement] = useState(keyboards[0]);

  const handleKeyboard = (keyboard) => () => {
    setActiveElement(keyboard);
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

export default CategoriesBar;
