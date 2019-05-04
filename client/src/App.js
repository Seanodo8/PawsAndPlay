import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Park from "./pages/Park";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/park" component={Park} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
