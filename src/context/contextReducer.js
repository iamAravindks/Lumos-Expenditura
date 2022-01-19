import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  CLEAR_TRANSACTIONS,
} from "./types";

const contextReducer = (state, action) => {
  switch (action.type) {
    case DELETE_TRANSACTION:
      const transactions = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    case ADD_TRANSACTION:
      const addedTransactions = [action.payload, ...state];
      localStorage.setItem("transactions", JSON.stringify(addedTransactions));
      return addedTransactions;
      case CLEAR_TRANSACTIONS:
          const clearedTransactions = []
          localStorage.setItem(
            "transactions",
            JSON.stringify(clearedTransactions)
          );
          return clearedTransactions
    default:
      return state;
  }
};
export default contextReducer;
