import { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./types";
const initialState = [];

export const MoneyManagerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) =>
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  const addTransaction = (transaction) =>
    dispatch({ type: ADD_TRANSACTION, payload: transaction });

  return (
    <MoneyManagerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions }}
    >
      {children}
    </MoneyManagerContext.Provider>
  );
};
