import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "1px solid #eeeeee",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function TweetComponent() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} elevation={0}>
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
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <IconButton aria-label="comment">
          <ChatBubbleOutlineIcon fontSize="small" title="fds" />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="markah">
          <BookmarkBorderIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
