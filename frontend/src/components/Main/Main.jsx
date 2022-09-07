import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  CardHeader,
} from "@material-ui/core";
import { useContext, useState } from "react";
import { MoneyManagerContext } from "../../context/transactionContext/context";
import formatDate from "../../utils/formatDate";
import Form from "./Form/Form";
import List from "./List/List";
import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(MoneyManagerContext);
  
  const initialState = {
    amount: "",
    category: "",
    type: "Income",
    date: formatDate(new Date()),
  };
  const [formData, setFormData] = useState(initialState);
  const [editMode, setEditMode] = useState(false)
  


  return (
    <Card className={classes.root}>
      <CardHeader title="Expenditura" subheader="Your personal money manager" />
      <CardContent>
        <Typography align="center" variant="h5">
          You made an
        </Typography>
        <Typography align="center" variant="h5">
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
        <Form
          formData={formData}
          setFormData={setFormData}
          initialState={initialState}
          editMode={editMode}
          setEditMode={setEditMode}
          
        />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List
              setFormData={setFormData}
              setEditMode={setEditMode}
              editMode={editMode}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
