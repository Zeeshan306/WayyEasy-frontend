import {
  GetSingleHospital,
  GetHospitals,
  CreateHospitals,
  EditHospitals,
  DeleteHospitals,
} from "../../../components/config";
import { hospitalConsts } from "../../../components/helpers/constants";

export const getHospitals = () => async (dispatch) => {
  try {
    const { data } = await GetHospitals();
    dispatch({ type: hospitalConsts.GET_HOSPITALS, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const getSingleHospital = (id) => async (dispatch) => {
  try {
    const { data } = await GetSingleHospital(id);
    dispatch({ type: hospitalConsts.GET_SINGLE_HOSPITAL, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const addHospital = (hospital, history) => async (dispatch) => {
  try {
    const { data } = await CreateHospitals(hospital);
    dispatch({ type: hospitalConsts.CREATE_HOSPITAL, payload: data });
    history.push("/admin/hospital");
  } catch (error) {
    console.log(error);
  }
};

export const updateHospitals = (id, hospital, history) => async (dispatch) => {
  try {
    const { data } = await EditHospitals(id, hospital);
    dispatch({ type: hospitalConsts.EDIT_HOSPITAL, payload: data });
    history.push("/admin/hospital");
  } catch (error) {
    console.log(error);
  }
};

export const deleteHospital = (id) => async (dispatch) => {
  try {
    const { data } = await DeleteHospitals(id);
    dispatch({ type: hospitalConsts.DELETE_HOSPITAL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
