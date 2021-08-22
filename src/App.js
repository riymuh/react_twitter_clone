import React from "react";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SidebarComponent from "./layouts/SidebarComponent";
import HomeComponent from "./pages/home/HomeComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const [spacing, setSpacing] = React.useState(0);
  const classes = useStyles();
  return (
    <div className="App">
      <Container>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={3}>
            <SidebarComponent />
          </Grid>
          <Grid item xs={9}>
            <HomeComponent />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
