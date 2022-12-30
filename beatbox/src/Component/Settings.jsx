import React, { Component } from "react";
import "../App.css";
import MusicControlBar from "./MusicControlBar";
import { Switch } from "@material-ui/core";
import { Typography, withStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
import { AppTool } from "./apptool";

const useStyles = (theme) => ({
  h5: {
    paddingBottom: 0,
    fontSize: "25px",
    color: "#ffffff",
  },
  h3: {
    fontSize: "40px",
    paddingBottom: 0,
    color: "#ffffff",
  },
  body1: {
    fontSize: "16px",
    color: "#8d8d8d",
    marginTop: "13px",
  },
});

class SettingsPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="side-nav-bar" style={{backgroundColor: '#302E2E'}}>
          <Sidebar/>
        </div>

        <div className="apptool">
                <AppTool />
            </div>

        <div className="content-container">
          <div className="inner-container" id="setting-container">
            <div className="row" id="settings-menu-row">
              <Typography variant="h3" classes={{ h3: classes.h3 }}>
                Settings
              </Typography>
            </div>
                    <br />
            <div className="row" id="settings-menu-row">
              <div className="col-md-12" id="setting-subtitles">
                <Typography variant="h5" classes={{ h5: classes.h5 }}>
                  Languages
                </Typography>
              </div>
              <div className="col-md-9">
                <Typography variant="body1" classes={{ body1: classes.body1 }}>
                  Choose language - Changes will be applied after restarting the
                  app
                </Typography>
              </div>
              <div className="col-md-3">
              </div>
            </div>


            <div className="row" id="settings-menu-row">
              <div className="col-md-12" id="setting-subtitles">
                <Typography variant="h5" classes={{ h5: classes.h5 }}>
                  Autoplay
                </Typography>
              </div>
              <div className="col-md-9">
                <Typography variant="body1" classes={{ body1: classes.body1 }}>
                  Enjoy non-stop listening. When your audio ends, we'll play you
                  something similar
                </Typography>
              </div>
              <div className="col-md-3">
                <Switch />
              </div>
            </div>

            <div className="row" id="settings-menu-row">
              <div className="col-md-12" id="setting-subtitles">
                <Typography variant="h5" classes={{ h5: classes.h5 }}>
                  Audio quality
                </Typography>
              </div>

              <div className="col-md-9">
                <Typography variant="body1" classes={{ body1: classes.body1 }}>
                  Streaming quality
                </Typography>
              </div>
              <div className="col-md-3">
               
              </div>

              <div className="col-md-9">
                <Typography variant="body1" classes={{ body1: classes.body1 }}>
                  Auto adjust quality{" "}
                </Typography>
              </div>
              <div className="col-md-3">
               
                <Switch />
              </div>
            </div>

            <div className="row" id="settings-menu-row">
              <div className="col-md-12" id="setting-subtitles">
                <Typography variant="h5" classes={{ h5: classes.h5 }}>
                  Personalisation
                </Typography>
              </div>
              <div className="col-md-9">
                <Typography variant="body1" classes={{ body1: classes.body1 }}>
                  App theme
                </Typography>
              </div>
              <div className="col-md-3">
                
              </div>
            </div>
          </div>
        </div>

        <div className="music-control-bar">
          <MusicControlBar />
        </div>
      </>
    );
  }
}

export default withStyles(useStyles)(SettingsPage);