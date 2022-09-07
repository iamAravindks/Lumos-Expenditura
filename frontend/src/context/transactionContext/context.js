import axios from "axios";
import { useReducer, createContext, useContext } from "react";
import { ErrorContext } from "../errorContext/ErrorContext";
import contextReducer from "./contextReducer";
import { ADD_TRANSACTION, CLEAR_TRANSACTIONS, DELETE_TRANSACTION, FAIL_TRANSACTION, LOAD_TRANSACTION, REQUEST_TRANSACTION, UPDATE_TRANSACTION } from "./types";

const initialState = {
  loading: false,
  transactions :[]
}

export const MoneyManagerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactionsState, dispatch] = useReducer(contextReducer, initialState);
  const { setError } = useContext(ErrorContext)
  const config = {
               headers: {
                 "Content-Type": "application/json",
               },
             };
  const deleteTransaction = async(id) =>
  {
     try {
       dispatch({
         type: REQUEST_TRANSACTION,
       });
       const { data } = await axios.delete(`/api/transactions/${id}`, config);
       dispatch({
         type: DELETE_TRANSACTION,
         payload: data.data,
       });
     } catch (error) {
       dispatch({
         type: FAIL_TRANSACTION,
       });
       const err =
         error.response && error.response.data.message
           ? error.response.data.message
           : error.message;
       setError(err);
     }
  }
  const editTransaction = async (id, amount, type, category,date) => {
    try {
      dispatch({
        type: REQUEST_TRANSACTION,
      });
      const { data } = await axios.put(
        `/api/transactions/${id}`,
        {amount,type,category,date},
        config
      );
      dispatch({
        type: UPDATE_TRANSACTION,
        payload: data.data.transactions,
      });
    } catch (error) {
      dispatch({
        type: FAIL_TRANSACTION,
      });
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log(err)
      setError(err);
    }
  };
  
    
  const clearTransactions =async () =>
  {
     try {
       dispatch({
         type: REQUEST_TRANSACTION,
       });
       const { data } = await axios.delete(`/api/transactions/`, config);
       dispatch({
         type: CLEAR_TRANSACTIONS,
         payload: data.data,
       });
     } catch (error) {
       dispatch({
         type: FAIL_TRANSACTION,
       });
       const err =
         error.response && error.response.data.message
           ? error.response.data.message
           : error.message;
       setError(err);
     }
  }
  
  const addTransaction = async(transaction) =>
  {
         try {
           dispatch({
             type: REQUEST_TRANSACTION,
           });
           const { data } = await axios.post("/api/transactions",transaction, config,);
           dispatch({
             type: ADD_TRANSACTION,
             payload: data.data,
           });
         } catch (error) {
           dispatch({
             type: FAIL_TRANSACTION,
           });
           const err =
             error.response && error.response.data.message
               ? error.response.data.message
               : error.message;
           setError(err);
         }
    }
    
  const getAllTransactions =async () =>
  {
    try
    {
      dispatch({
        type:REQUEST_TRANSACTION
      })
      const { data } = await axios.get('/api/transactions', config)
      dispatch({
        type: LOAD_TRANSACTION,
        payload:data.data
      })
    } catch (error) {
      dispatch({
        type: FAIL_TRANSACTION,
      });
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      setError(err);
  
    }
  }
 
  const balance =
    transactionsState.transactions.length === 0
      ? 0
      : transactionsState.transactions.reduce(
          (acc, currTransaction) =>
            currTransaction.type === "Expense"
              ? acc - currTransaction.amount
              : acc + currTransaction.amount,
          0
      );
  
  return (
    <MoneyManagerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        clearTransactions,
        transactionsState,
        balance,
        getAllTransactions,
        editTransaction
      }}
    >
      {children}
    </MoneyManagerContext.Provider>
  );
};
