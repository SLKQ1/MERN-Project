import React from "react";
import "./App.css";

// importing components
import HomePage from "./pages/Home/HomePage.component";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu.component";

// importing react router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <HamburgerMenu />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
