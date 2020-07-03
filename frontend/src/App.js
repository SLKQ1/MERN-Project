import React from "react";
import "./App.css";

// importing components
import HomePage from "./pages/Home/HomePage.component";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu.component";

// importing react router
import { Route, Switch, useLocation } from "react-router-dom";
import Modal from "./components/Modal/Modal.component";
import FullSizeImage from "./pages/FullSizeImage/FullSizeImage.component";

function App() {
  let location = useLocation();
  let background = location.state && location.state.background;
  return (
    <div>
      <HamburgerMenu />
      <Switch location={background || location}>
        <Route exact path="/" component={HomePage} />
        <Route path="/full-size/:id" component={FullSizeImage} />
        {/* <Route path="/wrist-shot/:id" component={WristShotDetails} /> */}
      </Switch>
      {/* show modal when background is set */}
      {background && <Route path="/wrist-shot/:id" children={<Modal />} />}
    </div>
  );
}

export default App;
