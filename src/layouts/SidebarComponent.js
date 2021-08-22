import React, { useState } from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import TwitterIcon from "@material-ui/icons/Twitter";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Button } from "@material-ui/core";
import ListItemSidebarComponent from "./ListItemSidebarComponent";
import { NavigateBeforeSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},
  buttonWidth: {
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "50px",
  },
  avatar: {
    backgroundColor: green,
  },
}));

const SidebarComponent = () => {
  const classes = useStyles();
  const [navbar, setnavbar] = useState([
    {
      id: 1,
      name: "Beranda",
      icon: "HomeOutlinedIcon",
    },
    {
      id: 2,
      name: "Jelajahi",
      icon: "HomeOutlinedIcon",
    },
    {
      id: 3,
      name: "Notifikasi",
      icon: "NotificationsNoneOutlinedIcon",
    },
    {
      id: 4,
      name: "Pesan",
      icon: "EmailOutlinedIcon",
    },
    {
      id: 5,
      name: "Markah",
      icon: "BookmarkBorderOutlinedIcon",
    },
    {
      id: 6,
      name: "Daftar",
      icon: "FormatListBulletedRoundedIcon",
    },
    {
      id: 7,
      name: "Profile",
      icon: "PersonOutlineOutlinedIcon",
    },
    {
      id: 8,
      name: "Selengkapnya",
      icon: "MoreHorizRoundedIcon",
    },
  ]);
  return (
    <div>
      <Card className={classes.root} elevation={0}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem>
            <ListItemIcon>
              <TwitterIcon color="primary" fontSize="large" />
            </ListItemIcon>
          </ListItem>
          {navbar.map((item) => (
            <ListItemSidebarComponent item={item} />
          ))}

          <ListItem>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.buttonWidth}
            >
              Tweet
            </Button>
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default SidebarComponent;
