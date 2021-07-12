import React from "react";
import Navbar from "./components/UI-Kit/Navbar/index";
import { Mainpage } from "./pages/Mainpage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Mainpage />
    </>
  );
}

export default App;
