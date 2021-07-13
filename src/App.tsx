import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/UI-Kit/Navbar/index";

import { Mainpage } from "./pages/Mainpage";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { SignUp } from "./pages/SignUp";
import { ContactUs } from "./pages/Contact-us";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Mainpage} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
