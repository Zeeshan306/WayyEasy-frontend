import { userHomeSearch } from "../../../components/config";
import { searchConsts } from "../../../components/helpers/constants";

export const userSearch = (searchData) => async (dispatch) => {
  try {
    console.log(searchData)
    const { data } = await userHomeSearch(searchData);
    dispatch({ type: searchConsts.HOMESEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};
