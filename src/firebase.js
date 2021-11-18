import { initializeApp } from "firebase/app";

import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  return signInWithPopup(auth, provider);
};

export const logout = () => {
  const auth = getAuth(app);
  return signOut(auth);
};

export default app;
