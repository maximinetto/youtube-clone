import {
  HOME_VIDEOS_CHANGE_CATEGORY,
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "@/redux/actionType";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "All",
};

const videosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos:
          state.nextPageToken !== null
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };

    case HOME_VIDEOS_CHANGE_CATEGORY:
      return {
        ...state,
        activeCategory: payload,
        videos: [],
        nextPageToken: null,
      };

    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        nextPageToken: null,
      };
    default:
      return state;
  }
};

export default videosReducer;
