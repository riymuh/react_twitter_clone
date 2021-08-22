import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";

const ListItemSidebarComponent = (props) => {
  const components = {
    HomeOutlinedIcon: HomeOutlinedIcon,
    NotificationsNoneOutlinedIcon: NotificationsNoneOutlinedIcon,
    EmailOutlinedIcon: EmailOutlinedIcon,
    BookmarkBorderOutlinedIcon: BookmarkBorderOutlinedIcon,
    FormatListBulletedRoundedIcon: FormatListBulletedRoundedIcon,
    PersonOutlineOutlinedIcon: PersonOutlineOutlinedIcon,
    MoreHorizRoundedIcon: MoreHorizRoundedIcon,
    LocalOfferOutlinedIcon: LocalOfferOutlinedIcon,
  };

  const TagName = components[props.item.icon];
  return (
    <ListItem button>
      <ListItemIcon>
        <TagName />
      </ListItemIcon>
      <ListItemText primary={props.item.name} />
    </ListItem>
  );
};

export default ListItemSidebarComponent;
