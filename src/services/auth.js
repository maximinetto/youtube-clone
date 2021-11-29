import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { YOUTUBE_API_URL } from "./youtubeSetup";
import app from "./firebaseSetup";

export const login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  provider.addScope(YOUTUBE_API_URL);
  return signInWithPopup(auth, provider);
};

export const logout = () => {
  const auth = getAuth(app);
  return signOut(auth);
};
