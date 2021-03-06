import React, { Component } from "react";
import MapGL, { Source, Layer } from "react-map-gl";
// import { dataLayer } from "./map-style";
import "mapbox-gl/dist/mapbox-gl.css";

class App extends Component {
  state = {
    data: [],
    viewport: {
      width: "100vw",
      height: "100vh",
      center: [51.3149725, 9.3905753],
      zoom: 2,
    },
  };

  async componentDidMount() {
    // http request for getting Vector-Tiles Data
    // using axios-get request within getMap() function in original project
    // const { data } = await getMap() ;
    const { data } = "";
    this.setState({ data });
  }

  _onViewportChange = (viewport) => this.setState({ viewport });

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken="MAPBOX_TOKEN_HERE"
      >
        {/* 
         -- PLOT VECTOR_TILE DATA instead of geojson data
         -- plotting geojson files takes too much time 
        */}
        {/* <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source> */}

        {/* <Source id="source_id" tileJsonSource={url} />
        <Layer
          type="raster"
          id="layer_id"
          sourceId="source_id"
          before="geojson_id"
        /> */}
        <Source type="vector" url="mapbox://robert-op.dw757j5c">
          <Layer
            id="vector-layer"
            type="fill"
            source-layer="layers-d6wv5z"
            paint={{ "fill-color": "#3288bd", "fill-outline-color": "#f46d43" }}
          />
        </Source>
      </MapGL>
    );
  }
}

export default App;
