import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import { Dock } from "./Dock";
import "typeface-roboto";
import "./App.css";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  app: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid container className={classes.app}>
        <Grid item container className={classes.banner}>
          <Typography
            variant="h1"
            component="h2"
            style={{ marginBottom: "10px" }}
          >
            Atharv Damle
          </Typography>
          <Typography variant="h4" component="h2">
            Unsw Student | Software Developer
          </Typography>
        </Grid>
        <Grid item>
          <Dock />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
