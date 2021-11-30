import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../redux/actions/videos.action";

export default function useVideosByCategory() {
  const dispatch = useDispatch();

  function fetchVideos(category) {
    dispatch(getVideosByCategory(category));
  }

  return fetchVideos;
}
