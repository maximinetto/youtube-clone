import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../redux/actions/videos.action";

function useVideos() {
  const dispatch = useDispatch();
  const { loading, videos } = useSelector((state) => ({
    loading: state.homeVideos.loading,
    videos: state.homeVideos.videos,
  }));

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return { loading, videos };
}

export default useVideos;
