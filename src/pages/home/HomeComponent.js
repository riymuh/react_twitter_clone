import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import { SearchComponent } from "../../components/home/SearchComponent";
import TrendingComponent from "../../components/home/TrendingComponent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRight: "1px solid #eeeeee",
    borderLeft: "1px solid #eeeeee",
    borderRadius: "0",
    height: "100vh",
  },
  header: {
    fontWeight: "bold",
    borderBottom: "1px solid #eeeeee",
  },
  searchBar: {
    paddingLeft: "0",
    paddingRight: "0",
  },
}));

const HomeComponent = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Card className={classes.root} elevation={0}>
          <CardHeader
            className={classes.header}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <Typography variant="h6" style={{ fontWeight: "600" }}>
                Beranda
              </Typography>
            }
            titleTypographyProps={{ variant: "h6" }}
          />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card elevation={0}>
          <CardActions className={classes.searchBar}>
            <SearchComponent />
          </CardActions>
          <TrendingComponent />
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomeComponent;