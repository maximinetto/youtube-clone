import { useEffect } from "react";
import PropTypes from "prop-types";

function useClickOutside({ ref, handler, targetException }) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      const { target } = e;
      if (
        ref.current &&
        !ref.current.contains(target) &&
        !targetException.current.contains(target)
      ) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler, ref, targetException]);

  return ref;
}

useClickOutside.propTypes = {
  ref: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
  targetException: PropTypes.object,
};

export default useClickOutside;
