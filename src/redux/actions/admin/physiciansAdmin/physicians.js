import { EditPhysicians } from "../../../../components/config";
import { physiciansConst } from "../../../../components/helpers/constants";

export const editPhysicians = (id, physicians, history) => async (dispatch) => {
  try {
    const { data } = await EditPhysicians(id, physicians);
    dispatch({ type: physiciansConst.EDIT_PHYSICIAN, payload: data });
    history.push("/admin");
  } catch (error) {
    console.log(error);
  }
};
