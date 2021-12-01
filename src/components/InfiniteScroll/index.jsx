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
    <>
      <div className={className || ""}>{children}</div>
      {loading && loader}
      <div className={classNameVisor || ""} ref={externalRef}></div>
    </>
  );
});

InfiniteScroll.displayName = "InfiniteScroll";

InfiniteScroll.propTypes = {
  children: PropTypes.element.isRequired,
  distance: PropTypes.string,
  hasMore: PropTypes.bool.isRequired,
  loader: PropTypes.element.isRequired,
  loading: PropTypes.bool,
  loadMore: PropTypes.func.isRequired,
  className: PropTypes.string,
  classNameVisor: PropTypes.string,
};

export default InfiniteScroll;
