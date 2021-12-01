import { useSelector } from "react-redux";

export default function useHasMoreVideos() {
  const hasMoreVideos = useSelector((state) => state.homeVideos.nextPageToken);

  return hasMoreVideos != null;
}
