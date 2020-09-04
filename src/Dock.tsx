import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Dock.css";

const useStyles = makeStyles({
  dock: {
    padding: "10px",
    display: "flex",
    backgroundColor: "transparent",
  },
  dockIcon: {
    fontSize: "60px",
  },
});

const Dock = () => {
  const classes = useStyles();
  const handleGitClick = (e: React.MouseEvent<SVGSVGElement>) => {
    window.open("https://github.com/AD9000");
  };

  const handleLinkedInClick = (e: React.MouseEvent<SVGSVGElement>) => {
    window.open("https://www.linkedin.com/in/atharv-damle");
  };

  return (
    <Paper elevation={3}>
      <Grid className={classes.dock}>
        <GitHubIcon
          onClick={handleGitClick}
          className={`DockIcon ${classes.dockIcon}`}
        />
        <LinkedInIcon
          onClick={handleLinkedInClick}
          className={`DockIcon ${classes.dockIcon}`}
        />
      </Grid>
    </Paper>
  );
};

export { Dock };
