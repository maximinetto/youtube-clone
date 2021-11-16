import app from "../../firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    const token = credential.accessToken;
    const profile = {
      name: user.displayName,
      photo: user.photoURL,
    };

    sessionStorage.setItem("ytc-access-token", token);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: token,
    });
    dispatch({ type: LOAD_PROFILE, payload: profile });
    return true;
  } catch (error) {
    console.log(error.message);
    dispatch({ type: LOGIN_FAIL, payload: error.message });
    return false;
  }
};

export const logout = () => (dispatch) => {
  const auth = getAuth(app);
  signOut(auth).then(() => {
    sessionStorage.removeItem("ytc-access-token");
    sessionStorage.removeItem("ytc-user");
    dispatch({ type: LOG_OUT });
  });
};
