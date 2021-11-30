import { useSelector } from "react-redux";

export default function useActiveCategory() {
  const activeCategory = useSelector(
    (state) => state.homeVideos.activeCategory
  );
  return activeCategory;
}
