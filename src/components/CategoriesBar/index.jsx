import React, { useState } from "react";
import classNames from "classnames";
import useActiveCategory from "@/hooks/useActiveCategory";
import styles from "@/components/CategoriesBar/_index.module.scss";
import useCategory from "@/hooks/useCategory";

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
  const category = useActiveCategory();
  const { changeCategory } = useCategory();
  const [activeElement, setActiveElement] = useState(category);

  const handleKeyboard = (keyboard) => () => {
    setActiveElement(keyboard);
    changeCategory(keyboard);
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
