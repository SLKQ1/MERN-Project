import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middleware = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

// making the store persist using redux persist
export const persistor = persistStore(store);

export default { store, persistor };
