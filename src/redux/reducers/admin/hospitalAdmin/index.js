import { combineReducers } from "redux";
import doctors from "./doctors";
import hospitals from "./hospital";
import owner from "./owner";
import rooms from "./rooms";
import ratings from "./ratings";

export default combineReducers({ doctors, hospitals, owner, rooms, ratings });
