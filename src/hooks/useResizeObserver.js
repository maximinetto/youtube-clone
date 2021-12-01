import { ResizeObserver as Polyfill } from "@juggle/resize-observer";
import useLayoutEffect from "@react-hook/passive-layout-effect";
import useLatest from "@react-hook/latest";
import rafSchd from "raf-schd";

const ResizeObserver =
  typeof window !== "undefined" && "ResizeObserver" in window
    ? // @ts-ignore
      window.ResizeObserver
    : Polyfill;

function useResizeObserver(target, callback) {
  const resizeObserver = getResizeObserver();
  const storedCallback = useLatest(callback);

  useLayoutEffect(() => {
    let didUnsubscribe = false;
    const targetEl = target && "current" in target ? target.current : target;
    if (!targetEl) return () => {};

    function cb(entry, observer) {
      if (didUnsubscribe) return;
      storedCallback.current(entry, observer);
    }

    resizeObserver.subscribe(targetEl, cb);

    return () => {
      didUnsubscribe = true;
      resizeObserver.unsubscribe(targetEl, cb);
    };
  }, [target, resizeObserver, storedCallback]);

  return resizeObserver.observer;
}

function createResizeObserver() {
  const callbacks = new Map();
  const observer = new ResizeObserver(
    rafSchd((entries, obs) => {
      for (let i = 0; i < entries.length; i++) {
        const cbs = callbacks.get(entries[i].target);
        cbs?.forEach((cb) => cb(entries[i], obs));
      }
    })
  );

  return {
    observer,
    subscribe(target, callback) {
      observer.observe(target);
      const cbs = callbacks.get(target) ?? [];
      cbs.push(callback);
      callbacks.set(target, cbs);
    },
    unsubscribe(target, callback) {
      observer.unobserve(target);
      const cbs = callbacks.get(target) ?? [];
      if (cbs.length === 1) {
        callbacks.delete(target);
        return;
      }
      const cbIndex = cbs.indexOf(callback);
      if (cbIndex !== -1) cbs.splice(cbIndex, 1);
      callbacks.set(target, cbs);
    },
  };
}

let _resizeObserver;

const getResizeObserver = () =>
  !_resizeObserver
    ? (_resizeObserver = createResizeObserver())
    : _resizeObserver;

export default useResizeObserver;
