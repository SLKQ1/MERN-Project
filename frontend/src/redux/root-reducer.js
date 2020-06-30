import { combineReducers } from "redux";
// importing reducers
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});
