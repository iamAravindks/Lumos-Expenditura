import { Grid } from "@material-ui/core";
import { useContext, useEffect } from "react";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { MoneyManagerContext } from "./context/transactionContext/context";
import Loader from './components/Loader/Loader'
import makeStyles from "./styles";
const Home = () => {
  const classes = makeStyles();
  const { transactionsState, getAllTransactions } =
    useContext(MoneyManagerContext);
  useEffect(() => {
    getAllTransactions();
  }, []);
  if(transactionsState.loading) return <Loader/>
  return (
    <>
      
      <Header />
      <div className='home'>
        <Grid
          container
          className={classes.grid}
          alignItems='center'
          justifyContent='center'
          // style={{ minHeight: "10vh" }}
        >
          <Grid item xs={10} sm={7} lg={3} className={classes.Income}>
            <Details title='Income' />
          </Grid>
          <Grid item xs={12} sm={8} lg={3} className={classes.Form}>
            <Main />
          </Grid>
          <Grid item xs={10} sm={7} lg={3} className={classes.Expense}>
            <Details title='Expense' />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
