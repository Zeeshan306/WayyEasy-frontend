import { physiciansConst } from "../../../../components/helpers/constants";

const initialState = {
  allPhysicians: [],
  singlePhysician: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case physiciansConst.EDIT_PHYSICIAN:
      state = {
        ...state,
        singlePhysician: action.payload,
      };
      break;
  }

  return state;
};
