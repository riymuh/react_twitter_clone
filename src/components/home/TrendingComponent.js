import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ListItemTrendingComponent from "./ListItemTrendingComponent";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#eeeeee",
    borderRadius: "10px",
  },
  title: {
    fontSize: 14,
  },
});

export default function TrendingComponent() {
  const classes = useStyles();

  return (
    <CardContent className={classes.root}>
      <Typography variant="h6" component="h5" style={{ fontWeight: "600" }}>
        Tren untuk Anda
      </Typography>
      <List>
        <ListItemTrendingComponent />
        <ListItemTrendingComponent />
      </List>
    </CardContent>
  );
}
