import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Dock } from "./Dock";
import "typeface-roboto";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Grid
        container
        style={{ height: "98%" }}
        align="center"
        justify="center"
        className="App"
      >
        <Typography
          variant="h1"
          component="h2"
          style={{ marginBottom: "10px" }}
        >
          Atharv Damle
        </Typography>
        <Typography variant="h4" component="h2">
          aka Arthur/Al
        </Typography>
      </Grid>
      <Dock />
    </div>
  );
}

export default App;
