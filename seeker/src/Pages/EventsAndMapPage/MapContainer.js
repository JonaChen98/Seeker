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
  lat: 40.75,
  lng: -73.88
};

const position = {
  lat: 40.7812,
  lng: -73.9665
}

const position2 = {
  lat: 40.7812,
  lng: -73.975
}

const position3 = {
  lat: 40.75,
  lng: -73.9
}

const position4 = {
  lat: 40.73,
  lng: -73.9
}

const position5 = {
  lat: 40.76,
  lng: -73.92
}

const position6 = {
  lat: 40.76,
  lng: -73.9665
}

const position7 = {
  lat: 40.76,
  lng: -73.9575
}

const position8 = {
  lat: 40.752,
  lng: -73.9475
}

const position9 = {
  lat: 40.761,
  lng: -73.9975
}

const position10 = {
  lat: 40.751,
  lng: -73.9975
}


const position11 = {
  lat: 40.751,
  lng: -73.993
}

const position12 = {
  lat: 40.74,
  lng: -73.983
}

const position13 = {
  lat: 40.7,
  lng: -73.983
}

const position14 = {
  lat: 40.7912,
  lng: -73.98
}

const position15 = {
  lat: 40.812,
  lng: -73.92
}

const position16 = {
  lat: 40.7031,
  lng: -74.0160
}

const position17 = {
  lat: 40.7331,
  lng: -74.00160
}

const position18 = {
  lat: 40.6783,
  lng: -73.9108
}

const position19 = {
  lat: 40.6602,
  lng: -73.9690
}

const position20 = {
  lat: 40.7335,
  lng: -73.7801
}

export default class MapContainer extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyBCur8DfP6_TDhh-UuI4y5gfSqsdBB11D4"
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={center}
          zoom={12}
        >
          <>
            <Marker
              onLoad={onLoad}
              position={position}
            />
            <Marker
              onLoad={onLoad}
              position={center}
            />
            <Marker
              onLoad={onLoad}
              position={position2}
            />
            <Marker
              onLoad={onLoad}
              position={position3}
            />
            <Marker
              onLoad={onLoad}
              position={position4}
            />
            <Marker
              onLoad={onLoad}
              position={position5}
            />
            <Marker
              onLoad={onLoad}
              position={position6}
            />
            <Marker
              onLoad={onLoad}
              position={position7}
            />
            <Marker
              onLoad={onLoad}
              position={position8}
            />
            <Marker
              onLoad={onLoad}
              position={position20}
            />
            <Marker
              onLoad={onLoad}
              position={position9}
            />
            <Marker
              onLoad={onLoad}
              position={position10}
            />
            <Marker
              onLoad={onLoad}
              position={position11}
            />
            <Marker
              onLoad={onLoad}
              position={position12}
            />
            <Marker
              onLoad={onLoad}
              position={position13}
            />
            <Marker
              onLoad={onLoad}
              position={position14}
            />
            <Marker
              onLoad={onLoad}
              position={position15}
            />
            <Marker
              onLoad={onLoad}
              position={position18}
            />
            <Marker
              onLoad={onLoad}
              position={position19}
            />
            <Marker
              onLoad={onLoad}
              position={position16}
            />
            <Marker
              onLoad={onLoad}
              position={position17}
            />
          </>
        </GoogleMap>
      </LoadScript>
    )
  }
}