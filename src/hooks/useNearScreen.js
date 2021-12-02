import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

function useNearScreen({
  distance = "100px",
  threshold = 1,
  externalRef,
  once = true,
} = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let _observer;

    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      _observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
        threshold,
      });

      if (element) _observer.observe(element);
    });

    return () => {
      _observer && _observer.disconnect();
    };
  }, [distance, threshold, externalRef, once]);

  return { isNearScreen, fromRef };
}

useNearScreen.propTypes = {
  distance: PropTypes.string,
  externalRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  once: PropTypes.bool,
  threshold: PropTypes.number,
};

useNearScreen.displayName = "nearScreen";

export default useNearScreen;
