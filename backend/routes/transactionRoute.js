import express from "express";
import expressAsyncHandler from "express-async-handler";
import Transactions from "../models/transactionsModel";
import { isAuth } from "../middlewares/authMiddleware";
import mongoose from "mongoose";
const transactionRouter = express.Router();

// @desc Get all transactions
// @route GET /api/transactions
// @access Private
transactionRouter.get(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const transactions = await Transactions.findOne({ user: req.user._id });
      if (!transactions) {
        res.json({
          message: "No transactions found",
          data: null,
        });
      } else res.send(transactions.transactions);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
);

// @desc Add new transaction
// @route POST /api/transactions
// @access Private

transactionRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const newTransaction = {
        amount: req.body.amount,
        category: req.body.category,
        type: req.body.type,
        date: new Date(req.body.date),
      };
      const allTransactions = await Transactions.findOne({ user: req.user.id });
      if (!allTransactions) {
        const createdTransaction = await Transactions.create({
          user: mongoose.Types.ObjectId(req.user.id),
          transactions: [newTransaction],
        });
        const { amount, category, type, date } =
          createdTransaction.transactions[0];
        res.status(201).json({
          message: "Transaction created",
          data: {
            amount,
            category,
            type,
            date,
          },
        });
      } else {
        allTransactions.transactions.push(newTransaction);
        const updatedTransactions = await allTransactions.save();
        const { amount, category, type, date } =
          updatedTransactions.transactions[
            updatedTransactions.transactions.length - 1
          ];

        res.status(201).send({
          message: "Transaction Created.",
          data: { amount, category, type, date },
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
);

// @desc Delete the whole transactions
// @route DELETE /api/transactions
// @access Private
transactionRouter.delete(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const checkTransactions = await Transactions.findOne({
        user: mongoose.Types.ObjectId(req.user._id),
      });
      if (checkTransactions && checkTransactions.transactions) {
        await Transactions.deleteOne({
          user: mongoose.Types.ObjectId(req.user._id),
        });
        res.status(200).json({
          message: "cleared all the transactions",
          data: null,
        });
      } else {
        res.status(404).json({ message: "No transactions to delete" });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
);

// @desc Delete a transaction
// @route /api/transaction/:id
// @access Private
transactionRouter.delete(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const checkTransactionsExists = await Transactions.findOne({
        user: mongoose.Types.ObjectId(req.user._id),
      });
      if (checkTransactionsExists && checkTransactionsExists.transactions) {
        const options = { returnNewDocument: true };
        const deletedTransaction = await Transactions.findOneAndUpdate(
          {
            user: mongoose.Types.ObjectId(req.user._id),
          },
          {
            $pull: {
              transactions: { _id: mongoose.Types.ObjectId(req.params.id) },
            },
          },
          options
        );
        res.json({
          data: deletedTransaction.transactions,
        });
      } else {
        res.status(404).json({
          message: "No transactions found",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
);

export default transactionRouter;
