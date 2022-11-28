import { doctorConsts, ratingsConst } from "../../../../components/helpers/constants";

const initialState = {
  allRatings: [],
  singleRating: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ratingsConst.GET_SINGLE_HOPITAL_RATINGS:
      state = {
        ...state,
        allRatings: action.payload,
      };
  }

  return state;
};
