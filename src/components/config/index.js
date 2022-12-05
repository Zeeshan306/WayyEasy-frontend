import { API } from "./axios";

//Hodpitals
//Owners Api
export const LogIn = (data) => API.post(`/owner/signin`, data);
export const LogOut = () => API.post("/owner/signout");
export const SignUp = (data) => API.post(`/owner/signup`, data);

//Doctors Api
export const CreateDoctor = (doctor) => API.post("/doctor/create", doctor);
export const FetchDoctors = () => API.get("/doctor/view");
export const UpdateDoctor = (id, doctor) =>
  API.patch(`/doctor/update/${id}`, doctor);
export const FetchSingleDoctor = (id) => API.get(`/doctor/view/${id}`);
export const DeleteDoctor = (id) => API.delete(`/doctor/delete/${id}`);

//Hospitals Api
export const CreateHospitals = (hospital) =>
  API.post("/hospital/create", hospital);
export const GetHospitals = () => API.get("/hospital/view");
export const GetSingleHospital = (id) => API.get(`/hospital/view/${id}`);
export const EditHospitals = (id, hospital) =>
  API.patch(`/hospital/update/${id}`, hospital);
export const DeleteHospitals = (id) => API.delete(`/hospital/delete/${id}`);

//Rooms Api
export const CreateRoom = (room) => API.post("room/create", room);
export const FetchRooms = () => API.get("room/view");
export const FetchSingleRoom = (id) => API.get(`room/view/${id}`);
export const UpdateRoom = (id, room) => API.patch(`/room/update/${id}`, room);
export const DeleteRoom = (id) => API.delete(`/room/delete/${id}`);

//Ratings Api
export const GetRatingsByHospital = (hospitalId) =>
  API.get(`/ratings/viewRatingsByHospital/${hospitalId}`);

//OPds
//Services Api
export const CreateOPDServices = (data) => API.post("/opdRoutes/create", data);
export const FetchOPDServices = () => API.get("/opdRoutes/viewAll");
export const FetchOPDService = (id) => API.get(`/opdRoutes/view/${id}`);
export const EditOPDservice = (id, data) =>
  API.patch(`/opdRoutes/edit/${id}`, data);
export const DeleteOPDService = (id) => API.delete(`/opdRoutes/remove/${id}`);
