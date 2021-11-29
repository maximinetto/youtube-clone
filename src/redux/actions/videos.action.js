import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../actionType";
import { getPopularVideos as fetchPopularVideos } from "../../services/videos";

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });
    const data = await fetchPopularVideos();
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: { videos: data.videos, nextPageToken: data.nextPageToken },
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: HOME_VIDEOS_FAIL, payload: err.message });
  }
};
