import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "@/redux/actionType";
import {
  getPopularVideos as fetchPopularVideos,
  getVideosByCategory as fetchVideosByCategory,
} from "@/services/videos";

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });
    const data = await fetchPopularVideos();
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.videos,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: HOME_VIDEOS_FAIL, payload: err.message });
  }
};

export const getVideosByCategory = (keyboard) => async (dispatch, getState) => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });
    const _nextPageToken = getState().homeVideos.nextPageToken;
    const { videos, nextPageToken } = await fetchVideosByCategory(
      keyboard,
      _nextPageToken
    );
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: { videos, nextPageToken, category: keyboard },
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: HOME_VIDEOS_FAIL, payload: err.message });
  }
};
