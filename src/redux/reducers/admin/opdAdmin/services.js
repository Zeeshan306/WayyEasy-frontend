import { servicesOPDConst } from "../../../../components/helpers/constants";

const initialState = {
  allServices: [],
  singleService: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case servicesOPDConst.CREATE_SERVICE:
      state = {
        ...state,
        allServices: action.payload,
      };

      break;
    case servicesOPDConst.GET_SERVICE:
      state = { ...state, singleService: action.payload };
    case servicesOPDConst.GET_ALL_SERVICES:
      state = { ...state, allServices: action.payload };
      break;
    case servicesOPDConst.EDIT_SERVICE:
      return initialState.singleService.map((data) =>
        data._id === action.payload._id ? action.payload : data
      );
    case servicesOPDConst.DELETE_SERVICE:
      return initialState.singleService.filter(
        (data) => data._id !== action.payload
      );
  }

  return state;
};
