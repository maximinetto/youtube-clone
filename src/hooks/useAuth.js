import { useDispatch, useSelector } from "react-redux";
import {
  login as loginAction,
  loginSuccess,
  logout as logoutAction,
} from "@/redux/actions/auth.action";
import {
  login as loginInFirebase,
  logout as logoutFromFirebase,
} from "../firebase";

export default function useAuth() {
  const { loading, logged } = useSelector((state) => ({
    loading: state.auth.loading,
    logged: state.auth.logged,
  }));
  const dispatch = useDispatch();

  function login() {
    dispatch(loginAction());
    loginInFirebase().then(() => {
      dispatch(loginSuccess());
    });
  }

  function logout() {
    logoutFromFirebase().then(() => dispatch(logoutAction()));
  }

  return {
    login,
    logout,
    loading,
    logged,
  };
}
