import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

import CurrentLocation from "./Map";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={"current location"} />
        <Marker
          onClick={this.onMarkerClick}
          name={"Eagle Nest Park"}
          position={{ lat: 28.5171, lng: -81.4497 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Bill Frederick Park"}
          position={{ lat: 28.507, lng: -81.4824 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Willie Mays Park"}
          position={{ lat: 28.5177, lng: -81.4379 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Pleasant Valley Park"}
          position={{ lat: 28.5309, lng: -81.4423 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Orlo Vista Park"}
          position={{ lat: 28.542, lng: -81.4663 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Gilbert McQueen Park"}
          position={{ lat: 28.5329, lng: -81.4232 }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBszBQIEKJdgmmOAkim8a5DCuMRUvMCo_s"
})(MapContainer);
