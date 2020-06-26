import React from "react";
import "./App.css";

// importing components
import HomePage from "./pages/Home/HomePage.component";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu.component";
import WristShotDetails from "./pages/WristShotDetails/WristShotDetails.component";

// importing react router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <HamburgerMenu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/wrist-shot/:id" component={WristShotDetails} />
      </Switch>
    </div>
  );
}

export default App;
