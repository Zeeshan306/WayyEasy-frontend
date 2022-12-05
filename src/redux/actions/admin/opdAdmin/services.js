import {
  CreateOPDServices,
  DeleteOPDService,
  EditOPDservice,
  FetchOPDService,
  FetchOPDServices,
} from "../../../../components/config";
import { servicesOPDConst } from "../../../../components/helpers/constants";

export const createOPDServices =
  (servicesOPDData, history) => async (dispatch) => {
    try {
      const { data } = await CreateOPDServices(servicesOPDData);
      dispatch({ type: servicesOPDConst.CREATE_SERVICE, payload: data });
      history.push("/admin/opd/services/");
    } catch (error) {
      console.log(error);
    }
  };

export const fetchOPDServices = () => async (dispatch) => {
  try {
    const { data } = await FetchOPDServices();
    dispatch({ type: servicesOPDConst.GET_ALL_SERVICES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateOPDService = (id, service, history) => async (dispatch) => {
  try {
    const { data } = await EditOPDservice(id, service);
    dispatch({ type: servicesOPDConst.EDIT_SERVICE, payload: data });
    history.push("/admin/opd/services/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleOPDService = (id) => async (dispatch) => {
  try {
    const { data } = await FetchOPDService(id);
    dispatch({ type: servicesOPDConst.GET_SERVICE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteOPDService = (id) => async (dispatch) => {
  try {
    const { data } = await DeleteOPDService(id);
    dispatch({ type: servicesOPDConst.DELETE_SERVICE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
