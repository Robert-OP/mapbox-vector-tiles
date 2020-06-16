## Objective

**To render vector-tiles data on the map**

- server-side : Node.js + MongoDB
- client-side : React + Mapbox

This app folder just includes the basic set-up that shows the components associated for rendering the vector-tiles in actual project.

## Folder Structure

The main directory includes to sub folders for server and client respectively.

- #### Node Server

  The `app.js` file includes simple express router that gets data from MongoDB, converts it into vector-tiles and send it as response to client. The file **`layers.geojson`** is the sample data coming from Mongo DB, **`vector-tile.json`** includes the sample data that I obtain after converting geoJSON into vector-tiles using npm package `geojson-vt`. Also, the file `vector-tile.json` is response being send to client.

  ```
  .
  ├── server
  │   ├── data
  │   │   ├── vector-tile.json
  │   │   └── layers.geojson
  │   ├── package.json
  │   ├── package-lock.json
  │   └── app.js

  ```

- #### React Client

  This folder includes the basic layout of React App. The file `Mapbox.js` is the component which consumes incoming vector-tiles coming from the backend.

  ```
  ├── client
  │   ├── src
  │   │   ├── map-style.js
  │   │   ├── index.js
  │   │   ├── index.css
  │   │   └── Mapbox.js
  │   ├── public
  │   │   └── index.html
  │   ├── package.json
  │   └── package-lock.json
  └── readme.md
  ```
