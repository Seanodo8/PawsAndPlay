import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Park from "./pages/Park";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";



function App() {
    return (
      <Router>
      <div>
      
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/park" component={Park} />
        <Route exact path="/profile" component={Profile} />

        </Switch>

      </div>
    </Router>
    );
  }


export default App;
