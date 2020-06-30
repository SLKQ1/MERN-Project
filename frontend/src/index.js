import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// importing react router browser router
import { BrowserRouter } from "react-router-dom";
// importing redux provider
import { Provider } from "react-redux";
// importing redux store
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
