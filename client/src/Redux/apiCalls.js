import { authReq } from "../Request";
import { loginFailure, loginSuccess, loginStart, logOut } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await authReq.post("/login", {
      username: user.username,
      password: user.password,
    });
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logout = (dispatch) => {
  dispatch(logOut());
};

export const signUp = async (user) => {
  try {
    const res = await authReq.post("/register", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
