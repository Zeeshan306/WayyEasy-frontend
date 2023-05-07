import { combineReducers } from "redux";

//hospital reducers
import doctors from "./admin/hospitalAdmin/doctors";
import hospitals from "./admin/hospitalAdmin/hospital";
import owner from "./admin/hospitalAdmin/owner";
import rooms from "./admin/hospitalAdmin/rooms";
import ratings from "./admin/hospitalAdmin/ratings";

//opd reducers
import OPDServices from "./admin/opdAdmin/services";

//physicians
import Physicians from "./admin/physiciansAdmin/physicians";

//home search
import homeSearch from "./user/homeSearch";

export default combineReducers({
  doctors,
  hospitals,
  owner,
  rooms,
  ratings,
  OPDServices,
  Physicians,
  homeSearch,
});
