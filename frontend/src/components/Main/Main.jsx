import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  CardHeader,
} from "@material-ui/core";
import { useContext } from "react";
import { MoneyManagerContext } from "../../context/context";
import Form from "./Form/Form";
import List from "./List/List";
import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();
  const {balance} = useContext(MoneyManagerContext)
console.log(balance,balance<0)
  return (
    <Card className={classes.root}>
      <CardHeader title='Expenditura' subheader='Your personal money manager' />
      <CardContent>
        <Typography align='center' variant='h5'>
          You made an
        </Typography>
        <Typography align='center' variant='h5'>
          extra {balance >= 0 ? "income" : "expense"} of :{" "}
          {`$${Math.abs(balance)}`}
        </Typography>
        {/* <Typography
          variant='subtitle1'
          style={{
            lineHeight: "1.5em",
            marginTop: "20px",
          }}
        ></Typography> */}
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
