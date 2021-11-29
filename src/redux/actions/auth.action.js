import app from "../../services/firebaseSetup";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

export const login = () => ({ type: LOGIN_REQUEST });

export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFail = () => ({ type: LOGIN_FAIL });

export const logout = () => ({ type: LOG_OUT });

export const loadProfile = () => (dispatch) => {
  const auth = getAuth(app);
  return onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        const profile = {
          name: user.displayName,
          photo: user.photoURL,
        };

        dispatch({ type: LOGIN_SUCCESS });
        dispatch({ type: LOAD_PROFILE, payload: profile });
      } else {
        dispatch({ type: LOG_OUT });
      }
    },
    (error) => {
      dispatch({ type: LOGIN_FAIL, payload: error.message });
    }
  );
};
