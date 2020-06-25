import React from "react";
import "./App.css";

// importing components
import HomePage from "./pages/Home/HomePage.component";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu.component";

function App() {
  return (
    <div>
      <HamburgerMenu />
      <HomePage />
    </div>
  );
}

export default App;
