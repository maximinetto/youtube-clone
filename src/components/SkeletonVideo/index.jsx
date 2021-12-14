import React from "react";
import classNames from "classnames";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import PropTypes from "prop-types";

import "react-loading-skeleton/dist/skeleton.css";
import styles from "./index.module.scss";

const Box = ({ children, className, ...props }) => {
  return (
    <div className={classNames(styles.box, className)} {...props}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node || PropTypes.element,
  className: PropTypes.string,
};

const SkeletonVideo = () => {
  return (
    <div className={classNames(styles.skeletonContainer)}>
      <SkeletonTheme color="#343A40" highlightColor="#3C4147">
        <Skeleton height={100} />
        <div className={styles.skeletonContentContainer}>
          <Box className={styles.skeletonTitle}>
            <Skeleton circle width="100%" height="100%" />
          </Box>
          <Box
            className={classNames(
              styles.flex,
              styles.flexColumn,
              styles.fullWidth,
              styles.margin
            )}
          >
            <Box className={styles.skeletonContent}>
              <Skeleton />
            </Box>
            <Box className={styles.skeletonContent}>
              <Skeleton />
            </Box>
          </Box>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonVideo;
