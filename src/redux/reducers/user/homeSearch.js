import { searchConsts } from "../../../components/helpers/constants";

const initialState = {
  allSearchedPhysicians: [],
  progress: null,
  error: null,
  errorMessage: null,
  isSearching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case searchConsts.ERROR:
      state = {
        progress: false,
        error: true,
        isSearching: false,
        errorMessage: action.payload,
      };
      break;
    case searchConsts.PROGRESS:
      state = {
        progress: true,
        isSearching: false,
        error: false,
      };
      break;
    case searchConsts.HOMESEARCH:
      state = {
        ...state,
        progress: false,
        error: false,
        isSearching: true,
        allSearchedPhysicians: action.payload,
      };
      break;
  }

  return state;
};
