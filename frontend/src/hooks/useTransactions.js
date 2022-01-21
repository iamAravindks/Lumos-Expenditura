import { useContext } from 'react'
import { MoneyManagerContext } from "../context/transactionContext/context"
import { expenseCategories, incomeCategories, resetCategories } from '../constants/categories'

const useTransactions = (title) =>
{
    resetCategories()
    const { transactions } = useContext(MoneyManagerContext)
    
    const transactionsPerType = transactions.filter(transaction => transaction.type === title)
    
    const totalAmount = transactionsPerType.reduce((acc, currTransaction) => acc += currTransaction.amount, 0)
    const categories = title === "Income" ? incomeCategories : expenseCategories
    
     transactionsPerType.forEach((transaction) => {
       const category = categories.find(
         (cat) => cat.type === transaction.category
       );
         if (category) category.amount += transaction.amount;
     });

     const filteredCategories = categories.filter(
       (category) => category.amount > 0
     );
      const chartData = {
        datasets: [
          {
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
          },
        ],
        labels: filteredCategories.map((c) => c.type),
      };
    return {totalAmount,chartData}
}
export default useTransactions