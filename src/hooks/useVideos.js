import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "@/redux/actions/videos.action";

function useVideos() {
  const dispatch = useDispatch();
  const { loading, videos } = useSelector((state) => ({
    loading: state.homeVideos.loading,
    videos: state.homeVideos.videos,
  }));

  const fetchVideos = useCallback(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { loading, videos, refetch: fetchVideos };
}

export default useVideos;
