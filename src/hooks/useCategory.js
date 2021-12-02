import { changeCategory } from "@/redux/actions/videos.action";
import { useDispatch } from "react-redux";

export default function useCategory() {
  const dispatch = useDispatch();
  return {
    changeCategory: (category) => dispatch(changeCategory(category)),
  };
}
