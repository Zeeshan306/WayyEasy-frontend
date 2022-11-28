import { LogIn, LogOut, SignUp } from "../../../../components/config";
import { ownersConst } from "../../../../components/helpers/constants";

export const logIn = (owner, history) => async (dispatch) => {
  try {
    const { data } = await LogIn(owner);
    dispatch({ type: ownersConst.LOGIN_OWNERS, payload: data });
    history.push("/admin");
  } catch (error) {
    if (error.response.status == 406) {
      alert("Invalid credentials.");
    } else {
      alert("Something went wrong. For a while please check your connection.");
    }
  }
};

export const signUp = (owner, history) => async (dispatch) => {
  try {
    const { data } = await SignUp(owner);
    dispatch({ type: ownersConst.SIGNUP_OWNERS, payload: data });
    history.push("/admin");
  } catch (error) {
    console.log(error);
  }
};

export const logOut = (history) => async (dispatch) => {
  try {
    const res = await LogOut();
    if (res.status == 200) {
      localStorage.clear();
      alert(res.data);
    } else {
      alert("Something went wrong");
    }
    history.push("/admin/auth");
  } catch (error) {
    console.log(error);
  }
};
