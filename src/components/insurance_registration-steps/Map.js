import React, { Component } from 'react';
import {withScriptjs,withGoogleMap,GoogleMap,Marker} from "react-google-maps";
import { compose, withProps } from "recompose";
var ht = 200

class Map extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <GoogleMap defaultZoom={10} defaultCenter={{ lat: 30.6741667, lng: -96.3697222 }} >
        <div id="Markers">
          <Marker position={{ lat: 30.6741667, lng: -96.3697222 }} />
        </div>
      </GoogleMap>
    );
  }
}

const MAP_REQUIRED_PROPS = {
  googleMapURL:
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAWaJsYK1oooUZZFjnTLIPEyjf97t3v9vQ&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ width: "100%", height: ht }} />,
  mapElement: <div style={{ height: `100%` }} />
};

const Page = compose(withProps(MAP_REQUIRED_PROPS),
  withScriptjs,
  withGoogleMap)(Map)

export default Page
