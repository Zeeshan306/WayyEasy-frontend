import { ownersConst } from "../../../../components/helpers/constants";

const initialState = {
  authData: null,
  progress: false,
  error: false,
  errorMsg: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ownersConst.PROGRESS:
      return { ...state, progress: true, error: false, authData: action?.data };
    case ownersConst.ERROR:
      return { ...state, errorMsg: action?.payload, progress: false, error: true };
    case ownersConst.LOGIN_OWNERS:
      localStorage.setItem("owner", JSON.stringify({ ...action?.payload }));
      return { ...state, progress: false, error: false, authData: action?.data };
    case ownersConst.SIGNUP_OWNERS:
      localStorage.setItem("owner", JSON.stringify({ ...action?.payload }));
      return { ...state, progress: false, error: false, authData: action?.data };
    case ownersConst.LOGIN_OWNERS:
      localStorage.removeItem("owner");
      return { ...state, progress: false, error: false, authData: null };
    default:
      return state;
  }
};
