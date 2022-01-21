import { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
import { ADD_TRANSACTION, CLEAR_TRANSACTIONS, DELETE_TRANSACTION } from "./types";
const initialState =JSON.parse(localStorage.getItem('transactions')) || [];

export const MoneyManagerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) =>
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  const addTransaction = (transaction) =>
    dispatch({ type: ADD_TRANSACTION, payload: transaction });
  const clearTransactions = ()=>dispatch({type : CLEAR_TRANSACTIONS})
const balance = transactions.reduce((acc, currTransaction) =>
  currTransaction.type === "Expense"
    ? acc - currTransaction.amount
    : acc + currTransaction.amount
,0);
  return (
    <MoneyManagerContext.Provider
      value={{ deleteTransaction, addTransaction,clearTransactions, transactions,balance }}
    >
      {children}
    </MoneyManagerContext.Provider>
  );
};
