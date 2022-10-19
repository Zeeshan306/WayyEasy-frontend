import { roomsConsts } from "../../../components/helpers/constants";

const initialState = {
  allRooms: [],
  singleRoom: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case roomsConsts.GET_ROOMS:
      state = {
        ...state,
        allRooms: action.payload,
      };
      break;
    case roomsConsts.GET_SINGLE_ROOM:
      state = { ...state, singleRoom: action.payload };
    case roomsConsts.CREATE_ROOM:
      state = { ...state, allRooms: action.payload };
      break;
    case roomsConsts.EDIT_ROOM:
      return initialState.allRooms.map((data) =>
        data._id === action.payload._id ? action.payload : data
      );
    case roomsConsts.DELETE_ROOM:
      return initialState.allRooms.filter(
        (data) => data._id !== action.payload
      );
  }

  return state;
};
