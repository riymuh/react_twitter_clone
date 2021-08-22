import React, { useState } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Button } from "@material-ui/core";
import ListItemSidebarComponent from "./ListItemSidebarComponent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    height: "100%",
    minWidth: "300px",
  },
  avatar: {
    backgroundColor: red[500],
  },
  buttonWidth: {
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "50px",
  },
  profile: {
    position: "absolute",
    bottom: "0",
    width: "100%",
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
      icon: "LocalOfferOutlinedIcon",
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
    <div className={classes.root}>
      <Card elevation={0}>
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
      <Card className={classes.profile} elevation={0}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          title="Riyadh Muhammad"
          subheader="@riymuh"
        />
      </Card>
    </div>
  );
};

export default SidebarComponent;
