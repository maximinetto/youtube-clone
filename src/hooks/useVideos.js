import { getPopularVideos } from "@/redux/actions/videos.action";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useVideosByCategory from "./useVideosByCategory";

function useVideos() {
  const fetchVideosByCategory = useVideosByCategory();
  const dispatch = useDispatch();

  const { loading, videos, activeCategory } = useSelector((state) => ({
    loading: state.homeVideos.loading,
    videos: state.homeVideos.videos,
    activeCategory: state.homeVideos.activeCategory,
  }));

  const fetchVideos = useCallback(() => {
    activeCategory.toLowerCase() === "all"
      ? dispatch(getPopularVideos())
      : fetchVideosByCategory(activeCategory);
  }, [activeCategory, dispatch, fetchVideosByCategory]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { loading, videos, fetchMore: fetchVideos };
}

export default useVideos;
