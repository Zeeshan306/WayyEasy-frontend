import { LogIn, LogOut, SignUp } from "../../../../components/config";
import { ownersConst } from "../../../../components/helpers/constants";

export const logIn = (owner, history) => async (dispatch) => {
  try {
    dispatch({ type: ownersConst.PROGRESS });
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
        console.log(data);
        dispatch({ type: ownersConst.ERROR, payload: data });
        break;
    }
  } catch (error) {
    dispatch({ type: ownersConst.ERROR, payload: error.message });
  }
};

export const signUp = (owner, history) => async (dispatch) => {
  try {
    dispatch({ type: ownersConst.PROGRESS });
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
        console.log(response);
        dispatch({ type: ownersConst.ERROR, payload: response.message });
        break;
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: ownersConst.ERROR, payload: error.message });
  }
};

export const logOut = (history) => async (dispatch) => {
  try {
    const res = await LogOut();
    if (res.status == 200) {
      localStorage.clear();
      history.push("/admin/auth");
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    dispatch({ type: ownersConst.ERROR })
  }
};
