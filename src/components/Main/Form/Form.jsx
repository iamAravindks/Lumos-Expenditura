import { useContext, useState } from "react";
import
  {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { MoneyManagerContext } from "../../../context/context";
import useStyles from "./styles";
import { expenseCategories, incomeCategories } from '../../../constants/categories'
import formatDate from '../../../utils/formatDate'

const initialState = {
  amount: "",
  category: " ",
  type: "Income",
  date: formatDate(new Date()),
};


const Form = () =>
{

  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(MoneyManagerContext);
  const categories= formData.type==="Income" ? incomeCategories : expenseCategories
  const createTransaction = () =>
  {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
    addTransaction(transaction)
    setFormData(initialState)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          Add your expense/income
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {categories.map((category) => (
              <MenuItem key={category.type} value={category.type}>
                {category.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={6} item>
        <TextField
          type='number'
          label='Amount'
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid xs={6} item>
        <TextField
          type='date'
          label='Date'
          fullWidth
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })}
        />
      </Grid>
      <Button
        className={classes.button}
        variant='outlined'
        color='primary'
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
