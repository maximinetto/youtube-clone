import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "wouter";
import { login, logout } from "../redux/actions/auth.action";

export default function useAuth() {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector((state) => state.auth);
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (accessToken) {
      setLocation("/");
    } else if (!loading && !accessToken) {
      setLocation("/auth");
    }
  }, [loading, accessToken, setLocation]);

  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    loading,
  };
}
