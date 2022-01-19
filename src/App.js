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
        // style={{ minHeight: "10vh" }}
      >
        <Grid item xs={10} sm={7} lg={3} className={classes.Income}>
          <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={8} lg={3 }className={classes.Form}>
          <Main />
        </Grid>
        <Grid item xs={10} sm={7} lg={3 }className={classes.Expense}>
          <Details title='Expense' />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
