import React from "react";
import "./App.css";

// importing components
import HomePage from "./pages/Home/HomePage.component";
import Header from "./components/Header/Header.component";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
