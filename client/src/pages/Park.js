import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MapContainer from "../components/Map";

class Park extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MapContainer />
        <Footer />
      </div>
    );
  }
}

export default Park;
