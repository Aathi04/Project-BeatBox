import "../App.css";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@mui/material/Drawer";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";


const drawerWidth = "15%";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  iconStyle: {
    color: "white",
  },
  textStyle: {
    fontSize: "14px",
  },
  toolbar: theme.mixins.toolbar,
}));

function Sidebar() {

  const classes = useStyles();
  const history = useHistory();

  const menuItems = [
    {
      text: "HOME",
      icon: <HomeRoundedIcon />,
      path: "/",
    },
    {
      text: "SEARCH",
      icon: <SearchRoundedIcon />,
      path: "/homepage/search",
    },
    {
      text: "SETTINGS",
      icon: <SettingsRoundedIcon />,
      path: "/homepage/settings",
    },
  
  ];

  return (
    <>
      <div className="sideBar">
        <Drawer
          className="drawer"
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          PaperProps={{
            sx: {
              height: "85%",
              bgcolor: "#302E2E",
              color: "white",
              
            },
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  history.push(item.path);
                }}
                >
                <ListItemIcon className={classes.iconStyle}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText classes={{primary: classes.textStyle}}
                primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </>
  );
}

export default Sidebar;