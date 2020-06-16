import React, { Component } from "react";
import MapGL, { Source, Layer } from "react-map-gl";
import { dataLayer } from "./map-style";

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
    this.setState({ data: data });
  }

  _onViewportChange = (viewport) => this.setState({ viewport });

  render() {
    const { viewport, data } = this.state;

    return (
      <MapGL
        {...viewport}
        // custom style created on mapbox-studio - you can use any style
        mapStyle="mapbox://styles/epsilon2020/ckazj1w0k0zub1iodw6qk9xvy"
        onViewportChange={this._onViewportChange}
        // insert your token
        mapboxApiAccessToken=""
      >
        {/* 
         -- PLOT VECTOR_TILE DATA instead of geojson data
         -- plotting geojson files takes too much time 
        */}
        <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source>

        <Source id="source_id" tileJsonSource={url} />
        <Layer
          type="raster"
          id="layer_id"
          sourceId="source_id"
          before="geojson_id"
        />
      </MapGL>
    );
  }
}

export default App;
