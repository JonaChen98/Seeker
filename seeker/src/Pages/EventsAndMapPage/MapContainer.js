import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
  height:"83vh", 
  maxWidth:"78vw", 
  flexShrink:"2",
  float:"left", 
  zIndex:"1", 
  marginLeft:"22vw", 
  float:"left", 
  marginTop:"140px"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={
          {
            lat: 40.75,
            lng: -73.88
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBCur8DfP6_TDhh-UuI4y5gfSqsdBB11D4'
})(MapContainer);