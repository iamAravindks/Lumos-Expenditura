import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  CLEAR_TRANSACTIONS,
  FAIL_TRANSACTION,
  REQUEST_TRANSACTION,
  LOAD_TRANSACTION,
} from "./types";

const contextReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_TRANSACTION:
      return { ...state, loading: true };
    case LOAD_TRANSACTION:
      return { loading: false, transactions: action.payload };
    case DELETE_TRANSACTION:
      return { loading: false, transactions: action.payload };
    case ADD_TRANSACTION:
      const addedTransactions = [action.payload, ...state.transactions];
      return { loading: false, transactions: addedTransactions };
    case CLEAR_TRANSACTIONS:
      return { loading: false, transactions: action.payload };
    case FAIL_TRANSACTION:
      return {...state,loading:false};
    default:
      return state;
  }
};
export default contextReducer;
