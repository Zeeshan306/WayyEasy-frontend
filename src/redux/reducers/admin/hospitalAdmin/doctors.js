import { doctorConsts } from "../../../../components/helpers/constants";

const initialState = {
  allDoctors: [],
  singleDoctor: [],
  progress: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case doctorConsts.PROGRESS:
      if (action.payload) {
        state = {
          progress: true,
        };
      }
      break;
    case doctorConsts.GET_DOCTORS:
      state = {
        ...state,
        progress: false,
        allDoctors: action.payload,
      };
      break;
    case doctorConsts.GET_SINGLE_DOCTOR:
      state = { ...state, singleDoctor: action.payload };
    case doctorConsts.CREATE_DOCTOR:
      state = { ...state, allDoctors: action.payload };
      break;
    case doctorConsts.EDIT_DOCTOR:
      return initialState.allDoctors.map((data) =>
        data._id === action.payload._id ? action.payload : data
      );
    case doctorConsts.DELETE_DOCTOR:
      return initialState.allDoctors.filter(
        (data) => data._id !== action.payload
      );
  }

  return state;
};
