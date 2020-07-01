import { combineReducers } from "redux";
// importing reducers
import userReducer from "./user/user.reducer";
import postReducer from "./post/post.reducer";

export default combineReducers({
  user: userReducer,
  post: postReducer,
});
