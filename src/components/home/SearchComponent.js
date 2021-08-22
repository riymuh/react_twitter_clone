import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  search: {
    width: "100%",
    borderRadius: "50px!important",
    backgroundColor: "#eeeeee",
    border: "none!important",
  },
}));
export const SearchComponent = () => {
  const classes = useStyles();
  return (
    <TextField
      id="outlined-basic"
      label="Cari di Twitter"
      variant="outlined"
      className={classes.search}
    />
  );
};
