import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import rootReducer from "../reducers/admin/hospitalAdmin"

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;