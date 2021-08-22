import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "1px solid #eeeeee",
  },
  button: {
    borderRadius: "25px",
  },
}));

export default function CreateTweetComponent() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={1}
          rowsMax={10}
          placeholder="Apa yang sedang terjadi ?"
          variant="outlined"
          fullWidth="100%"
        />
      </CardContent>
      <CardContent disableSpacing>
        <Button
          variant="contained"
          color="primary"
          size="small"
          disableElevation
          align="right"
          className={classes.button}
        >
          Tweet
        </Button>
      </CardContent>
    </Card>
  );
}
