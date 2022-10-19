import { GetRatingsByHospital } from "../../../components/config";
import { ratingsConst } from "../../../components/helpers/constants";

export const getRatingsByHospital = (id) => async (dispatch) => {
  try {
    const {data} = await GetRatingsByHospital(id);
    dispatch({ type: ratingsConst.GET_SINGLE_HOPITAL_RATINGS, payload: data });
  } catch (error) {
      console.error(error);
  }
};
