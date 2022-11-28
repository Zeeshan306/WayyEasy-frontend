import { doctorConsts } from "../../../../components/helpers/constants";

import {
  CreateDoctor,
  DeleteDoctor,
  FetchDoctors,
  FetchSingleDoctor,
  UpdateDoctor,
} from "../../../../components/config";

export const fetchDoctors = () => async (dispatch) => {
  try {
    const { data } = await FetchDoctors();
    dispatch({ type: doctorConsts.GET_DOCTORS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createDoctor = (doctor, history) => async (dispatch) => {
  try {
    const { data } = await CreateDoctor(doctor);
    dispatch({ type: doctorConsts.CREATE_DOCTOR, payload: data });
    history.push("/admin/doctors");
  } catch (error) {
    console.log(error);
  }
};

export const updateDoctor = (id, doctor, history) => async (dispatch) => {
  try {
    const { data } = await UpdateDoctor(id, doctor);
    dispatch({ type: doctorConsts.EDIT_DOCTOR, payload: data });
    history.push("/admin/doctors");
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleDoctor = (id) => async (dispatch) => {
  try {
    const { data } = await FetchSingleDoctor(id);
    dispatch({ type: doctorConsts.GET_SINGLE_DOCTOR, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteDoctor = (id) => async (dispatch) => {
  try {
    const { data } = await DeleteDoctor(id);
    dispatch({ type: doctorConsts.DELETE_DOCTOR, payload: data });
  } catch (error) {
    console.log(error);
  }
};
