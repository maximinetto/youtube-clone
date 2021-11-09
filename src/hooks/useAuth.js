import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth.action";

export default function useAuth() {
  const dispatch = useDispatch();
  return {
    login: ({ email, password }) => dispatch(login({ email, password })),
  };
}
