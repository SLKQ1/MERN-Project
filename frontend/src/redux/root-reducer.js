import { combineReducers } from "redux";
// importing persist reducer so can keep the state in local storage
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// importing reducers
import userReducer from "./user/user.reducer";
import wristShotReducer from "./wristShots/wristShots.reducer";
import authReducer from "./auth/auth.reducer";

// config for redux persist
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  wristShot: wristShotReducer,
});

export default persistReducer(persistConfig, rootReducer);
