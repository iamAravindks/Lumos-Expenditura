import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import makeStyles from "./styles";

const App = () => {
  const classes = makeStyles();
  return (
    <div>
      <Grid
        container
        className={classes.grid}
        spacing={2}
        alignItems='center'
        justifyContent='center'
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title='Expense' />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
