import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

const initialState = {
  logged: false,
  user: null,
  loading: true,
};

export const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        loading: false,
        logged: true,
      };
    case LOGIN_FAIL:
      return {
        ...prevState,
        logged: false,
        loading: false,
        error: action.payload,
        user: null,
      };
    case LOAD_PROFILE:
      return {
        ...prevState,
        user: action.payload,
      };

    case LOG_OUT:
      return {
        ...prevState,
        logged: false,
        user: null,
      };

    default:
      return prevState;
  }
};
