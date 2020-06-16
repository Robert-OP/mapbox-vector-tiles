const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const geojsonvt = require("geojson-vt");

const port = 8080;

app.get("/map", async (req, res) => {
  /* -- step I
    /* ------ getting geoJSON data from database ---------------------*/

  // the output of this request is stored in "./data/layers.geojson"
  // this data is dynamic and changes for every request from client
  let data = await Polygon.find({});

  /* --step II 
    /* ------ getting geoJSON data from database ---------------------*/
  // the output of this request is stored in "./data/vector-tile.json"
  const formatGeojson = {
    type: "FeatureCollection",
    crs: {
      type: "name",
      properties: {
        name: "urn:ogc:def:crs:OGC:1.3:CRS84",
      },
    },
    features: data,
  };

  //console.log(formatGeojson)
  const tileIndex = geojsonvt(formatGeojson);

  //let response = 'data'
  res.send(tileIndex);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
