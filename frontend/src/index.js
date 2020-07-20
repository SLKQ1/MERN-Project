import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// importing react router browser router
import { BrowserRouter } from "react-router-dom";
// importing redux provider
import { Provider } from "react-redux";
// importing redux persist gate to wrap the application
import { PersistGate } from "redux-persist/integration/react";
// importing redux store
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
