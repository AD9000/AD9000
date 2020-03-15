import React from "react";
import { Grid, Paper } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Dock.css";

export class Dock extends React.Component {
  style = {
    back: { backgroundColor: "rgb(255, 255, 255, 0.6" }
  };
  handleGitClick = e => {
    window.open("https://github.com/AD9000");
  };

  handleLinkedInClick = e => {
    window.open("https://www.linkedin.com/in/atharv-damle");
  };
  render() {
    return (
      <Paper
        elevation={3}
        // classes={this.style.back}
        // classes="DockBackground"
        //  style={{ backgroundColor: "rgb(255, 255, 255, 0.6" }}
      >
        <Grid className="Dock">
          <GitHubIcon
            onClick={this.handleGitClick}
            style={{ fontSize: "60px" }}
            className="DockIcon"
          />
          <LinkedInIcon
            onClick={this.handleLinkedInClick}
            style={{ fontSize: "60px" }}
            className="DockIcon"
          />
        </Grid>
      </Paper>
    );
  }
}
