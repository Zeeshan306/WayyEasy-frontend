import { LogIn, LogOut, SignUp } from "../../../../components/config";
import { ownersConst } from "../../../../components/helpers/constants";

export const logIn = (owner, history) => async (dispatch) => {
  try {
    const { data } = await LogIn(owner);
    dispatch({ type: ownersConst.LOGIN_OWNERS, payload: data });
    switch (data?.user?.role) {
      case "admin":
      case "owner":
        history.push("/admin");
        break;
      case "doctor":
        history.push("/admin/doctor");
        break;
      case "pathLab":
        history.push("/admin/pathLab");
        break;
      case "opd":
        history.push("/admin/opd");
        break;
      default:
        alert("Seomthing went wrong. Please try again later.");
        break;
    }
  } catch (error) {
    alert(error?.response?.data);
  }
};

export const signUp = (owner, history) => async (dispatch) => {
  try {
    const { data } = await SignUp(owner);
    dispatch({ type: ownersConst.SIGNUP_OWNERS, payload: data });
    switch (data?.user?.role) {
      case "admin":
      case "owner":
        history.push("/admin");
        break;
      case "doctor":
        history.push("/admin/doctor");
        break;
      case "pathLab":
        history.push("/admin/pathLab");
        break;
      case "opd":
        history.push("/admin/opd");
        break;
      default:
        alert("Seomthing went wrong. Please try again later.");
        break;
    }
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
