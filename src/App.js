import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Doctors from "./components/Doctors";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Switch>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/service" component={Service} />
      <Route path="/doctors" component={Doctors} />
      <Route path="/contact-us" component={Contact} />
    </Switch>
  );
}

export default App;
