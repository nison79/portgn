import React from 'react';
import './App.css';
import Header from "./Header";
import Contact from "./Contact";
import Works from "./Works";
import Section from "./Section";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/works">
              <Works/>
            </Route>
            <Route path="/">
              <Header/>
              <Section/>
            </Route>
          </Switch>     
      </Router>
    </div>
  );
}

export default App;
