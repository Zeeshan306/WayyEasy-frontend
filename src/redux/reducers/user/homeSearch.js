import { searchConsts } from "../../../components/helpers/constants";

const initialState = {
  allSearchedPhysicians: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case searchConsts.HOMESEARCH:
      state = {
        ...state,
        allSearchedPhysicians: action.payload,
      };
      break;
  }

  return state;
};
