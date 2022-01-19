import express from 'express'
import expressAsyncHandler from "express-async-handler"
import Transactions from "../models/transactionsModel"

const transactionRouter = express.Router()

transactionRouter.get('/', expressAsyncHandler(async (req, res) =>
{
    try {
        const transactions = await Transactions.find({})
        res.send(transactions)
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}))

transactionRouter.post('/', expressAsyncHandler(async (req, res) =>
{
    try {
        const allTransactions = await Transactions.find({});
        console.log(allTransactions);
        
        const newTransaction = {
            amount: req.body.amount,
            category: req.body.category,
            type: req.body.type
        }
        console.log(newTransaction);
        
        allTransactions.transactions.push(newTransaction)
        const updatedTransactions = await allTransactions.save()
              res.status(201).send({
                message: "Transaction Created.",
                data: updatedTransactions.transactions[
                  updatedTransactions.transactions.length - 1
                ],
              });
    } catch (error) {
         res.status(500).send({ message: error.message });
    }
}))

export default transactionRouter