import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./types";

const contextReducer = (state, action) =>
{
    switch (action.type) {
        case DELETE_TRANSACTION:
            const transactions = state.filter(transaction => transaction.id !== action.payload)
            return  transactions 
        case ADD_TRANSACTION: 
            const addedTransactions = [action.payload, ...state]
            return addedTransactions
        default:
            return state;
    }
}
export default contextReducer