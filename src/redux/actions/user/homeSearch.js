import { userHomeSearch } from "../../../components/config";
import { searchConsts } from "../../../components/helpers/constants";

export const userSearch = (searchData) => async (dispatch) => {
  try {
    dispatch({ type: searchConsts.PROGRESS });
    const { data } = await userHomeSearch(searchData);
    dispatch({ type: searchConsts.HOMESEARCH, payload: data });
  } catch (error) {
    dispatch({ type: searchConsts.ERROR, payload: error.message });
  }
};
