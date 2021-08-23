import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  search: {
    width: "100%",
    borderRadius: "50px!important",
    backgroundColor: "#eeeeee",
    border: "none",
    padding: "10px",
    paddingLeft: "20px",
  },
}));
export const SearchComponent = () => {
  const classes = useStyles();
  return (
    <InputBase
      id="outlined-basic"
      placeholder="Cari di Twitter"
      className={classes.search}
    />
  );
};
