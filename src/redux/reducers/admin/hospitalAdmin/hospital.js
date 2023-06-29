import { hospitalConsts } from "../../../../components/helpers/constants";

const initialState = {
  allHospitals: [],
  singleHospital: [],
  progress: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case hospitalConsts.PROGRESS:
      if (action.payload) {
        state = {
          progress: true,
        };
      } else {
        state = {
          ...state,
          progress: false,
          allHospitals: action.payload,
        };
      }
      break;
    case hospitalConsts.GET_HOSPITALS:
      state = {
        ...state,
        allHospitals: action.payload,
      };
      break;
    case hospitalConsts.GET_SINGLE_HOSPITAL:
      state = {
        singleHospital: action.payload,
      };
      break;
    case hospitalConsts.CREATE_HOSPITAL:
      state = { ...state, allHospitals: action.payload };
      break;
    case hospitalConsts.EDIT_HOSPITAL:
      return initialState.allHospitals.map((data) =>
        data._id === action.payload._id ? action.payload : data
      );
    case hospitalConsts.DELETE_HOSPITAL:
      return initialState.allHospitals.filter(
        (data) => data._id !== action.payload
      );
  }

  return state;
};
