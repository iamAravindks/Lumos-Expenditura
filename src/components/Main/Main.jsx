import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  CardHeader,
} from "@material-ui/core";
import Form from "./Form/Form";
import List from "./List/List";
import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
          <CardHeader title="Expenditura" subheader="Your personal money manager"/>
      <CardContent>
        <Typography align='center' variant='h5'>
          Total balance : $100
        </Typography>
        {/* <Typography
          variant='subtitle1'
          style={{
            lineHeight: "1.5em",
            marginTop: "20px",
          }}
        ></Typography> */}
        <Divider className={classes.divider} />
        <Form/>
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
