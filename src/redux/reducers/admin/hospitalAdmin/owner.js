import { ownersConst } from "../../../../components/helpers/constants";

export default (state = { authData: null }, action) => {
    switch (action.type) {
        case ownersConst.LOGIN_OWNERS:
            localStorage.setItem('owner', JSON.stringify({ ...action?.payload }));
            return { ...state, authData: action?.data };
            case ownersConst.SIGNUP_OWNERS:
                localStorage.setItem('owner', JSON.stringify({ ...action?.payload }));
                return { ...state, authData: action?.data };
        case ownersConst.LOGIN_OWNERS:
            localStorage.removeItem("owner");
            return { ...state, authData: null };
        default:
            return state;
    }
}