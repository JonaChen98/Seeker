// import { Map, GoogleApiWrapper } from 'google-maps-react';
// import React, { Component } from 'react';

// const mapStyles = {
//   height:"83vh", 
//   maxWidth:"78vw", 
//   flexShrink:"2",
//   float:"left", 
//   zIndex:"1", 
//   marginLeft:"22vw", 
//   float:"left", 
//   marginTop:"140px"
// };

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={12}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: 40.75,
//             lng: -73.88
//           }
//         }
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBCur8DfP6_TDhh-UuI4y5gfSqsdBB11D4'
// })(MapContainer);

import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const mapStyles = {
  height:"84vh", 
  width:"78vw", 
  flexShrink:"2",
  float:"left", 
  zIndex:"1", 
  marginLeft:"22vw", 
  float:"left", 
  marginTop:"128px",
  zIndex:"0"
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

const center = {
  lat: 40.711,
  lng: -73.943
};

export default class MapContainer extends Component {
  constructor(){
    super();
    this.state={
        events:[],
        loading: true
    }
  }

  componentDidMount(){
    fetch("http://localhost:8080/api/event")
        .then(res => res.json())
        .then(events => {
            this.setState({
            loading: false,
            events: events.map((p,ii) => <Marker onLoad={onLoad} position={{lat: p.lat, lng: p.long}} key={ii} />),
            });
        })
        .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyBCur8DfP6_TDhh-UuI4y5gfSqsdBB11D4"
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={center}
          zoom={11}
        >
          <>
            {this.state.events}
          </>
        </GoogleMap>
      </LoadScript>
    )
  }
}