import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    position: "fixed",
    bottom: 0,
    right: "25px",
  },
  chatBox: {
    borderTopRightRadius: "50px",
    borderTopLeftRadius: "50px",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ChatComponent() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={5}>
      <CardHeader
        className={classes.chatBox}
        action={
          <IconButton aria-label="settings">
            <KeyboardArrowUpIcon />
            <EmailIcon />
          </IconButton>
        }
        title={
          <Typography variant="h6" style={{ fontWeight: "600" }}>
            Pesan
          </Typography>
        }
      />
    </Card>
  );
}
