import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import debounce from "just-debounce-it";
import useNearScreen from "@/hooks/useNearScreen";

const InfiniteScroll = React.memo(function ({
  children,
  distance,
  hasMore,
  loader,
  loading,
  loadMore,
  className,
  classNameVisor,
}) {
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    distance: distance || "100px",
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    () =>
      debounce(() => {
        loadMore();
      }, 100)(),
    [loadMore]
  );

  useEffect(() => {
    if (isNearScreen && hasMore) {
      debounceHandleNextPage();
    }
  }, [debounceHandleNextPage, isNearScreen, hasMore]);

  return (
    <div className={className || ""}>
      {children}
      <div className={classNameVisor || ""} ref={externalRef}></div>
      {loading && loader}
    </div>
  );
});

InfiniteScroll.displayName = "InfiniteScroll";

InfiniteScroll.propTypes = {
  children: PropTypes.element.isRequired,
  distance: PropTypes.string,
  threshold: PropTypes.number,
  hasMore: PropTypes.bool.isRequired,
  loader: PropTypes.element.isRequired,
  loading: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
  className: PropTypes.string,
  classNameVisor: PropTypes.string,
};

export default InfiniteScroll;
