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
  control: {
    padding: theme.spacing(2),
  },
  sidebar: {
    position: "relative",
    overflow: "hidden",
  },
}));

function App() {
  const [spacing, setSpacing] = React.useState(0);
  const classes = useStyles();
  return (
    <div className="App">
      <Container>
        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={3} className={classes.sidebar}>
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
