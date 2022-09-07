import { useContext, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { MoneyManagerContext } from "../../../context/transactionContext/context";
import useStyles from "./styles";
import {
  expenseCategories,
  incomeCategories,
} from "../../../constants/categories";
import formatDate from "../../../utils/formatDate";
import CustomSnackbar from "../../SnackBar/SnackBar";
import { ErrorContext } from "../../../context/errorContext/ErrorContext";
import Alert from "../../Alert/Alert";


const initialFocus = {
  category: false,
  amount: false,
};
const Form = ({ formData, setFormData, initialState,editMode,setEditMode }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState(null);
  const [focus, setFocus] = useState(initialFocus);
  const {
    addTransaction,
    clearTransactions,
    transactionsState,
    editTransaction,
  } = useContext(MoneyManagerContext);
  const { error,setError } = useContext(ErrorContext);
  const categories =
    formData.type === "Income" ? incomeCategories : expenseCategories;
  

  const updateTransaction = async () =>
  {
    
    const { amount, type, category, date} = formData
    if (formData.hasOwnProperty("id") && formData.id)
    {
      editTransaction(formData.id, amount, type, category, date);
      setFormData(initialState)
    } else
    {
      setError("You are not in edit mode")
    }
  }
 

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
    };
    if (
      formData.amount &&
      formData.category &&
      formData.type &&
      formData.date
    ) {
      addTransaction(transaction);
      setFormData(initialState);
      setSeverity("success");
      setFocus(initialFocus);
    } else {
      if (!formData.category)
        setFocus({
          category: true,
          amount: false,
        });
      else {
        setFocus({
          category: false,
          amount: true,
        });
      }
      setSeverity("warning");
    }
    setOpen(true);
  };

  return (
    <Grid container spacing={2}>
      <CustomSnackbar open={open} setOpen={setOpen} severity={severity} />
      {error && <Alert severity="error" message={error} />}
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
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
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel focused={focus.category}>Category</InputLabel>
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
          type="number"
          label="Amount"
          fullWidth
          focused={focus.amount}
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid xs={6} item>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: formatDate(e.target.value) })
          }
        />
      </Grid>
      {editMode ? (
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          fullWidth
          onClick={updateTransaction}
        >
          Update
        </Button>
      ) : (
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          fullWidth
          onClick={createTransaction}
        >
          Create
        </Button>
      )}

      <Button
        className={classes.button}
        variant="text"
        color="secondary"
        fullWidth
        onClick={() => {
          setFormData(initialState);
          setEditMode(false);
        }}
      >
        {editMode ? "Cancel update" : "Clear Form"}
      </Button>
      {transactionsState.transactions.length > 0 && (
        <Button
          className={classes.button}
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={() => clearTransactions()}
        >
          Clear All Transactions
        </Button>
      )}
    </Grid>
  );
};

export default Form;
