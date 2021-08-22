import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Typography from "@material-ui/core/Typography";

const ListItemTrendingComponent = () => {
  return (
    <ListItem>
      <ListItemText
        primary={
          <Typography type="body2" style={{ fontWeight: "600" }}>
            #tesla
          </Typography>
        }
        secondary="17k tweets"
      />
      <ListItemSecondaryAction>
        <MoreHorizIcon />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListItemTrendingComponent;
