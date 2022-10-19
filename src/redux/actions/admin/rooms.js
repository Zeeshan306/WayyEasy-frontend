import { FetchSingleRoom, FetchRooms, CreateRoom, UpdateRoom, DeleteRoom } from "../../../components/config";
import { roomsConsts } from "../../../components/helpers/constants";

export const fetchRooms = () => async (dispatch) => {
  try {
    const { data } = await FetchRooms();
    dispatch({ type: roomsConsts.GET_ROOMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createRoom = (room, history) => async (dispatch) => {
  try {
    const { data } = await CreateRoom(room);
    dispatch({ type: roomsConsts.CREATE_ROOM, payload: data });
    history.push("/admin/rooms");
  } catch (error) {
    console.log(error);
  }
};

export const updateRoom = (id, room, history) => async (dispatch) => {
  try {
    const { data } = await UpdateRoom(id, room);
    dispatch({ type: roomsConsts.EDIT_ROOM, payload: data });
    history.push("/admin/rooms");
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleRoom = (id) => async (dispatch) => {
  try {
    const { data } = await FetchSingleRoom(id);
    dispatch({ type: roomsConsts.GET_SINGLE_ROOM, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteRoom = (id) => async (dispatch) => {
  try {
    const { data } = await DeleteRoom(id);
    dispatch({ type: roomsConsts.DELETE_ROOM, payload: data });
  } catch (error) {
    console.log(error);
  }
};
