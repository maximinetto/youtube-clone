import app from "../../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const login = () => async (dispatch) => {
  try {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
