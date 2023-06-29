import { ownersConst } from "../../../../components/helpers/constants";

const initialState = {
  authData: null,
  progress: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ownersConst.PROGRESS:
      return { ...state, progress: true, authData: action?.data };
    case ownersConst.LOGIN_OWNERS:
      localStorage.setItem("owner", JSON.stringify({ ...action?.payload }));
      return { ...state, progress: false, authData: action?.data };
    case ownersConst.SIGNUP_OWNERS:
      localStorage.setItem("owner", JSON.stringify({ ...action?.payload }));
      return { ...state, progress: false, authData: action?.data };
    case ownersConst.LOGIN_OWNERS:
      localStorage.removeItem("owner");
      return { ...state, progress: false, authData: null };
    default:
      return state;
  }
};
