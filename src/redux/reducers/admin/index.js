import { combineReducers } from "redux";

//hospital reducers
import doctors from "./hospitalAdmin/doctors";
import hospitals from "./hospitalAdmin/hospital";
import owner from "./hospitalAdmin/owner";
import rooms from "./hospitalAdmin/rooms";
import ratings from "./hospitalAdmin/ratings";

//opd reducers
import OPDServices from "./opdAdmin/services";

//physicians
import Physicians from "./physiciansAdmin/physicians";

export default combineReducers({
  doctors,
  hospitals,
  owner,
  rooms,
  ratings,
  OPDServices,
  Physicians,
});
