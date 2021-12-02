import { useDispatch } from "react-redux";
import { getVideosByCategory } from "@/redux/actions/videos.action";
import { useCallback } from "react";

export default function useVideosByCategory() {
  const dispatch = useDispatch();

  const fetchVideos = useCallback(
    (category) => {
      dispatch(getVideosByCategory(category));
    },
    [dispatch]
  );

  return fetchVideos;
}
